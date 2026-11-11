import {createAxios, createClient, type GameMode} from './index';
import {recordingAdapter, recordingClient} from './testing/recording-adapter';

describe('Game Mode', () => {
  it('sends no mode param when gameMode() is never called', async () => {
    const {api, urls} = recordingClient();

    await api.FlipFinder.getTfaItems();
    await api.Items.getItem(1050, true);

    expect(urls()).toEqual(['tfa-items', 'items/1050?detail=true']);
  });

  it('sends the mode on later requests through every wrapper', async () => {
    const {api, urls} = recordingClient();
    const mode: GameMode = 'hcw';

    api.gameMode(mode);
    await api.FlipFinder.getTfaItems();
    await api.Items.getItem(1050);
    await api.Graphs.getWeek(1050);

    expect(urls()).toEqual([
      'tfa-items?mode=hcw',
      'items/1050?mode=hcw',
      'graph/1050/week?mode=hcw',
    ]);
  });

  it('reads the mode when a request is sent, not when it resolves', async () => {
    const {api, urls} = recordingClient();

    const before = api.Items.getItem(1050);
    api.gameMode('hcw');
    const after = api.Items.getItem(1050);
    await Promise.all([before, after]);

    expect(urls()).toEqual(['items/1050', 'items/1050?mode=hcw']);
  });

  it('stops sending the mode after switching back to the Main Game', async () => {
    const {api, urls} = recordingClient();

    api.gameMode('hcw');
    api.gameMode('main');
    await api.FlipFinder.getTfaItems();
    await api.Items.getItem(1050);
    await api.Graphs.getWeek(1050);

    expect(urls()).toEqual(['tfa-items', 'items/1050', 'graph/1050/week']);
  });

  it('dmm() is a shortcut for the Event and never sends dmm=1', async () => {
    const {api, urls} = recordingClient();

    api.dmm(true);
    await api.Items.getItem(1050);
    api.dmm(false);
    await api.Items.getItem(1050);
    api.dmm();
    await api.Items.getItem(1050);

    expect(urls()).toEqual([
      'items/1050?mode=event',
      'items/1050',
      'items/1050?mode=event',
    ]);
  });

  it('joins the mode param with ? or & as needed', async () => {
    const {api, urls} = recordingClient();

    api.gameMode('hcw');
    await api.FlipFinder.getTfaItems();
    await api.FlipFinder.getTfaItems({newOnly: true});

    expect(urls()).toEqual([
      'tfa-items?mode=hcw',
      'tfa-items?new_only=1&mode=hcw',
    ]);
  });

  it('leaves a URL that already has a mode or dmm param as is', async () => {
    const {api, urls} = recordingClient();
    const client = api.getClient();

    api.gameMode('hcw');
    await client.get('items?mode=event');
    await client.get('items?dmm=1');
    await client.get('items?detail=true&mode=main');

    expect(urls()).toEqual([
      'items?mode=event',
      'items?dmm=1',
      'items?detail=true&mode=main',
    ]);
  });

  it('matches existing params by name, not by substring', async () => {
    const {api, urls} = recordingClient();
    const client = api.getClient();

    api.gameMode('hcw');
    await client.get('items?nodmm=1');
    await client.get('items/mode=1');

    expect(urls()).toEqual(['items?nodmm=1&mode=hcw', 'items/mode=1?mode=hcw']);
  });

  it('keeps separate modes for separate clients', async () => {
    const {adapter, urls} = recordingAdapter();
    const hcw = createClient('key', {adapter});
    const main = createClient('key', {adapter});

    hcw.gameMode('hcw');
    await hcw.Items.getItem(1050);
    await main.Items.getItem(1050);

    expect(urls()).toEqual(['items/1050?mode=hcw', 'items/1050']);
  });

  it('shares one mode between the api and its axios client', async () => {
    const {api, urls} = recordingClient();

    api.getClient().gameMode('hcw');
    await api.Items.getItem(1050);
    api.getClient().dmm(false);
    await api.Items.getItem(1050);

    expect(urls()).toEqual(['items/1050?mode=hcw', 'items/1050']);
  });

  it('sets the mode on a standalone axios client (#24)', async () => {
    const {adapter, urls} = recordingAdapter();
    const client = createAxios('key', {adapter});

    client.dmm(true);
    await client.get('items/1050');
    client.gameMode('hcw');
    await client.get('items/1050');

    expect(urls()).toEqual(['items/1050?mode=event', 'items/1050?mode=hcw']);
  });
});

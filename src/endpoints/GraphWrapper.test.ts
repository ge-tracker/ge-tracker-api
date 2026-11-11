import {recordingClient} from '../testing/recording-adapter';

describe('Graphs Game Mode', () => {
  it('overrides the client mode with a mode other than the Main Game', async () => {
    const {api, urls} = recordingClient();

    api.gameMode('hcw');
    api.Graphs.gameMode('event');
    await api.Graphs.getWeek(1050);
    await api.Graphs.getDuration('day', 1050, 'runelite');
    await api.Graphs.getCandlestick('month', 1050);
    await api.Graphs.forceReload('week', 1050);
    await api.Items.getItem(1050);

    expect(urls()).toEqual([
      'graph/1050/week?mode=event',
      'graph/1050/day?source=runelite&mode=event',
      'graph/candlestick/1050/month?mode=event',
      'graph/force-reload?mode=event',
      'items/1050?mode=hcw',
    ]);
  });

  it('uses the client mode when set to the Main Game', async () => {
    const {api, urls} = recordingClient();

    api.gameMode('hcw');
    api.Graphs.gameMode('event');
    api.Graphs.gameMode('main');
    await api.Graphs.getWeek(1050);

    expect(urls()).toEqual(['graph/1050/week?mode=hcw']);
  });

  it('dmm() is a chainable shortcut for the Event', async () => {
    const {api, urls} = recordingClient();

    await api.Graphs.dmm().getWeek(1050);
    await api.Graphs.dmm(false).getWeek(1050);
    await api.Graphs.gameMode('hcw').getWeek(1050);

    expect(urls()).toEqual([
      'graph/1050/week?mode=event',
      'graph/1050/week',
      'graph/1050/week?mode=hcw',
    ]);
  });
});

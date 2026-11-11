import {recordingClient} from '../testing/recording-adapter';

describe('FlipFinder.getTfaItems', () => {
  it('drops Hand Picked Items when newOnly is true', async () => {
    const {api, urls} = recordingClient();

    await api.FlipFinder.getTfaItems({newOnly: true});

    expect(urls()).toEqual(['tfa-items?new_only=1']);
  });

  it('keeps Hand Picked Items when newOnly is omitted or false', async () => {
    const {api, urls} = recordingClient();

    await api.FlipFinder.getTfaItems();
    await api.FlipFinder.getTfaItems({});
    await api.FlipFinder.getTfaItems({newOnly: false});

    expect(urls()).toEqual(['tfa-items', 'tfa-items', 'tfa-items']);
  });
});

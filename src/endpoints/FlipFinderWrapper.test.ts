import {recordingClient} from '../testing/recording-adapter';

describe('FlipFinder.getTfaItems', () => {
  it('drops Hand Picked Items when newOnly is true', async () => {
    const {api, requests} = recordingClient();

    await api.FlipFinder.getTfaItems({newOnly: true});

    expect(requests.map(r => r.url)).toEqual(['tfa-items?new_only=1']);
  });

  it('keeps Hand Picked Items when newOnly is omitted or false', async () => {
    const {api, requests} = recordingClient();

    await api.FlipFinder.getTfaItems();
    await api.FlipFinder.getTfaItems({});
    await api.FlipFinder.getTfaItems({newOnly: false});

    expect(requests.map(r => r.url)).toEqual([
      'tfa-items',
      'tfa-items',
      'tfa-items',
    ]);
  });
});

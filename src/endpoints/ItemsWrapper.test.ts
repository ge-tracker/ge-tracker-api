import {recordingClient} from '../testing/recording-adapter';
import type {SearchPrefetch} from './ItemsWrapper';

const PREFETCH: SearchPrefetch = {
  data: {
    items: [{name: 'Abyssal whip', item_id: 4151, slug: 'abyssal-whip'}],
    tags: [{name: 'Weapons', slug: 'weapons'}],
  },
  meta: {sum: '5d41402abc4b2a76b9719d911017c592'},
};

describe('Items.searchPrefetch', () => {
  it('keeps meta.sum alongside the items and tags', async () => {
    const {api} = recordingClient(PREFETCH);

    expect(await api.Items.searchPrefetch()).toEqual(PREFETCH);
  });

  it('sends no mode in the Main Game and the client’s Game Mode otherwise', async () => {
    const {api, urls} = recordingClient(PREFETCH);

    await api.Items.searchPrefetch();
    api.gameMode('hcw');
    await api.Items.searchPrefetch();

    expect(urls()).toEqual(['search/prefetch', 'search/prefetch?mode=hcw']);
  });

  it('rejects a 403 with the backend’s message', async () => {
    const message = 'This API key lacks the flipping:write ability.';
    const {api} = recordingClient({message, status_code: 403}, 403);

    await expect(api.Items.searchPrefetch()).rejects.toMatchObject({
      response: {status: 403, data: {message}},
    });
  });
});

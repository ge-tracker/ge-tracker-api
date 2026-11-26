import {recordingClient} from '../testing/recording-adapter';
import type {ApiKeyInfo} from './ApiKeyWrapper';

const SCOPED: ApiKeyInfo = {
  name: 'Sheets export',
  kind: 'external',
  abilities: ['flipping:read'],
  createdAt: '2026-11-26 09:30:00',
};

describe('ApiKey.get', () => {
  it('unwraps the calling API Key', async () => {
    const {api, urls} = recordingClient({data: SCOPED});

    const key = await api.ApiKey.get();

    expect(urls()).toEqual(['/api-key']);
    expect(key).toEqual(SCOPED);
  });

  it('unwraps a session caller as Full Access with null fields', async () => {
    const session: ApiKeyInfo = {
      name: null,
      kind: null,
      abilities: ['*'],
      createdAt: null,
    };
    const {api} = recordingClient({data: session});

    expect(await api.ApiKey.get()).toEqual(session);
  });

  it('rejects a 403 with the backend’s message', async () => {
    const message = 'This API key lacks Full Access.';
    const {api} = recordingClient({message, status_code: 403}, 403);

    await expect(api.ApiKey.get()).rejects.toMatchObject({
      response: {status: 403, data: {message}},
    });
  });
});

import type {AxiosAdapter, InternalAxiosRequestConfig} from 'axios';
import {createClient} from '../index';

function recordingClient() {
  const requests: InternalAxiosRequestConfig[] = [];
  const adapter: AxiosAdapter = async config => {
    requests.push(config);
    return {
      data: {data: []},
      status: 200,
      statusText: 'OK',
      headers: {},
      config,
    };
  };

  return {api: createClient('key', {adapter}), requests};
}

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

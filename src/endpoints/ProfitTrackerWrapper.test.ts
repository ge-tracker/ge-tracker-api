import type {GameMode} from '../types';
import {recordingClient} from '../testing/recording-adapter';
import type {ProfitTrackerListParams} from './ProfitTrackerWrapper';

const LISTS = [
  ['getTransactions', '/profit-tracker'],
  ['getActiveTransactions', '/profit-tracker/active-transactions'],
  ['getBuyingTransactions', '/profit-tracker/buying'],
  ['getBoughtTransactions', '/profit-tracker/bought'],
  ['getSellingTransactions', '/profit-tracker/selling'],
  ['getSoldTransactions', '/profit-tracker/sold'],
] as const;

const MODES: GameMode[] = ['main', 'hcw', 'event'];

async function listAll(mode: GameMode, opts?: ProfitTrackerListParams) {
  const {api, urls} = recordingClient();
  api.gameMode(mode);
  for (const [method] of LISTS) {
    await api.ProfitTracker[method](opts);
  }
  return urls();
}

describe('ProfitTracker lists in every Game Mode', () => {
  it.each(MODES)('sends only mode=all with allModes in %s', async mode => {
    expect(await listAll(mode, {allModes: true})).toEqual(
      LISTS.map(([, url]) => `${url}?mode=all`),
    );
  });

  it.each([undefined, {}, {allModes: false}])(
    'leaves URLs unchanged without allModes (%p)',
    async opts => {
      const bare = LISTS.map(([, url]) => url);

      expect(await listAll('main', opts)).toEqual(bare);
      expect(await listAll('hcw', opts)).toEqual(
        bare.map(url => `${url}?mode=hcw`),
      );
    },
  );

  it('keeps other params alongside mode=all', async () => {
    const {api, urls} = recordingClient();

    api.gameMode('hcw');
    await api.ProfitTracker.getTransactions({page: 2, allModes: true});
    await api.ProfitTracker.getSoldTransactions({
      mode: 'event',
      allModes: true,
    });

    expect(urls()).toEqual([
      '/profit-tracker?page=2&mode=all',
      '/profit-tracker/sold?mode=all',
    ]);
  });
});

describe('ProfitTracker Transactions', () => {
  it('carry their Game Mode', async () => {
    const {api} = recordingClient({data: [{id: 'a', mode: 'event'}]});

    const transactions = await api.ProfitTracker.getTransactions({
      allModes: true,
    });

    expect(transactions.data.map(t => t.mode)).toEqual(['event']);
  });
});

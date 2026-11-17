import type {GameMode} from '../types';
import {recordingClient} from '../testing/recording-adapter';

const BODY = {
  data: [{id: 1, mode: 'hcw'}],
  meta: {
    modes: [
      {mode: 'main', title: 'Main Game', available: true},
      {mode: 'hcw', title: 'Hardcore Worlds', available: true},
      {mode: 'event', title: 'Deadman Mode', available: false},
    ],
  },
};

const MODES: GameMode[] = ['main', 'hcw', 'event'];

describe('PriceAlert.getAlerts in every Game Mode', () => {
  it.each(MODES)('sends only mode=all with allModes in %s', async mode => {
    const {api, urls} = recordingClient(BODY);

    api.gameMode(mode);
    await api.PriceAlert.getAlerts({allModes: true});

    expect(urls()).toEqual(['/price-alerts?mode=all']);
  });

  it('keeps each alert’s mode and meta.modes', async () => {
    const {api} = recordingClient(BODY);

    const alerts = await api.PriceAlert.getAlerts({allModes: true});

    expect(alerts.data.map(alert => alert.mode)).toEqual(['hcw']);
    expect(alerts.meta.modes.map(mode => mode.available)).toEqual([
      true,
      true,
      false,
    ]);
    expect(alerts).toEqual(BODY);
  });
});

describe('PriceAlert.getAlerts in one Game Mode', () => {
  it('unwraps the alerts and leaves URLs unchanged', async () => {
    const {api, urls} = recordingClient(BODY);

    const all = await api.PriceAlert.getAlerts();
    const item = await api.PriceAlert.getAlerts(1050);
    api.gameMode('hcw');
    await api.PriceAlert.getAlerts();
    await api.PriceAlert.getAlerts(1050);

    expect(all.map(alert => alert.mode)).toEqual(['hcw']);
    expect(item).toEqual(BODY.data);
    expect(urls()).toEqual([
      '/price-alerts',
      '/price-alerts/1050',
      '/price-alerts?mode=hcw',
      '/price-alerts/1050?mode=hcw',
    ]);
  });
});

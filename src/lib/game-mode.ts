import type {GameMode} from '../types';

const MODE_PARAMS = ['mode', 'dmm'];

function hasModeParam(url: string): boolean {
  const start = url.indexOf('?');
  if (start === -1) {
    return false;
  }

  const params = new URLSearchParams(url.slice(start + 1));
  return MODE_PARAMS.some(name => params.has(name));
}

/**
 * Append `mode=<mode>` to a URL; the Main Game sends no mode param, and a URL
 * that already has a `mode` or `dmm` param is left as is
 */
export function withGameMode(url: string, mode: GameMode): string {
  if (mode === 'main' || hasModeParam(url)) {
    return url;
  }

  return `${url}${url.includes('?') ? '&' : '?'}mode=${mode}`;
}

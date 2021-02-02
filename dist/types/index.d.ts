import { GeTrackerApi } from "./lib/api";
declare const createClient: (apiKey: string, opts?: null) => GeTrackerApi;
declare const createClientFromEnv: (opts?: null) => GeTrackerApi;
export { createClient, createClientFromEnv, };

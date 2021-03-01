import { GeTrackerApi } from "./lib/api";
import { ApiKey } from "./lib/client";
import { AxiosRequestConfig } from "axios";
export * from "./types";
declare const createClient: (apiKey: ApiKey, opts?: AxiosRequestConfig | null) => GeTrackerApi;
declare const createClientFromEnv: (opts?: AxiosRequestConfig | null) => GeTrackerApi;
export { createClient, createClientFromEnv, };
export type { GeTrackerApi };
//# sourceMappingURL=index.d.ts.map
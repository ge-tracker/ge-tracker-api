import { ApiKey } from "./lib/client";
import { AxiosRequestConfig } from "axios";
import { GeTrackerApi } from "./types";
declare const createClient: (apiKey: ApiKey, opts?: AxiosRequestConfig | null) => GeTrackerApi;
declare const createClientFromEnv: (opts?: AxiosRequestConfig | null) => GeTrackerApi;
export { createClient, createClientFromEnv, };
export * from "./types";
//# sourceMappingURL=index.d.ts.map
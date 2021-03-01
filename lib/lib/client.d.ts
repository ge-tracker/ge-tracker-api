import { AxiosInstance, AxiosRequestConfig } from 'axios';
declare const GE_TRACKER_API_URL = "https://www.ge-tracker.com/api";
export declare type ApiKey = string | null | undefined;
declare const DefaultOptions: AxiosRequestConfig;
declare function createClient(apiKey: ApiKey, opts?: AxiosRequestConfig | null): AxiosInstance;
export { DefaultOptions, createClient, GE_TRACKER_API_URL };
//# sourceMappingURL=client.d.ts.map
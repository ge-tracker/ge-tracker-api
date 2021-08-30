import { AxiosInstance, AxiosRequestConfig } from 'axios';
declare const GE_TRACKER_API_URL = "https://www.ge-tracker.com/api";
export declare type ApiKey = string | null | undefined;
declare const DefaultOptions: AxiosRequestConfig;
export interface CustomAxiosInstance extends AxiosInstance {
    dmm(enabled: boolean): void;
}
declare function createClient(apiKey: ApiKey, opts?: AxiosRequestConfig | null): CustomAxiosInstance;
export { DefaultOptions, createClient, GE_TRACKER_API_URL };
//# sourceMappingURL=client.d.ts.map
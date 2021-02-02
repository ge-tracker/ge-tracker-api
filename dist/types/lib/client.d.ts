import { AxiosInstance, AxiosRequestConfig } from 'axios';
declare const GE_TRACKER_API_URL = "https://www.ge-tracker.com/api";
declare const DefaultOptions: AxiosRequestConfig;
declare function createClient(apiKey: string, opts?: AxiosRequestConfig | null): AxiosInstance;
export { DefaultOptions, createClient, GE_TRACKER_API_URL };

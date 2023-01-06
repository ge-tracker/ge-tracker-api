/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosRequestConfig } from 'axios';
import { ApiKey } from '@/lib/client';

const api = {
    createClient: jest.fn(
        (apiKey: ApiKey, opts?: AxiosRequestConfig | null) => true
    ),
    createClientFromEnv: jest.fn((opts?: AxiosRequestConfig | null) => true),
};

module.exports = api;

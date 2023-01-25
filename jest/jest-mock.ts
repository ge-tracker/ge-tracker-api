/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import { CreateAxiosDefaults } from 'axios';
import { ApiKey } from '@getracker/api';

const actual = jest.requireActual('@getracker/api');

const api = {
    ...actual,
    createClient: jest.fn(
        (apiKey: ApiKey, opts?: CreateAxiosDefaults | null) => true
    ),
    createClientFromEnv: jest.fn((opts?: CreateAxiosDefaults | null) => true),
};

module.exports = api;

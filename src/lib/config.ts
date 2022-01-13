import { ApiKey } from "./client";

function getApiKeyFromEnv(): ApiKey {
    return process.env.GE_TRACKER_API_KEY
}

export {
    getApiKeyFromEnv
};

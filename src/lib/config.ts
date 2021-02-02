function getApiKeyFromEnv(): string {
    // @ts-ignore
    return process.env.GE_TRACKER_API_KEY
}

export {
    getApiKeyFromEnv
};

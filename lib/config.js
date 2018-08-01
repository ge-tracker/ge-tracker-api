function getApiKeyFromEnv() {
    const apiKey = process.env.GE_TRACKER_API_KEY

    return apiKey
}

module.exports = {
    getApiKeyFromEnv
}

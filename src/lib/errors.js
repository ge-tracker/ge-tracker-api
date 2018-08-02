class InvalidApiKey extends Error {
    constructor() {
        super('Specified API key was missing or invalid');
        Error.captureStackTrace(this, InvalidApiKey)
    }
}

export {
    InvalidApiKey
};

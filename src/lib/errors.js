function captureStackTrace(targetObject, constructorOpt = undefined) {
    if (Error.captureStackTrace) {
        Error.captureStackTrace(targetObject, constructorOpt);
    }
}

class InvalidApiKey extends Error {
    constructor() {
        super('Specified API key was missing or invalid');
        captureStackTrace(this, InvalidApiKey);
    }
}

export {
    InvalidApiKey
};

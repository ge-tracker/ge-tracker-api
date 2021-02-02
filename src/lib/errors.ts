function captureStackTrace(targetObject: object, constructorOpt: Function | undefined = undefined) {
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

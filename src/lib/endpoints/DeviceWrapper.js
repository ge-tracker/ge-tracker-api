export default class DeviceWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapPost(path, params = {}) {
        return this.client.post(path, params)
            .then(({data}) => data);
    }

    /**
     * Register Device to a User
     *
     * Required fields:
     *      - platform
     *      - platformVersion
     *      - width
     *      - height
     *      - uniqueId
     *      - appVersion
     *
     * Optional fields:
     *
     *      - pushInfo.pushToken
     *      - pushInfo.userId
     *
     * @param platform
     * @param platformVersion
     * @param width
     * @param height
     * @param uniqueId
     * @param appVersion
     * @param pushInfo
     * @return {*}
     */
    register({platform, platformVersion, width, height, uniqueId, appVersion, pushInfo}) {
        return this._wrapPost('devices/register', {
            platform,
            platformVersion,
            width,
            height,
            uniqueId,
            appVersion,
            pushInfo
        });
    }
}
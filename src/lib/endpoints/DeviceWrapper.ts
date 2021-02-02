import APIBaseWrapper from './APIBaseWrapper';

export default class DeviceWrapper extends APIBaseWrapper {
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
    register({
                 platform,
                 platformVersion,
                 width,
                 height,
                 uniqueId,
                 appVersion,
                 pushInfo
             }: { platform: string, platformVersion: string, width: number, height: number, uniqueId: string, appVersion: string, pushInfo: object | undefined }) {
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

import pushNotifications, { initialState } from '../../reducers/pushNotifications'
import { setFCMToken } from '../../actions/fcmActions'

describe('fcm reducer', () =>
{
    it('returns the same state on an unhandled action', () =>
    {
        expect(pushNotifications(initialState, {type: '_NULL'})).toMatchSnapshot()
    })

    it('handles SET_FCM_TOKEN action', () =>
    {
        expect(pushNotifications(initialState, setFCMToken(12345))).toMatchSnapshot()
    })
})
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginPassword,
} from 'features/AuthByUsername/model/selectors/getLoginPassord/getLoginPassword';

describe('getLoginPassword.test', () => {
    test('test pass should be 123123', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123123');
    });

    test('test pass with empty sate', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});

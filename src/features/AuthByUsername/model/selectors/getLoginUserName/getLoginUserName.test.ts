import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginUserName,
} from 'features/AuthByUsername/model/selectors/getLoginUserName/getLoginUserName';

describe('getLoginUserName.test', () => {
    test('name should be admin', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('admin');
    });

    test('test with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});

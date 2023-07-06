import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema, ReduxStoreWithManager, ThankExtraArg, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThankExtraArg,
    ThunkConfig,
};

import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { counterActions, counterReducer } from 'entities/Counter/model/slice/counterSlice';

describe('counterSlice.test', () => {
    test('decrement test counterSlice', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
    });

    test('increment test counterSlice', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
    });

    test('test counterSlice without initial state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});

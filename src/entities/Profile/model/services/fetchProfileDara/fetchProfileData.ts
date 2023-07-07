import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/fetchProfile',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Profile>('/profile');
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

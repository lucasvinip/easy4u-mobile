import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProps {
    userPhoto: string,
    userCredit: number
}

const initialState: UserProps = {
    userCredit: 0,
    userPhoto: ''
};

export const userSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleUserPhoto(state) {
            state.userPhoto
        }

    }
});

export const {
    handleUserPhoto
} = userSlice.actions;

export default userSlice.reducer;
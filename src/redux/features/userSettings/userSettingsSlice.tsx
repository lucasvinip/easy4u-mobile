import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProps {
    userCredit: number,
    uploadURL: string,
}

const initialState: UserProps = {
    userCredit: 0,
    uploadURL: '',
};

export const userSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setUploadURL(state, action: PayloadAction<string>) {
            state.uploadURL = action.payload;
            console.log("aa " + action.payload);
        },
    }
});

export const { setUploadURL } = userSlice.actions;

export default userSlice.reducer;

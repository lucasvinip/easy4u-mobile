import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProps {
    userBalance: number,
    uploadURL: string,
}

const initialState: UserProps = {
    userBalance: 0,
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
        setBalance(state, action: PayloadAction<number>){
            
            state.userBalance = action.payload
            console.log("ionf " + action.payload)
            
        },

    }
});

export const { setUploadURL, setBalance} = userSlice.actions;

export default userSlice.reducer;

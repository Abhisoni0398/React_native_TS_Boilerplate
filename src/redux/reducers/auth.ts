import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState { //Each slice file should define a type for its initial state value, so that createSlice can correctly infer the type of state in each case reducer.
  userData: null,
  isFirstTime: boolean,
}

// Define the initial state using that type
const initialState: AuthState = {
  userData: null,
  isFirstTime: false,
}

const authSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    saveUserData: (state, action: PayloadAction<any>) => {
      state.userData = action.payload
    },
    changeFirstTime: (state, action: PayloadAction<boolean>) => {
      state.isFirstTime = action.payload
    },

  },
})

export const { saveUserData, changeFirstTime } = authSlice.actions

export default authSlice.reducer
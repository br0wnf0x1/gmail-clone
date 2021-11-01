import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

// Define a type for the slice state
interface userState {
  user: null | {
    displayName: string;
    email: string;
    photoUrl: string;
  };
}

// Define the initial state using that type
// const initialState: userState = {
//  user: null,
// };

// Workaround: cast state instead of declaring variable type
const initialState = {
  user: null,
} as userState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;

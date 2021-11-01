import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

// Define a type for the slice state
interface mailState {
  sendMessageIsOpen: boolean;
  selectedMail: null | {
    id: string;
    title: string;
    subject: string;
    description: string;
    timestamp: string;
  };
}

// Define the initial state using that type
// const initialState: mailState = {
// selectedMail: null,
// sendMessageIsOpen: false,
// };

// Workaround: cast state instead of declaring variable type
const initialState = {
  selectedMail: null,
  sendMessageIsOpen: false,
} as mailState;

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMail, openSendMessage, closeSendMessage } =
  mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectOpenMail = (state: RootState) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state: RootState) =>
  state.mail.sendMessageIsOpen;

export default mailSlice.reducer;

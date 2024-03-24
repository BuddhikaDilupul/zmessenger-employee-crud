import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  open: false,
};

const AlertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.status = action.payload.status;
      state.open = action.payload.open;
    },

    clearAlert: (state) => {
      state.status = null;
      state.open = false;
    },
  },
});

export const { setAlert, clearAlert } = AlertSlice.actions;

export default AlertSlice.reducer;

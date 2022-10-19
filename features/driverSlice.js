import { createSlice } from '@reduxjs/toolkit';

const driverSlice = createSlice({
  name: 'driver',
  initialState: {
    dirvers: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
    searchKeyword: '',
  },
  reducers: {
    search: (state, action) => {
      state.isLoading = true;
      state.searchKeyword = action.payload;
    },
    markAsLoading: state => {
      state.isLoading = true;
      state.isError = false;
    },
    markAsError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    loadDrivers: (state, action) => {
      state.isLoading = false;
      state.dirvers = action.payload;
      state.isError = false;
    },
  },
});

export const { search, markAsLoading, loadDrivers, markAsError } =
  driverSlice.actions;
export default driverSlice.reducer;

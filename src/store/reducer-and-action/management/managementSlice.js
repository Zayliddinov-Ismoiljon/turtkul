import { getData } from "api/operations";

const {
  createSlice,
  createAsyncThunk,
  createSelector,
} = require("@reduxjs/toolkit");

const initialState = {
  management: [],
  pending: false,
};

const managementSlice = createSlice({
  name: "management",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchManagement.fulfilled, (state, action) => {
      state.pending = false;
      state.management = action.payload;
    });
    builder.addCase(fetchManagement.pending, (state, action) => {
      state.pending = true;
    });
    // builder.addCase(fetchManagement.rejected, (state, action) => {
    //   state.errorMessage = action.payload;
    // });
  },
});

export const fetchManagement = createAsyncThunk(
  "management/data",
  async (currLanguage) => {
    const { data } = await getData(`/${currLanguage}/about/about-gov/`);
    return data;
  }
);

export const getManagement = createSelector(
  (state) => state.management,
  (management) => management.management
);

export default managementSlice.reducer;

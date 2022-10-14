import { getData, postData } from "api/operations";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  supports: [],
  errorMessage: "",
};

const supportsSlice = createSlice({
  name: "supports",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSupports.fulfilled, (state, action) => {
      state.pending = false;
      state.supports = action.payload;
    });
    builder.addCase(fetchSupports.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchSupports.rejected, (state, action) => {
      state.errorMessage = action.payload;
    });
  },
});

export const fetchSupports = createAsyncThunk("/services/Services_Appeal_Get", async () => {
  const { data } = await getData("/services/Services_Appeal_Get");
  return data;
});

export const postSupports = createAsyncThunk(
  "/services/Services_Appeal",
  async (support) => {
    await postData("/services/Services_Appeal", {...support, file: null, date: "01.01.2"});
  }
);

export default supportsSlice.reducer;

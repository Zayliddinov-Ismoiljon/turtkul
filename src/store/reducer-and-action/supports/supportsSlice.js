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

export const fetchSupports = createAsyncThunk("/murojatlar/", async () => {
  const { data } = await getData("/murojatlar/");
  return data;
});

export const postSupports = createAsyncThunk(
  "/murojatlar-create_advanced",
  async (support) => {
    await postData("/murojatlar-create_advanced/", support);
  }
);

export default supportsSlice.reducer;

import { getData } from "api/operations";

const {
  createSlice,
  createAsyncThunk,
  createSelector,
} = require("@reduxjs/toolkit");

const initialState = {
  events: [],
  pending: false,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.pending = false;
      state.events = action.payload;
    });
    builder.addCase(fetchEvents.pending, (state, action) => {
      state.pending = true;
    });
    // builder.addCase(fetchEvents.rejected, (state, action) => {
    //   state.errorMessage = action.payload;
    // });
  },
});

export const fetchEvents = createAsyncThunk(
  "events/events",
  async (currLanguage) => {
    const { data } = await getData(`/${currLanguage}/events`);
    return data;
  }
);

export const getEvents = createSelector(
  (state) => state.events,
  (events) => events.events
);

export default eventsSlice.reducer;

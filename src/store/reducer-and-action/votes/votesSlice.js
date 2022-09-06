import { getData, postData } from "api/operations";
import { toast } from "react-hot-toast";

const {
  createSlice,
  createAsyncThunk,
  createSelector,
} = require("@reduxjs/toolkit");

const initialState = {
  votes: [],
  errorMessage: "",
  pending: false,
  votedSuccess: false,
  cantVote: false,
  voting: false,
};

const votesSlice = createSlice({
  name: "votes",
  initialState,
  reducers: {
    votedSuccess: (state, action) => {
      state.votedSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVotes.fulfilled, (state, action) => {
      state.pending = false;
      state.votes = action.payload;
      state.votedSuccess = true;
    });
    builder.addCase(fetchVotes.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchVotes.rejected, (state, action) => {
      state.errorMessage = action.payload;
    });
    builder.addCase(postVote.pending, (state, action) => {
      state.voting = true;
    });
    builder.addCase(postVote.fulfilled, (state, action) => {
      if (action.payload.data === "voted") {
        toast.error("Siz allaqachon ovoz bergansiz!");
      } else if (action.payload.data === "success") {
        toast.success("Ovoz berildi!");
      }
      state.votes = state.votes.map((vote) => {
        if (vote.id === action.payload.vote.id) {
          let disabledVotes = localStorage.getItem("disabledVotes");
          if (disabledVotes?.length) {
            localStorage.setItem(
              "disabledVotes",
              JSON.stringify([...JSON.parse(disabledVotes), vote.id])
            );
          } else {
            localStorage.setItem("disabledVotes", JSON.stringify([vote.id]));
          }
          return {
            ...vote,
            disabled: true,
          };
        }
        state.voting = false;
        return vote;
      });
    });
  },
});

export const fetchVotes = createAsyncThunk("/vote", async () => {
  const { data } = await getData("/vote");
  return data;
});

export const postVote = createAsyncThunk("/get-vote", async (vote) => {
  const { data } = await postData("/get-vote/", vote);
  return { data, vote };
});

export const getVotes = createSelector(
  (state) => state,
  ({ votes }) => [votes.votes, votes.voting]
);

export default votesSlice.reducer;

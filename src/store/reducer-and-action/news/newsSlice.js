import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { getData } from "api/operations";
import DEFAULT_IMAGE from "assets/default-news-img.jpg";
import { postData } from "./../../../api/operations";

const initialState = {
  activeFilter: "",
  news: {},
  errorMessage: "",
  pending: false,
  fulfilled: false,
  searchNews: {},
  searchNewsPending: false,
  searchNewsError: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setActiveFilter(state, action) {
      state.activeFilter = action.payload;
      state.pending = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      if (action.payload?.data)
        state.news = {
          ...state.news,
          [action.payload?.activeLanguageName]: {
            ...state.news[action.payload?.activeLanguageName],
            [state.activeFilter]: [
              ...action.payload?.data.map((item) => ({
                ...item,
                imagesown: DEFAULT_IMAGE,
              })),
            ],
          },
        };
      state.fulfilled = true;
    });
    builder.addCase(fetchNews.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.errorMessage = action.payload;
    });
    builder.addCase(searchNews.fulfilled, (state, action) => {
      state.searchNews = action.payload.map((item) => ({
        ...item,
        imagesown: DEFAULT_IMAGE,
      }));
      state.searchNewsPending = false;
    });
    builder.addCase(searchNews.rejected, (state) => {
      state.searchNewsPending = false;
    });
    builder.addCase(searchNews.pending, (state) => {
      state.searchNewsPending = true;
    });
  },
});

export const fetchNews = createAsyncThunk(
  "news/fetchByFilter",
  async (filter, thunkAPI) => {
    const {
      language: { activeLanguageName },
      news: { news, activeFilter },
    } = thunkAPI.getState();
    // if (news?.[activeLanguageName]?.[activeFilter]) {
    //   thunkAPI.dispatch(setActiveFilter(filter));
    //   return;
    // }
    const { data } = await getData(
      // `${activeLanguageName}/${activeFilter || filter}`
      `/${activeFilter || filter}`
    );
    thunkAPI.dispatch(setActiveFilter(filter));
    return { activeLanguageName, data };
  }
);

export const searchNews = createAsyncThunk(
  "news/searchNews",
  async ({ search, activeLanguageName }) => {
    if (search) {
      const { data } = await postData(`${activeLanguageName}/search/`, {
        q: search,
      });
      return data;
    }
  }
);

export const getNewsData = createSelector(
  (state) => state,
  ({ language: { activeLanguageName }, news: { activeFilter, news } }) =>
    news?.[activeLanguageName]?.[activeFilter]
);

export const getActiveFilter = createSelector(
  (state) => state.news,
  (news) => news.activeFilter
);
export const getNewsStatus = createSelector(
  (state) => state.news,
  (news) => news.pending
);
export const getSearchResult = createSelector(
  (state) => state.news,
  (news) => [news.searchNews, news.searchNewsPending]
);

export const { setActiveFilter } = newsSlice.actions;

export default newsSlice.reducer;

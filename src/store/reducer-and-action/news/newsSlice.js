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
  newsCount:{}
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setActiveFilter(state, action) {
      state.activeFilter = action.payload;
      state.pending = false;
    },
    setNewsCount(state, action) {
      state.newsCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      if (action.payload)
      state.news = {
        ...state.news,
        [state.activeFilter]: [...action.payload]
        
      };
      state.pending = false;
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
      news: { news, },
    } = thunkAPI.getState();
   
    const { data } = await getData(
      `/${filter}`
    );

    return  data;
  }
);

export const 
searchNews = createAsyncThunk(
  "news/searchNews",
  async ({ search, activeLanguageName }) => {
    if (search) {
      const { data } = await postData(`http://tortkol.uz/authority_news/search`, {
        q: search,
      });
      return data;
    }
  }
);

export const getNewsData = createSelector(
  (state) => state.news,
 ({news,activeFilter})=>news?.[activeFilter]
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

export const { setActiveFilter,setNewsCount } = newsSlice.actions;

export default newsSlice.reducer;

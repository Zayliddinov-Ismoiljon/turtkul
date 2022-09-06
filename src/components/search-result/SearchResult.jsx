import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSearchResult } from "store/reducer-and-action/news/newsSlice";
import FilteredNewsItems from "./../filtered-news/filtered-news-items";

const SearchResult = () => {
  const [searchResult, pending] = useSelector(getSearchResult);
  useEffect(() => {}, [pending]);
  return (
    <div>
      {pending ? (
        "Loading"
      ) : searchResult?.length > 0 ? (
        <FilteredNewsItems news={searchResult} />
      ) : (
        "Not found"
      )}
    </div>
  );
};

export default SearchResult;

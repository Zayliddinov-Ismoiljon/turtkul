import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  Search,
  SearchIconWrapper,
  SearchInputWrapper,
  StyledInputBase,
} from "./app-bar.styles";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { searchNews } from "store/reducer-and-action/news/newsSlice";
import { getActiveLanguageName } from "./../../../store/reducer-and-action/language/language";

const SearchInput = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeLang = useSelector(getActiveLanguageName);

  const onSearchNews = () => {
    dispatch(searchNews({ search: state, activeLanguageName: activeLang }));
    navigate("/search-result");
  };
  return (
    <SearchInputWrapper>
      <Search>
        <StyledInputBase
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSearchNews();
            }
          }}
          value={state}
          onChange={(e) => setState(e.target.value)}
          variant="filled"
          placeholder="izlash..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <SearchIconWrapper onClick={onSearchNews}>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchInputWrapper>
  );
};

export default SearchInput;

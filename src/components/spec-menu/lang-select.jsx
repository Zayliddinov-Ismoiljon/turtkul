import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import {
  fetchNews,
  getActiveFilter,
} from "./../../store/reducer-and-action/news/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveLanguageName,
  getLanguagesName,
  setLanguage,
} from "store/reducer-and-action/language/language";

export const LangSelect = () => {
  const languages = useSelector(getLanguagesName);
  const activeLanguageName = useSelector(getActiveLanguageName);
  const activeFilter = useSelector(getActiveFilter);
  const dispatch = useDispatch();
  return (
    <FormControl sx={{display: "flex"}}>
      <InputLabel id="demo-simple-select-label">
        <LanguageIcon />
      </InputLabel>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="lang"
        value={activeLanguageName}
        onChange={(e) => {
          dispatch(setLanguage(e.target.value)).then(
            dispatch(fetchNews(activeFilter))
          );
        }}
      >
        {languages.map((lang) => (
          <MenuItem value={lang} key={lang}>
            {lang}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

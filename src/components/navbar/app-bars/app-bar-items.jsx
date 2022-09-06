import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const AppBarItems = ({ navbarData }) => {
  return navbarData.map((item, index) =>
    index <= 4 ? (
      <Button
        component={Link}
        to={item.link}
        sx={{ marginRight: 1.5 }}
        key={item.link}
        className="app-bar-item"
      >
        {item.head}
      </Button>
    ) : null
  );
};

export default AppBarItems;

import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Right } from "./management.style";
import Button from "@mui/material/Button";
import ResponsibilityModal from "./responsibilty-modal";

const Management = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Wrapper>
        <img src={data.img} alt="person" />
        <Right>
          <p style={{ marginTop: 0 }}>{data.position}</p>
          <Link to="/">{data.name}</Link>
          <p>{data.phone}</p>
          <p>{data.E_mail}</p>
          <p>{data.date.substr(0, 10)}</p>
          <p>{data.Tel}</p>
          <Button variant="contained" onClick={handleOpen}>
            Majburiyatlari
          </Button>
        </Right>
      </Wrapper>

      <ResponsibilityModal
        body={data.obligation}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default Management;

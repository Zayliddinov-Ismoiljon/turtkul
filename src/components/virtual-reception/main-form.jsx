import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MainFormWrapper, Textarea } from "./virtual-reception.styles";
import SimpleModal from "./../common/modal";
import { useDispatch } from "react-redux";
import { phoneNumberPattern } from "./../../utils/phoneNumberPattern";
import {
  fetchSupports,
  postSupports,
} from "store/reducer-and-action/supports/supportsSlice";

const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // dispatch(postSupports(data));
    // dispatch(fetchSupports());
  };

  useEffect(() => {
    dispatch(fetchSupports());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MainFormWrapper>
        <TextField
          label="Phone Number"
          {...register("phoneNumber", {
            required: {
              value: true,
              message: "Telefon raqamingizni kiriting!",
            },
            minLength: {
              value: 9,
              message: "Telefon raqamingizni to'liq holatda kiriting!",
            },
            pattern: {
              value: phoneNumberPattern,
              message: "Telefon raqami nt kiritildi",
            },
          })}
        />
        {/* <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <TextField
              type="text"
              id="first_name"
              label="First Name"
              required
              sx={{ width: "100%", marginBottom: 5 }}
              {...register("first_name", {
                required: true,
                maxLength: 30,
              })}
            />
            <TextField
              type="text"
              id="last_name"
              label="Last Name"
              sx={{ width: "100%", marginBottom: 5 }}
              required
              {...register("last_name", {
                required: true,
                maxLength: 30,
              })}
            />
            <TextField
              type="email"
              id="email"
              label="Email"
              required
              sx={{ width: "100%", marginBottom: 5 }}
              {...register("email", { required: true, maxLength: 30 })}
            />
           
            <Textarea
              aria-label="address"
              minRows={3}
              placeholder="Address"
              style={{ width: "100%", marginBottom: 5 }}
              required
              id="address"
              label="Address"
              {...register("address", {
                required: true,
                maxLength: 100,
              })}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Textarea
              aria-label="Body"
              minRows={3}
              placeholder="Body"
              style={{ width: "100%", marginBottom: 5 }}
              required
              id="body"
              label="Body"
              {...register("body", { required: true, maxLength: 200 })}
            />
            <TextField
              type="file"
              id="file"
              label="File"
              sx={{ width: "100%", marginBottom: 5 }}
              required
              {...register("file", {
                required: true,
                maxLength: 30,
              })}
            />
          </Grid>
        </Grid> */}
        <SimpleModal
          head={"FUQAROLARNI MUROJAATLARINI KO`RIB ChIQISh TARTIBI"}
          p={"loram..."}
          button={
            "I got acquainted with the rules of procedure for consideration of appeals in the municipality."
          }
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </MainFormWrapper>
    </form>
  );
};

export default MainForm;

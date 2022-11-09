import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { dataContext } from "../../ContextProvider";
import styles from "../../palette.module.scss";
import { formDataRegistration } from "../../utils/formsUtils/formDataRegistration";

const SignUp = () => {
  const { auth, setUserCredentials } = useContext(dataContext);

  const onSubmit = async (deliveryInformation: FieldValues): Promise<void> => {
    createUserWithEmailAndPassword(
      auth,
      deliveryInformation.email,
      deliveryInformation.password
    );

    const creds = {
      name: deliveryInformation.name,
      surname: deliveryInformation.surname,
      email: deliveryInformation.email,
      phone: deliveryInformation.phone,
      zipcode: deliveryInformation.zipcode,
      state: deliveryInformation.state,
      city: deliveryInformation.city,
    };
    asynchSetCreds(creds);
  };

  const asynchSetCreds = (creds: any) => {
    setUserCredentials(creds);
  };
  const { register, handleSubmit, formState } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        sx={{
          bgcolor: styles.colorAutumnLight100,
          minWidth: "26rem",
          p: "2.5rem",
          m: "1rem",
        }}
      >
        {formDataRegistration.map((input) => (
          <FormControl key={input.name} data-testid="formField">
            <InputLabel color="primary" htmlFor={input.name}>
              {input.name}
            </InputLabel>
            <Input
              id={input.name}
              color="primary"
              {...register(input.name.toLowerCase(), {
                pattern: input.pattern,
                minLength: input.minLength,
                maxLength: input.maxLength,
                required: input.required,
              })}
            />
            {formState.errors[input.name.toLowerCase()] && (
              <Typography
                data-testid="formError"
                color="error"
                variant="body2"
                sx={{
                  maxWidth: "20rem",
                  mb: "0.75rem",
                }}
              >
                {input.error}
              </Typography>
            )}
          </FormControl>
        ))}
        <Button type="submit">Sign Up!</Button>
      </Grid>
    </form>
  );
};

export default SignUp;

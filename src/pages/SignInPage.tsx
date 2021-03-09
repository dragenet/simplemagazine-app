import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

import { Link, Typography, TextField, Button } from "@material-ui/core/";

import SignInUpTempalate from "../components/templates/SignInUpTempalate";

const CenterizeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  &&& {
    margin: 24px 0 16px;
  }
`;

const RegisterPage: React.FC = () => {
  return (
    <SignInUpTempalate>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <StyledForm noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign in
        </SubmitButton>

        <CenterizeWrapper>
          <Link component={RouterLink} to="/register" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </CenterizeWrapper>
      </StyledForm>
    </SignInUpTempalate>
  );
};

export default RegisterPage;

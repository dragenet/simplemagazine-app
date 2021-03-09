import React from "react";
import styled from "styled-components";
import { LockOutlined } from "@material-ui/icons";
import { Container, CssBaseline, Avatar } from "@material-ui/core/";
import { useTheme } from "@material-ui/styles";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAvatar = styled(Avatar)`
  &&& {
    margin: 8px;
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const LoginRegisterTemplate: React.FC<LoginRegisteTempalteProps> = ({
  children,
}) => {
  const theme = useTheme();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Wrapper>
        <StyledAvatar theme={theme}>
          <LockOutlined />
        </StyledAvatar>
        {children}
      </Wrapper>
    </Container>
  );
};

type LoginRegisteTempalteProps = {
  children: React.ReactElement | React.ReactElement[];
};

export default LoginRegisterTemplate;

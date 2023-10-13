import { useAppDispatch } from "../../redux/store";
import { useState } from "react";
import {
  LoginPageWrapper,
  LoginButton,
  Form,
  FormWrapper,
  LoginQuote,
  QuoteAuthor,
  QuoteWrapper,
  TextWrapper,
  Label,
  Input,
  LabelSpan,
  StyledNavLink,
} from "./Login.styled";
import { login } from "../../redux/auth/operations";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      login({
        email,
        password,
      })
    ).then(() => console.log("succes"));
  };
  return (
    <LoginPageWrapper>
      <FormWrapper>
        <Form>
          <Label>
            Email <LabelSpan>*</LabelSpan>
            <Input
              type="text"
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label>
            Password <LabelSpan>*</LabelSpan>
            <Input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <LoginButton type="submit" onClick={handleLoginSubmit}>
            Login
          </LoginButton>
          <StyledNavLink to="/signup">Register</StyledNavLink>
        </Form>
      </FormWrapper>
      <QuoteWrapper>
        <TextWrapper>
          <LoginQuote>
            Books are the ships of thoughts, wandering through the waves of
            time.
          </LoginQuote>
          <QuoteAuthor>Francis Bacon</QuoteAuthor>
        </TextWrapper>
      </QuoteWrapper>
    </LoginPageWrapper>
  );
};

export default Login;

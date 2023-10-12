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

const Login = () => {
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <LoginPageWrapper>
      <FormWrapper>
        <Form>
          <Label>
            Email <LabelSpan>*</LabelSpan>
            <Input type="text" placeholder="your@email.com" />
          </Label>
          <Label>
            Password <LabelSpan>*</LabelSpan>
            <Input type="text" placeholder="Password" />
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

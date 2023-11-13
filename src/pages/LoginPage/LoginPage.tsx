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
  QuoteBefore,
} from "./LoginPage.styled";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { StyledPasswordDiv } from "../RegisterPage/RegisterPage.styled";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const dispatch = useAppDispatch();
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      login({
        email,
        password,
      })
    )
      .then((res) => {
        if (
          res.payload.response.status === 400 ||
          res.payload.response.status === 403
        ) {
          toast.error(res.payload.response.data.message);
          throw new Error();
        }
        toast.success("Success!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <LoginPageWrapper>
      <FormWrapper>
        <Form onSubmit={handleLoginSubmit}>
          <Label id="email">
            Email <LabelSpan>*</LabelSpan>
            <Input
              type="email"
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label>
            Password <LabelSpan>*</LabelSpan>
            <StyledPasswordDiv>
              <Input
                type={passwordShow ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setPasswordShow(!passwordShow)}
                style={{
                  position: "absolute",
                  right: "24px",
                  top: "18px",
                  // transform: "translateY(-50%)",
                }}
              >
                {passwordShow ? (
                  <FiEye
                    color="#898f9f"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                ) : (
                  <FiEyeOff
                    color="#898f9f"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                )}
              </span>
            </StyledPasswordDiv>
          </Label>

          <LoginButton type="submit">Login</LoginButton>
          <StyledNavLink to="/signup">Register</StyledNavLink>
        </Form>
      </FormWrapper>
      <QuoteWrapper>
        <TextWrapper>
          <QuoteBefore>“</QuoteBefore>
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

export default LoginPage;

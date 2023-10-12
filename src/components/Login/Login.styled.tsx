import styled from "@emotion/styled";
import bg_image from "../../images/pic.png";
import { NavLink } from "react-router-dom";

export const LoginPageWrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;

export const LoginButton = styled.button`
  margin-top: 32px;
  background-color: #ff6b08;
  font-family: "Montserrat";
  color: #ffffff;
  padding: 20px;
  border: none;

  font-weight: 600;
  font-size: 16px;

  line-height: 19.5px;
`;

export const Form = styled.form`
  gap: 20px;
  width: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const FormWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bg_image});
  background-color: #091e3fcc;
  height: 100%;
  padding: 75px;
  display: flex;

  align-items: center;
`;

export const LoginQuote = styled.h2`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  color: #242a37;

  &::before {
    content: "“";

    font-family: "Abril Fatface";
    font-weight: 400;

    font-size: 69px;

    line-height: 93.08px;

    color: #ff6b08;
  }
`;

export const QuoteAuthor = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24.38px;
  text-align: center;
  color: #898f9f;

  &::before {
    content: "";
    border: 1px solid #242a3780;
  }
`;

export const QuoteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  width: 397px;
`;

export const Label = styled.label`
  font-family: "Montserrat";
  font-weight: 500;

  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;

export const Input = styled.input`
  margin-top: 8px;
  width: 100%;
  padding: 12px;
  background-color: #f5f7fa;
  box-shadow: 0px 1px 2px 0px #1d1d1b26 inset;
  border: none;

  &::placeholder {
    font-family: "Montserrat";
    font-weight: 400;

    font-size: 14px;
    line-height: 17.07px;
    color: #a6abb9;
  }
`;

export const LabelSpan = styled.span`
  color: #f25137;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 13px;
  line-height: 15.85px;
  color: #ff6b08;
  text-align: center;
  text-decoration: underline;
`;

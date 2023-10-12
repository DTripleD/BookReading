import styled from "@emotion/styled";
import bg_image from "../../images/pic.png";
import { NavLink } from "react-router-dom";

export const RegisterPageWrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;

export const RegisterButton = styled.button`
  margin-top: 35px;
  background-color: #ff6b08;
  font-family: "Montserrat";
  color: #ffffff;
  padding: 20px;
  border: none;

  font-weight: 600;
  font-size: 16px;

  line-height: 19.5px;
`;

export const FormWrapper = styled.div`
  display: flex;

  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bg_image});
  background-color: #091e3fcc;

  padding: 75px;
`;

export const Form = styled.form`
  gap: 20px;
  width: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const RegisterTitle = styled.h2`
  margin-bottom: 48px;
  font-family: "Abril Fatface";
  font-weight: 400;
  font-size: 34px;
  line-height: 38px;
  color: #242a37;
`;

export const RegisterPluses = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;

export const ListTitle = styled.p`
  margin-bottom: 14px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 38px;
  color: #242a37;
`;

export const PlusesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const RedirectText = styled.span`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 13px;
  line-height: 15.85px;
  text-align: center;
  color: #898f9f;
`;

export const RegisterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FirstPluses = styled.div`
  margin-bottom: 32px;
`;

export const SecondPluses = styled.div``;

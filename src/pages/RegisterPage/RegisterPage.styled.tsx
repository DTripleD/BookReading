import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import bg_image_s2 from "../../images/background/background_s@2x.jpg";
import bg_image_s1 from "../../images/background/background_s@1x.jpg";
import bg_image_m2 from "../../images/background/background_m@2x.jpg";
import bg_image_m1 from "../../images/background/background_m@1x.jpg";
import bg_image_l2 from "../../images/background/background_l@2x.jpg";
import bg_image_l1 from "../../images/background/background_l@1x.jpg";

export const RegisterPageWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    height: calc(100vh - 60px);
  }
`;

export const RegisterButton = styled.button`
  margin-top: 20px;
  margin-bottom: 16px;
  background-color: #ff6b08;
  color: #ffffff;
  padding: 20px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.5px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 20px;
  }
`;

export const FormWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #091e3fcc;
  max-height: calc(100vh - 60px);

  padding: 32px 20px;

  display: flex;
  justify-content: center;

  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 64px 75px;
  }

  background-image: linear-gradient(
      95deg,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${bg_image_s1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        95deg,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bg_image_s2});
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        95deg,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bg_image_m1});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          95deg,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bg_image_m2});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: linear-gradient(
        95deg,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bg_image_l1});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          95deg,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bg_image_l2});
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  max-width: 400px;

  @media screen and (min-width: 768px) {
    background-color: #ffffff;
    padding: 40px;
    width: 400px;
  }
`;

export const RegisterTitle = styled.h2`
  margin-bottom: 32px;
  font-family: "Abril Fatface";
  font-weight: 400;
  font-size: 34px;
  line-height: 38px;
  color: #242a37;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const RegisterPluses = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;

export const ListTitle = styled.p`
  margin-bottom: 14px;
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

  @media screen and (max-width: 767px) {
    padding: 32px 25px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 64px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 17.07px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    color: #898f9f;
  }

  &#email {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  outline: none;
  margin-top: 8px;
  width: 100%;
  padding: 12px 12px 12px 8px;
  background-color: #f5f7fa;
  box-shadow: 0px 1px 2px 0px #1d1d1b26 inset;
  border: none;

  @media screen and (min-width: 768px) {
    padding: 12px;
  }

  &::placeholder {
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
  font-weight: 500;
  font-size: 13px;
  line-height: 15.85px;
  color: #ff6b08;
  text-align: center;
  text-decoration: underline;
`;

export const RedirectText = styled.span`
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

export const RegisterItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const StyledPasswordDiv = styled.div`
  position: relative;
`;

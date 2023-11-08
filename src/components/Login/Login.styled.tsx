import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import bg_image_s2 from "../../images/background/background_s@2x.jpg";
import bg_image_s1 from "../../images/background/background_s@1x.jpg";
import bg_image_m2 from "../../images/background/background_m@2x.jpg";
import bg_image_m1 from "../../images/background/background_m@1x.jpg";
import bg_image_l2 from "../../images/background/background_l@2x.jpg";
import bg_image_l1 from "../../images/background/background_l@1x.jpg";

export const LoginPageWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    height: calc(100vh - 60px);
  }
`;

export const LoginButton = styled.button`
  margin-top: 20px;
  margin-bottom: 16px;
  background-color: #ff6b08;
  font-family: "Montserrat";
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

export const LoginQuote = styled.h2`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 13px;
  line-height: 15.85px;
  text-align: center;
  color: #242a37;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 20px;
  }
`;

export const QuoteBefore = styled.p`
  font-family: "Abril Fatface";
  font-weight: 400;
  font-size: 59px;
  line-height: 79.59px;
  color: #ff6b08;

  @media screen and (min-width: 768px) {
    font-size: 69px;
    line-height: 93.08px;
  }
`;

export const QuoteAuthor = styled.p`
  font-family: "Montserrat";
  font-weight: 500;

  font-size: 14px;
  line-height: 17.07px;
  text-align: center;
  color: #898f9f;
  max-width: 150px;
  display: flex;
  padding-top: 12px;
  border-top: 1px solid #242a3780;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24.38px;
  }
`;

export const QuoteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-top: 4px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 64px;
  }
`;

export const TextWrapper = styled.div`
  width: 229px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 397px;
  }
`;

export const Label = styled.label`
  font-family: "Montserrat";
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

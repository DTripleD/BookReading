import styled from "@emotion/styled";

export const LineWrapper = styled.div`
  width: 100%;
  max-height: 340px;
  padding: 20px 22px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091e3f40;

  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 24px 48px 50px 48px;
  }

  @media screen and (min-width: 1280px) {
    padding: 26px 77px 51px 40px;
  }
`;

export const LineUpperText = styled.p`
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 500;
  line-height: 14.63px;
  text-transform: uppercase;
`;

export const PagesPerDay = styled.span`
  font-family: "Montserrat";

  font-weight: 600;
  font-size: 12px;
  line-height: 38px;
  background: #242a37;
  background-color: #f5f7fa;
  padding: 5px;
`;

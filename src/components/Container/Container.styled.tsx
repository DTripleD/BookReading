import styled from "@emotion/styled";

export const Main = styled.div`
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Section = styled.section`
  margin: 0 auto;

  min-height: 100vh;
  max-width: 320px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

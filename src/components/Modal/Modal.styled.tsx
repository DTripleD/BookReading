import styled from "@emotion/styled";

export const Wrap = styled.div`
  background: rgba(255, 255, 255, 0.4);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  border: 1px solid;
  position: relative;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  padding: 40px 29px;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  text-align: center;
  color: #242a37;
`;

export const OrangeButton = styled.button`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #ffffff;
  background-color: #ff6b08;
  padding: 11px 45px;
  border: none;
`;

export const WhiteButton = styled.button`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  border: none;
`;

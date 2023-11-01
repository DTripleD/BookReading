import styled from "@emotion/styled";

export const Wrap = styled.div`
  background-color: #2b2b2b1a;
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
  position: relative;
  box-shadow: 10px 10px 20px 0px #091e3f33;
  background-color: #ffffff;

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
  box-shadow: 10px 10px 20px 0px #091e3f33;
  width: 140px;
`;

export const WhiteButton = styled.button`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
  background-color: transparent;
  border: 1px solid #242a37;
  width: 140px;
  padding: 11px 0;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 568px;
  height: 170px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  gap: 12px;
  margin-bottom: 28px;
`;

export const ResumeContent = styled.div`
  position: relative;
  box-shadow: 10px 10px 20px 0px #091e3f33;

  background-color: #ffffff;

  padding: 20px 20px 40px 20px;
`;

export const ResumeTitle = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
`;

export const StarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
`;
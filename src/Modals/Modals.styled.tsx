import styled from "@emotion/styled";

import { Rating } from "@mui/material";

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
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  text-align: center;
  color: #242a37;

  &#navigate {
    margin-bottom: 20px;
  }

  &#end-time {
    margin-top: 14px;
    width: 237px;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    &#navigate {
      margin-bottom: 24px;
    }

    &#end-time {
      margin-bottom: 24px;
      width: 289px;
    }
  }
`;

export const OrangeButton = styled.button`
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
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
  background-color: transparent;
  border: 1px solid #242a37;
  width: 140px;
  padding: 11px 0;
`;

export const OrangeResumeButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #ffffff;
  background-color: #ff6b08;
  padding: 11px 0px;
  border: none;
  box-shadow: 10px 10px 20px 0px #091e3f33;
  width: 98px;

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;

export const WhiteResumeButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
  background-color: transparent;
  border: 1px solid #242a37;

  padding: 11px 0;

  width: 98px;

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 240px;
  height: 170px;

  @media screen and (min-width: 768px) {
    width: 568px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
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

  @media screen and (max-width: 767px) {
    max-width: 280px;
  }
`;

export const ResumeTitle = styled.p`
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
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const StyledRating = styled(Rating)`
  color: #ff6b08;
  font-size: 19.5px;
`;

export const IfNavigateContent = styled.div`
  position: relative;
  box-shadow: 10px 10px 20px 0px #091e3f33;
  background-color: #ffffff;
  padding: 48px 32px;
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 394px;
    padding: 48px 22px;
  }
`;

export const OrangeButtonNavigate = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #ffffff;
  background-color: #ff6b08;
  padding: 11px 0;
  border: none;
  box-shadow: 10px 10px 20px 0px #091e3f33;
  width: 98px;

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;

export const WhiteButtonNavigate = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
  background-color: transparent;
  border: 1px solid #242a37;
  width: 98px;
  padding: 11px 0;

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;

export const ButtonsWrapperNavigate = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const EndTimeContent = styled.div`
  position: relative;
  box-shadow: 10px 10px 20px 0px #091e3f33;
  background-color: #ffffff;

  padding: 44px 22px;

  max-width: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 40px 29px 48px 29px;

    max-width: 394px;
  }
`;

export const EndTimeButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const EndTimeOrangeButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #ffffff;
  background-color: #ff6b08;
  padding: 11px 0;
  border: none;
  box-shadow: 10px 10px 20px 0px #091e3f33;
  width: 152px;
`;

export const EndTimeWhiteButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
  background-color: transparent;
  border: 1px solid #242a37;
  width: 152px;
  padding: 11px 0;
`;

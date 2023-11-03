import styled from "@emotion/styled";
import { Rating } from "@mui/material";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";

  font-weight: 500;

  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;

  &#title {
    width: 100%;

    @media screen and (min-width: 1280px) {
      width: 346px;
    }
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  &#author {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 336px;
    }

    @media screen and (min-width: 1280px) {
      width: 250px;
    }
  }
  &#date {
    @media screen and (min-width: 768px) {
      width: 152px;
    }

    @media screen and (min-width: 1280px) {
      width: 134px;
    }
  }
  &#pages {
    @media screen and (min-width: 768px) {
      width: 152px;
    }

    @media screen and (min-width: 1280px) {
      width: 134px;
    }
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #a6abb9;
  padding: 12px;
  margin-top: 8px;
  outline: none;

  &#title {
    width: 346px;

    /* @media screen and (min-width: 768px) {
      max-width: none;
      width: 768px;
      padding: 14px 32px 13px 32px;
    }

    @media screen and (min-width: 1280px) {
      width: 1280px;
      padding: 11px 16px;
    } */
  }

  &:focus {
    background-color: #ffffff;
    box-shadow: 0px 1px 2px 0px #1d1d1b26 inset;
    /* border: none; */
    border-color: #1d1d1b26;
  }
`;

export const Form = styled.form`
  margin-bottom: 40px;
  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: flex-end;
  }
`;

export const FormButton = styled.button`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #000000;
  border: 1px solid #242a37;
  background-color: transparent;
  padding: 12px 75px;
  height: 42px;
  width: 171px;
`;

export const Title = styled.h3`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 19px;
  line-height: 23.16px;
  color: #242a37;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const ListTitle = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;

  @media screen and (min-width: 768px) {
    &#title-title {
      margin-right: 299px;
    }
    &#author-title {
      margin-right: 164px;
    }
    &#year-title {
      margin-right: 32px;
    }

    &#title-title-rating {
      margin-right: 147px;
    }
    &#author-title-rating {
      margin-right: 79px;
    }
    &#year-title-rating {
      margin-right: 28px;
    }
    &#pages-title-rating {
      margin-right: 27px;
    }
  }

  @media screen and (min-width: 1280px) {
    &#title-title {
      margin-right: 571px;
    }
    &#author-title {
      margin-right: 339px;
    }
    &#year-title {
      margin-right: 72px;
    }

    &#title-title-rating {
      margin-right: 292px;
    }
    &#author-title-rating {
      margin-right: 218px;
    }
    &#year-title-rating {
      margin-right: 65px;
    }
    &#pages-title-rating {
      margin-right: 102px;
    }
  }
`;

export const ListText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;

  color: #242a37;

  font-size: 12px;
  line-height: 14.63px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 17.07px;

    &#title-list {
    }
    &#author-list {
      width: 109px;
      margin-right: 96px;
    }
    &#year-list {
      width: 32px;
      margin-right: 62px;
    }
    &#pages-list {
    }

    &#title-resume {
      width: 124px;
    }

    &#author-resume {
      overflow: hidden;
      width: 88px;
      margin-right: 28px;
    }

    &#year-resume {
      min-width: 36px;
      margin-right: 52px;
    }
    &#pages-resume {
      width: 23px;
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    &#title-list {
    }
    &#author-list {
      width: 221px;
      margin-right: 160px;
    }
    &#year-list {
      min-width: 36px;
      margin-right: 102px;
    }
    &#pages-list {
    }

    &#title-resume {
      /* width: 157px; */
    }

    &#author-resume {
      overflow: hidden;
      width: 88px;
      margin-right: 178px;
    }

    &#year-resume {
      width: 36px;
      margin-right: 81px;
    }
    &#pages-resume {
      width: 23px;
      margin-right: 110px;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;

  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091e3f1a;
  padding: 22px 20px;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  &#resume {
    @media screen and (min-width: 768px) {
      padding: 11px 20px;
    }
    @media screen and (min-width: 1280px) {
      padding: 11px 80px 11px 20px;
    }
  }
`;

export const ListTitleWrapper = styled.div`
  display: flex;

  margin-bottom: 8px;
`;

export const BooksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 767px) {
    gap: 8px;
  }
`;

export const FormWrapper = styled.div`
  display: grid;

  column-gap: 32px;

  row-gap: 24px;

  @media screen and (max-width: 1279px) {
    width: 100%;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 16px;
    margin-right: 48px;
  }

  /* display: flex;
  gap: 12px;
  margin-right: 48px; */
`;

export const TrainingBtn = styled.button`
  color: #ffffff;
  font-family: "Montserrat";
  font-weight: 600;

  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  line-height: 19.5px;
  background-color: #ff6b08;
  width: 200px;
  border: none;
  padding: 10px 0;
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const ResumeButton = styled.button`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  box-shadow: 0px 2px 4px 0px #00000040;
  background-color: #6d7a8d;
  color: #ffffff;
  border: none;
  padding: 11px 34px 12px 34px;
  margin-left: auto;

  @media screen and (max-width: 767px) {
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    padding: 11px 11px 12px 10px;
  }

  @media screen and (min-width: 1280px) {
    padding: 12px 36px;
  }
`;

export const PlusButton = styled.button`
  bottom: 12px;
  position: fixed;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background-color: #ff6b08;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 18px;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    min-width: 268px;
    margin-right: 80px;

    &#title-wrapper-resume {
      min-width: 164px;
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    min-width: 509px;
    margin-right: 111px;

    &#title-wrapper-resume {
      min-width: 197px;
      margin-right: 144px;
    }
  }
`;

export const StyledRating = styled(Rating)`
  color: #ff6b08;
  font-size: 19.5px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 20.2px;
  }

  &.Mui-disabled {
    opacity: 1;
  }

  & .MuiRating-icon {
    color: inherit;
  }
`;

export const MobileDescr = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  line-height: 14.63px;
`;

export const MobileDescrWrapper = styled.div`
  gap: 14px;
  display: flex;
  flex-direction: column;
  margin-right: 35px;
`;

export const DescrWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    margin-top: 27px;

    &#rating {
      margin-bottom: 20px;
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 14px;
  }
`;

export const MarginBottomWrapper = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

import styled from "@emotion/styled";

export const ListHeaderWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 12px 0;
  /* border-bottom: 1px solid #e0e5eb; */
  border-top: 1px solid #e0e5eb;

  @media screen and (min-width: 1280px) {
    margin-top: 44px;
  }
`;

export const ListHeaderText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;

  &#table-title {
    @media screen and (min-width: 768px) {
      margin-right: 217px;
      width: 69px;
    }
    @media screen and (min-width: 1280px) {
      margin-right: 300px;
      width: 92px;
    }
  }
  &#table-author {
    @media screen and (min-width: 768px) {
      margin-right: 162px;
      width: 50px;
    }
    @media screen and (min-width: 1280px) {
      margin-right: 180px;
      width: 50px;
    }
  }
  &#table-year {
    @media screen and (min-width: 768px) {
      margin-right: 61px;
      width: 31px;
    }
    @media screen and (min-width: 1280px) {
      margin-right: 131px;
      width: 31px;
    }
  }

  &#table-title-wc {
    /* margin-right: 65px;
    width: 325px; */

    @media screen and (min-width: 768px) {
      margin-right: 217px;
      width: 69px;
    }
    @media screen and (min-width: 1280px) {
      margin-right: 65px;
      width: 325px;
    }
  }
  &#table-author-wc {
    /* width: 115px;
    margin-right: 111px; */
    @media screen and (min-width: 768px) {
      margin-right: 162px;
      width: 50px;
    }
    @media screen and (min-width: 1280px) {
      width: 115px;
      margin-right: 111px;
    }
  }
  &#table-year-wc {
    /* width: 36px;
    margin-right: 87px; */
    @media screen and (min-width: 768px) {
      margin-right: 61px;
      width: 31px;
    }
    @media screen and (min-width: 1280px) {
      width: 36px;
      margin-right: 87px;
    }
  }

  &#table-pages-wc {
    /* width: 47px;
    margin-right: 92px; */
  }
`;

export const SelectedBooksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;

  overflow-x: hidden;
  padding: 20px 0;
  border-top: 1px solid #e0e5eb;
  border-bottom: 1px solid #e0e5eb;
  margin-bottom: 32px;

  @media screen and (min-width: 767px) {
    max-height: 171px;
  }

  @media screen and (min-width: 1280px) {
    max-height: 186px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const ListItem = styled.li`
  display: flex;

  /* @media screen and (max-width: 767px) {
    flex-direction: column;
  } */

  &:not(:last-child) {
  }
  @media screen and (max-width: 1279px) {
    &:not(:last-child) {
      padding-bottom: 20px;
      border-bottom: 1px solid #e0e5eb;
    }
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      padding-bottom: 16px;
    }
  }

  & #table-title-element {
    @media screen and (min-width: 768px) {
      width: 225px;
      margin-right: 54px;
    }

    @media screen and (min-width: 1280px) {
      width: 327px;
      margin-right: 65px;
    }
  }
  & #table-author-element {
    @media screen and (min-width: 768px) {
      width: 115px;
      margin-right: 91px;
    }

    @media screen and (min-width: 1280px) {
      width: 115px;
      margin-right: 111px;
    }
  }
  & #table-year-element {
    @media screen and (min-width: 768px) {
      width: 32px;
      margin-right: 85px;
    }

    @media screen and (min-width: 1280px) {
      width: 36px;
      margin-right: 153px;
    }
  }
  & #table-total-element {
  }

  /*  */

  & #table-title-element-wc {
    /* margin-right: 66px;
    width: 325px; */

    @media screen and (min-width: 768px) {
      margin-right: 65px;
      width: 220px;
    }
    @media screen and (min-width: 1280px) {
      margin-right: 65px;
      width: 325px;
    }
  }
  & #table-author-element-wc {
    /* width: 115px;
    margin-right: 111px; */

    @media screen and (min-width: 768px) {
      margin-right: 91px;
      width: 115px;
    }
    @media screen and (min-width: 1280px) {
      width: 115px;
      margin-right: 111px;
    }
  }
  & #table-year-element-wc {
    /* width: 36px;
    margin-right: 87px; */
    @media screen and (min-width: 768px) {
      margin-right: 87px;
      width: 28px;
    }
    @media screen and (min-width: 1280px) {
      width: 36px;
      margin-right: 87px;
    }
  }

  & #table-pages-element-wc {
    width: 47px;
    margin-right: 92px;
  }
  /* justify-content: space-between; */
`;

export const SelectedBookTitle = styled.p`
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 500;
  line-height: 14.63px;
  text-align: left;
  color: #242a37;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 17.07px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  margin-left: auto;

  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 19px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }

  @media screen and (min-width: 1280px) {
    gap: 23px;
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const BookContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const PreWrapper = styled.div`
  width: 46px;
  margin-right: 35px;
  display: flex;
  gap: 14px;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    margin-left: 34px;
    margin-top: 12px;
  }
`;

export const InfoTitle = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  line-height: 14.63px;
  color: #898f9f;
`;

export const PostWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 14px;
  }
`;

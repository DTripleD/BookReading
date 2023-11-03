import styled from "@emotion/styled";

export const ListHeaderWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  padding: 12px 0;
  border-bottom: 1px solid #e0e5eb;
  border-top: 1px solid #e0e5eb;
`;

export const ListHeaderText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;

  &#table-title {
    margin-right: 65px;
    width: 318px;
  }
  &#table-author {
    width: 126px;
    margin-right: 100px;
  }
  &#table-year {
    width: 36px;
    margin-right: 153px;
  }

  &#table-pages {
    width: 47px;
    margin-right: 92px;
  }

  &#table-title-wc {
    margin-right: 65px;
    width: 325px;
  }
  &#table-author-wc {
    width: 115px;
    margin-right: 111px;
  }
  &#table-year-wc {
    width: 36px;
    margin-right: 87px;
  }

  &#table-pages-wc {
    width: 47px;
    margin-right: 92px;
  }
`;

export const SelectedBooksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-height: 171px;
  overflow-x: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #e0e5eb;
  height: 171px;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  display: flex;

  & #table-title-element-wc {
    margin-right: 65px;
    width: 325px;
  }
  & #table-author-element-wc {
    width: 115px;
    margin-right: 111px;
  }
  & #table-year-element-wc {
    width: 36px;
    margin-right: 87px;
  }

  & #table-pages-element-wc {
    width: 47px;
    margin-right: 92px;
  }
  /* justify-content: space-between; */
`;

export const SelectedBookTitle = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;

  &#table-title-element {
    width: 289px;
    margin-right: 65px;
  }
  &#table-author-element {
    width: 126px;
    margin-right: 100px;
  }
  &#table-year-element {
    width: 36px;
    margin-right: 153px;
  }
  &#table-total-element {
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: 32px;
  background-color: transparent;
  border: none;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 14px;
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

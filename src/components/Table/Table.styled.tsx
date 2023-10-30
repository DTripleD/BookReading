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

  &#title {
    margin-right: 65px;
    width: 318px;
  }
  &#author {
    width: 126px;
    margin-right: 100px;
  }
  &#year {
    width: 36px;
    margin-right: 153px;
  }

  &#pages {
    width: 47px;
    margin-right: 92px;
  }
`;

export const SelectedBooksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-height: 151px;
  overflow-x: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #e0e5eb;
  height: 171px;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  display: flex;
  /* justify-content: space-between; */
`;

export const SelectedBookTitle = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;

  &#title {
    width: 289px;
    margin-right: 65px;
  }
  &#author {
    width: 126px;
    margin-right: 100px;
  }
  &#year {
    width: 36px;
    margin-right: 153px;
  }
  &#total {
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

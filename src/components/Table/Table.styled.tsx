import styled from "@emotion/styled";

export const ListHeaderWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
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
`;

export const SelectedBooksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 151px;
  overflow-x: hidden;
  margin: 20px 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const SelectedBookTitle = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
`;

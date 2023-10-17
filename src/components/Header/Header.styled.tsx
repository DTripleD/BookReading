import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  /* padding: 16px; */
  border-bottom: 1px solid #091e3f1a;
`;

export const Logo = styled.h2`
  font-family: "Abril Fatface";

  font-weight: 400;
  font-size: 20px;

  line-height: 26.98px;
`;

export const UserName = styled.p`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
`;

export const UserLogo = styled.h2`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
`;

export const UserLogoWrapper = styled.div`
  width: 33px;
  height: 33px;
  background-color: #f5f7fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutBtn = styled.button`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 14px;
  line-height: 38px;

  color: #242a37;
  text-decoration: underline;
  background-color: transparent;
  border: none;

  &::before {
    content: "";
    border: 1px solid #e0e5eb;
    margin-right: 14px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 320px;
  padding: 16 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
    padding: 16 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1248px;
    padding: 16px;
  }
`;

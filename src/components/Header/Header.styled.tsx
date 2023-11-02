import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  /* padding: 16px; */
  border-bottom: 1px solid #091e3f1a;
  height: 60px;
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
  line-height: 17.07px;

  color: #242a37;
  text-decoration: underline;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    &::before {
      content: "";
      border: 1px solid #e0e5eb;
      margin-right: 14px;
      @media screen and (min-width: 768px) {
        margin-right: 8px;
      }
      @media screen and (min-width: 1280px) {
        margin-right: 14px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    line-height: 38px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    margin-right: 14px;
    &::before {
      content: "";
      border: 1px solid #e0e5eb;
      margin-right: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    gap: 12px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px 13px 22px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
    padding: 14px 32px 13px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 11px 16px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background-color: #f5f7fa;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 2px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-right: 6px;
  }
`;

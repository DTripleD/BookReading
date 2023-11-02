import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useAppDispatch } from "../../redux/store";
import {
  HeaderWrapper,
  Logo,
  UserLogo,
  UserLogoWrapper,
  UserName,
  LogoutBtn,
  NavWrapper,
  UserInfoWrapper,
  HeaderContainer,
  StyledNavLink,
  LinksWrapper,
} from "./Header.styled";
import { useSelector } from "react-redux";
import icons from "../../images/icons.svg";
import MediaQuery from "react-responsive";

const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useAppDispatch();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>BR</Logo>
        {user.name && user.email && user.id && (
          <>
            <MediaQuery minWidth={768}>
              <UserInfoWrapper>
                <UserLogoWrapper>
                  <UserLogo>{user.name && user.name[0]}</UserLogo>
                </UserLogoWrapper>
                <UserName>{user.name}</UserName>
              </UserInfoWrapper>
            </MediaQuery>

            <NavWrapper>
              <LinksWrapper>
                <StyledNavLink to="/progress">
                  <svg width="22" height="17">
                    <use href={icons + "#icon-book"}></use>
                  </svg>
                </StyledNavLink>
                <StyledNavLink to="/main">
                  <svg width="22" height="17">
                    <use href={icons + "#icon_home"}></use>
                  </svg>
                </StyledNavLink>
              </LinksWrapper>
              <MediaQuery maxWidth={767}>
                <UserInfoWrapper>
                  <UserLogoWrapper>
                    <UserLogo>{user.name && user.name[0]}</UserLogo>
                  </UserLogoWrapper>
                </UserInfoWrapper>
              </MediaQuery>
              <LogoutBtn onClick={() => dispatch(logOut())}>Logout</LogoutBtn>
            </NavWrapper>
          </>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

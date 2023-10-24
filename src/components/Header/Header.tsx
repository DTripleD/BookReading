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
} from "./Header.styled";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import icons from "../../images/icons.svg"

const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useAppDispatch();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>BR</Logo>
        {user.name && user.email && user.id && (
          <>
            <UserInfoWrapper>
              <UserLogoWrapper>
                <UserLogo>{user.name && user.name[0]}</UserLogo>
              </UserLogoWrapper>
              <UserName>{user.name}</UserName>
            </UserInfoWrapper>

            <NavWrapper>
              <NavLink to="/progress">
                <svg width="22" height="17">
                  <use href={icons + "#icon-book"}></use>
                </svg>
              </NavLink>

              <NavLink to="/main">
                <svg width="22" height="17">
                  <use href={icons + "#icon_home"}></use>
                </svg>
              </NavLink>
              <LogoutBtn onClick={() => dispatch(logOut())}>Logout</LogoutBtn>
            </NavWrapper>
          </>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

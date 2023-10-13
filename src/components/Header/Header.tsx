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
} from "./Header.styled";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  return (
    <HeaderWrapper>
      <Logo>BR</Logo>
      {user && (
        <>
          <UserInfoWrapper>
            <UserLogoWrapper>
              <UserLogo>{user.name[0]}</UserLogo>
            </UserLogoWrapper>
            <UserName>{user.name}</UserName>
          </UserInfoWrapper>

          <NavWrapper>
            <NavLink to="/progress">Book</NavLink>
            <NavLink to="/main">House</NavLink>
            <LogoutBtn onClick={() => dispatch(logOut())}>Logout</LogoutBtn>
          </NavWrapper>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;

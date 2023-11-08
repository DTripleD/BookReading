import { useAppDispatch } from "../../redux/store";
import { useState } from "react";
import {
  Form,
  FormWrapper,
  Input,
  Label,
  LabelSpan,
  ListTitle,
  PlusesWrapper,
  RegisterButton,
  RegisterPageWrapper,
  RegisterPluses,
  RegisterTitle,
  StyledNavLink,
  RedirectText,
  RegisterList,
  FirstPluses,
  SecondPluses,
  RegisterItem,
  StyledPasswordDiv,
} from "./Register.styled";
import { register } from "../../redux/auth/operations";
import icons from "../../images/icons.svg";
import toast from "react-hot-toast";
import { FiEyeOff, FiEye } from "react-icons/fi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const dispatch = useAppDispatch();

  const handleRegisterSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confPassword) {
      toast.error("Password wrong");
      return;
    }

    dispatch(
      register({
        name,
        email,
        password,
      })
    )
      .then((res) => {
        if (
          res.payload.response.status === 400 ||
          res.payload.response.status === 403 ||
          res.payload.response.status === 409
        ) {
          toast.error(res.payload.response.data.message);
          throw new Error();
        }
        toast.success("Success!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <RegisterPageWrapper>
      <FormWrapper>
        <Form>
          <Label id="email">
            Name <LabelSpan>*</LabelSpan>
            <Input
              type="text"
              placeholder="..."
              onChange={(e) => setName(e.target.value)}
            />
          </Label>
          <Label id="email">
            Email <LabelSpan>*</LabelSpan>
            <Input
              type="text"
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label id="email">
            Password <LabelSpan>*</LabelSpan>
            <Input
              type={passwordShow ? "text" : "password"}
              placeholder="..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <Label>
            Confirm password <LabelSpan>*</LabelSpan>
            <StyledPasswordDiv>
              <Input
                type={passwordShow ? "text" : "password"}
                placeholder="..."
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <span
                onClick={(event) => {
                  event.preventDefault();
                  setPasswordShow(!passwordShow);
                }}
                style={{
                  position: "absolute",
                  right: "24px",
                  top: "18px",
                  // transform: "translateY(-50%)",
                }}
              >
                {passwordShow ? (
                  <FiEye
                    color="#898f9f;"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                ) : (
                  <FiEyeOff
                    color="#898f9f;"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                )}
              </span>
            </StyledPasswordDiv>
          </Label>

          <RegisterButton type="submit" onClick={handleRegisterSubmit}>
            Register
          </RegisterButton>
          <RedirectText>
            Already have an account?
            <StyledNavLink to="/">Log in</StyledNavLink>
          </RedirectText>
        </Form>
      </FormWrapper>
      <PlusesWrapper>
        <RegisterTitle>Books Reading</RegisterTitle>
        <div>
          <FirstPluses>
            <ListTitle>Will help you to</ListTitle>
            <RegisterList>
              <RegisterItem>
                <svg width="4" height="8">
                  <use href={icons + "#icon-arrow"}></use>
                </svg>
                <RegisterPluses>
                  Create your goal faster and proceed to read
                </RegisterPluses>
              </RegisterItem>
              <RegisterItem>
                <svg width="4" height="8">
                  <use href={icons + "#icon-arrow"}></use>
                </svg>
                <RegisterPluses>
                  Divide process proportionally for each day
                </RegisterPluses>
              </RegisterItem>
              <RegisterItem>
                <svg width="4" height="8">
                  <use href={icons + "#icon-arrow"}></use>
                </svg>
                <RegisterPluses>Track your success</RegisterPluses>
              </RegisterItem>
            </RegisterList>
          </FirstPluses>

          <SecondPluses>
            <ListTitle>You may also</ListTitle>
            <RegisterList>
              <RegisterItem>
                <svg width="4" height="8">
                  <use href={icons + "#icon-arrow"}></use>
                </svg>
                <RegisterPluses>
                  Pose your own independent point of view
                </RegisterPluses>
              </RegisterItem>
              <RegisterItem>
                <svg width="4" height="8">
                  <use href={icons + "#icon-arrow"}></use>
                </svg>
                <RegisterPluses>
                  Improve your professional skills according to new knowledge
                </RegisterPluses>
              </RegisterItem>
              <RegisterItem>
                <svg width="4" height="8">
                  <use href={icons + "#icon-arrow"}></use>
                </svg>
                <RegisterPluses>
                  Become an interesting interlocutor
                </RegisterPluses>
              </RegisterItem>
            </RegisterList>
          </SecondPluses>
        </div>
      </PlusesWrapper>
    </RegisterPageWrapper>
  );
};

export default Register;

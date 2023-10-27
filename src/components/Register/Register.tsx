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
} from "./Register.styled";
import { register } from "../../redux/auth/operations";
import icons from "../../images/icons.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleRegisterSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confPassword) {
      alert("Password wrong");
      return;
    }

    dispatch(
      register({
        name,
        email,
        password,
      })
    ).then(() => console.log("succes"));
    // .catch(() => Notify.failure("Error! Try to enter another email"));
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
              type="text"
              placeholder="..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <Label>
            Confirm password <LabelSpan>*</LabelSpan>
            <Input
              type="text"
              placeholder="..."
              onChange={(e) => setConfPassword(e.target.value)}
            />
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

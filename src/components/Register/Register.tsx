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
} from "./Register.styled";
import { register } from "../../redux/auth/operations";

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
          <Label>
            Name <LabelSpan>*</LabelSpan>
            <Input
              type="text"
              placeholder="..."
              onChange={(e) => setName(e.target.value)}
            />
          </Label>
          <Label>
            Email <LabelSpan>*</LabelSpan>
            <Input
              type="text"
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label>
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
            Already have an account?{" "}
            <StyledNavLink to="/signin">Log in</StyledNavLink>
          </RedirectText>
        </Form>
      </FormWrapper>
      <PlusesWrapper>
        <RegisterTitle>Books Reading</RegisterTitle>
        <div>
          <FirstPluses>
            <ListTitle>Will help you to</ListTitle>
            <RegisterList>
              <li>
                <RegisterPluses>
                  Create your goal faster and proceed to read
                </RegisterPluses>
              </li>
              <li>
                <RegisterPluses>
                  Divide process proportionally for each day
                </RegisterPluses>
              </li>
              <li>
                <RegisterPluses>Track your success</RegisterPluses>
              </li>
            </RegisterList>
          </FirstPluses>

          <SecondPluses>
            <ListTitle>You may also</ListTitle>
            <RegisterList>
              <li>
                <RegisterPluses>
                  Pose your own independent point of view
                </RegisterPluses>
              </li>
              <li>
                <RegisterPluses>
                  Improve your professional skills according to new knowledge
                </RegisterPluses>
              </li>
              <li>
                <RegisterPluses>
                  Become an interesting interlocutor
                </RegisterPluses>
              </li>
            </RegisterList>
          </SecondPluses>
        </div>
      </PlusesWrapper>
    </RegisterPageWrapper>
  );
};

export default Register;

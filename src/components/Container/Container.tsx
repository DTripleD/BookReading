import { Main, Section } from "./Container.styled";

type Props = {
  children: React.ReactElement;
};

const MainContainer = ({ children }: Props) => {
  return (
    <Section>
      <Main>{children}</Main>
    </Section>
  );
};

export default MainContainer;

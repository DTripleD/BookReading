import {
  Form,
  Input,
  Instruction,
  Label,
  StepsDo,
  StepsNum,
  StepsResult,
} from "./Main.styled.tsx";

const Main = () => {
  return (
    <>
      <Form>
        <Label>
          Book title
          <Input type="text" placeholder="..." />
        </Label>
        <Label>
          Author
          <Input type="text" placeholder="..." />
        </Label>
        <Label>
          Publication date
          <Input type="text" placeholder="..." />
        </Label>
        <Label>
          Amount of pages
          <Input type="text" placeholder="..." />
        </Label>
        <button type="submit">Add</button>
      </Form>

      <Instruction>
        <StepsNum>Step 1.</StepsNum>
        <StepsDo>Create your own library</StepsDo>
        <StepsResult>Add there books which you are going to read.</StepsResult>
        <StepsNum>Step 2.</StepsNum>
        <StepsDo>Create your first training</StepsDo>
        <StepsResult>Set a goal, choose period, start training.</StepsResult>
      </Instruction>
    </>
  );
};

export default Main;

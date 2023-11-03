import {
  InstructionWrapper,
  NumWrapper,
  StepWrapper,
  StepsDo,
  StepsNum,
  StepsResult,
} from "./Instruction.styled";
import icons from "../../images/icons.svg";

const Instruction = () => {
  return (
    <InstructionWrapper>
      <div>
        <StepsNum>Step 1.</StepsNum>
        <NumWrapper>
          <svg width="22" height="17">
            <use href={icons + "#icon-book"}></use>
          </svg>
          <StepsDo>Create your own library</StepsDo>
        </NumWrapper>
        <StepWrapper>
          <svg width="10" height="12">
            <use href={icons + "#icon-line"}></use>
          </svg>
          <StepsResult>
            Add there books which you are going to read.
          </StepsResult>
        </StepWrapper>
      </div>
      <div>
        <StepsNum>Step 2.</StepsNum>
        <NumWrapper>
          <svg width="15" height="17">
            <use href={icons + "#icon-flag"}></use>
          </svg>
          <StepsDo>Create your first training</StepsDo>
        </NumWrapper>

        <StepWrapper>
          <svg width="10" height="12">
            <use href={icons + "#icon-line"}></use>
          </svg>
          <StepsResult>Set a goal, choose period, start training.</StepsResult>
        </StepWrapper>
      </div>
    </InstructionWrapper>
  );
};

export default Instruction;

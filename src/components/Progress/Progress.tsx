import {
  BoxName,
  CountNumber,
  CountWrapper,
  Title,
  TitleWrapper,
} from "./Progress.styled";

const Progress = () => {
  return (
    <>
      <div>
        <TitleWrapper>
          <Title>My training</Title>
        </TitleWrapper>
        <input type="date" placeholder="start" />
        <input type="date" />
        <select
          name=""
          id=""
          placeholder="Choose books from the library "
        ></select>
        <button>Add</button>
      </div>
      <div>
        <TitleWrapper>
          <Title>My goals</Title>
        </TitleWrapper>
        <div>
          <div>
            <CountWrapper>
              <CountNumber>0</CountNumber>
            </CountWrapper>
            <BoxName>Amount of books</BoxName>
          </div>
          <div>
            <CountWrapper>
              <CountNumber>0</CountNumber>
            </CountWrapper>

            <BoxName>Amount of days</BoxName>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;

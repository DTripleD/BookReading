import { Watch } from "react-loader-spinner";

const Loading = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#ff6b08"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
};

export default Loading;

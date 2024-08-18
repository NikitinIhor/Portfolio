import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <RotatingLines
      visible={true}
      height="150"
      width="150"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

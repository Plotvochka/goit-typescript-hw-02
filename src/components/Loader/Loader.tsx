import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  const wrapperStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={wrapperStyle}
        wrapperClass=""
      />
    </div>
  );
}

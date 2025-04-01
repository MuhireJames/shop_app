import PuffLoader from "react-spinners/PuffLoader";

function Spinner({ loading }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
        height: "100%",
      }}
    >
      <PuffLoader color="#1a6fdf" size={250} loading={loading} />
    </div>
  );
}

export default Spinner;

import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <>
      <h1
        style={{
          marginTop: "200px",
          textAlign: "center",
          color: "#d32100",
          fontSize: "100px",
        }}
      >
        Oops!
      </h1>
      <h4 style={{ textAlign: "center" }}>404 - PAGE NOT FOUND</h4>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        The page you are looking for might have been removed <br /> had its name
        changed or is temoporarily unavailable. <br />
      </p>
      <div style={{ textAlign: "center" }}>
        <Link
          style={{
            color: "#f3f3f3",
            backgroundColor: "#1333fe",
            padding: "10px 20px",
            borderRadius: "20px",
            textDecoration: "none",
          }}
          to="/"
        >
          GO TO HOMEPAGE
        </Link>
      </div>
    </>
  );
};

export default Unauthorized;

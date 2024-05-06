import MyCreditRechargeButton from "../components/MyCreditButton";

const HomePage = () => {
  const buttonStyle = {
    marginLeft: "30px",
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <br />
      <br />
      <div style={buttonStyle}>
        <MyCreditRechargeButton />
      </div>
      <br />
      <br />
    </div>
  );
};

export default HomePage;

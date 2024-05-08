import MyCreditRechargeButton from "../components/MyCreditRechargeButton";

function HomePage() {
  const handleButtonClick = () => {
    console.log("충전하기 버튼이 클릭되었습니다.");
    // 여기에 버튼을 클릭했을 때 할 작업을 추가하세요.
  };
  return (
    <div style={{ backgroundColor: "black" }}>
      <h1>Welcome to HomePage</h1>
      <div style={{ marginLeft: "100px" }}>
        <MyCreditRechargeButton onClick={handleButtonClick} />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default HomePage;

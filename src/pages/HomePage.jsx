import MyCreditRechargeButton from "../components/MyCreditRechargeButton";
import { Button } from "@mantine/core";
import useCredits from '../api/credits/useCredits';

function HomePage() {
  const [, chargeCredits, , resetLocalStorage] = useCredits(); 
  
  const handleResetLocalStorage = () => {
    resetLocalStorage(); 
  };

  const handleAddCredits = () => {
    chargeCredits(26000);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <h1>Welcome to HomePage</h1>
      <div style={{ marginLeft: "100px" }}>
        <MyCreditRechargeButton />
      </div>
      <br />
      <br />
      <Button onClick={handleResetLocalStorage}>로컬스토리지 초기화</Button>
      <br />
      <br />
      <Button onClick={handleAddCredits}>26000 크레딧 추가</Button>
      <br />
    </div>
  );
}

export default HomePage;

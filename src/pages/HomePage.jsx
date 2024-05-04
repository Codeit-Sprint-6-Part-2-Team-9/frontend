import Buttons from "../components/Button";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Buttons type="add" icon="plus">
        추가하기
      </Buttons>
      <br />
      <Buttons type="vote" icon="chart">
        투표
      </Buttons>
      <br />
      <Buttons type="recharge" icon="credit">
        충전하기
      </Buttons>
      <br />
      <Buttons type="landing">지금 시작하기</Buttons>
      <br />
    </div>
  );
};

export default HomePage;

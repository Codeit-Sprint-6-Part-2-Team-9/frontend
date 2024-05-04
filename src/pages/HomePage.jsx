import Buttons from "../components/Button";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Buttons type="add" icon="plus" color="red">
        추가하기
      </Buttons>
      <br />
      <Buttons type="vote" icon="chart" color="red">
        차트 투표하기
      </Buttons>
      <br />
      <Buttons type="recharge" icon="credit" color="red">
        충전하기
      </Buttons>
      <br />
      <Buttons type="landing" color="red">
        지금 시작하기
      </Buttons>
      <br />
    </div>
  );
};

export default HomePage;

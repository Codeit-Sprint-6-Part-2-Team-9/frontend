import Buttons from "../components/Button";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Buttons icon="chart" size="vote" color="red">
        투표하기
      </Buttons>
      <br />
      <Buttons size="landing" color="red">
        지금 시작하기
      </Buttons>
      <br />
      <Buttons icon="credit" size="recharge" color="red">
        충전하기
      </Buttons>
      <br />
      <Buttons icon="plus" size="add" color="red">
        추가하기
      </Buttons>
      <br />
    </div>
  );
};

export default HomePage;

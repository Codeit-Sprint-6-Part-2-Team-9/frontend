import Buttons from "../components/Button";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Buttons icon="graph" size="vote" color="red">
        차트 투표하기
      </Buttons>
    </div>
  );
};

export default HomePage;

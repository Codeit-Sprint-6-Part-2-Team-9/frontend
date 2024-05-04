import Buttons from "../components/Button";
import Typography from "../components/Typography";

const HomePage = () => {
  const buttonStyle = {
    marginLeft: "30px",
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <h1>HomePage</h1>
      <div style={buttonStyle}>
        <Buttons type="landing">
          <Typography type="bold14lh26">지금 시작하기</Typography>
        </Buttons>
      </div>
      <br />
      <div style={buttonStyle}>
        <Buttons type="donate">
          <Typography type="bold13lh26ls2">후원하기</Typography>
        </Buttons>
      </div>
      <br />
      <div style={buttonStyle}>
        <Buttons type="vote" icon="chart">
          <Typography type="bold13lh26ls2">차트 투표하기</Typography>
        </Buttons>
      </div>
      <br />
      <div style={buttonStyle}>
        <Buttons type="more">
          <Typography type="bold14lh26">더 보기</Typography>
        </Buttons>
      </div>
      <br />
      {/* 충전하기 자간 2% 미적용 */}
      <div style={buttonStyle}>
        <Buttons type="recharge" icon="credit">
          <Typography type="bold14lh26">충전하기</Typography>
        </Buttons>
      </div>
      <br />
      {/* 후원하기 자간 2% 미적용 */}
      <div style={buttonStyle}>
        <Buttons type="modalDonate">
          <Typography type="bold14lh26">후원하기</Typography>
        </Buttons>
      </div>
      <br />
      <div style={buttonStyle}>
        <Buttons type="modalVote">
          <Typography type="bold14lh26">투표하기</Typography>
        </Buttons>
      </div>
      <br />
      <div style={buttonStyle}>
        <Buttons type="confirm">
          <Typography type="bold14lh26">확인</Typography>
        </Buttons>
      </div>
      <br />
      <div style={buttonStyle}>
        <Buttons type="add" icon="plus">
          <Typography type="bold16lh26">추가하기</Typography>
        </Buttons>
      </div>
      <br />
      <br />
    </div>
  );
};

export default HomePage;

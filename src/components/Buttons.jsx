import { Group, Button } from "@mantine/core";
import ChartIcon from "../assets/chart.svg";
import CreditIcon from "../assets/credit.svg";
import PlusIcon from "../assets/plus.svg";
import classes from "./Buttons.module.css";

const Buttons = (props) => {
  const { type, icon, children, ...buttonProps } = props;

  const icons = {
    chart: <img className={classes.chartGap} src={ChartIcon} alt="Chart" />,
    credit: <img className={classes.creditGap} src={CreditIcon} alt="Credit" />,
    plus: <img className={classes.plusGap} src={PlusIcon} alt="Plus" />,
  };

  const selectedIcon = icons[icon] || null;

  const BUTTONS = {
    landing: (
      <div className={classes.landingButtonWrap}>
        <Button {...buttonProps} className={`${classes[type]} ${classes.red}`}>
          {children}
        </Button>
      </div>
    ),
    donate: (
      <div className={classes.donateButtonWrap}>
        <Button {...buttonProps} className={`${classes[type]} ${classes.red}`}>
          {children}
        </Button>
      </div>
    ),
    vote: (
      <Group>
        <div className={classes.voteButtonWrap}>
          <Button
            {...buttonProps}
            className={`${classes[type]} ${classes.red}`}
            leftSection={selectedIcon}
          >
            {children}
          </Button>
        </div>
      </Group>
    ),
    more: (
      <div className={classes.moreButtonWrap}>
        <Button
          {...buttonProps}
          className={`${classes[type]} ${classes.black}`}
        >
          {children}
        </Button>
      </div>
    ),
    recharge: (
      <Group>
        <div className={classes.rechargeButtonWrap}>
          <Button
            {...buttonProps}
            className={`${classes[type]} ${classes.red}`}
            leftSection={selectedIcon}
          >
            {children}
          </Button>
        </div>
      </Group>
    ),
    modalDonate: (
      <div className={classes.modalDonateButtonWrap}>
        <Button {...buttonProps} className={`${classes[type]} ${classes.grey}`}>
          {children}
        </Button>
      </div>
    ),
    modalVote: (
      <div className={classes.modalVoteButtonWrap}>
        <Button {...buttonProps} className={`${classes[type]} ${classes.red}`}>
          {children}
        </Button>
      </div>
    ),
    confirm: (
      <div className={classes.confirmButtonWrap}>
        <Button {...buttonProps} className={`${classes[type]} ${classes.red}`}>
          {children}
        </Button>
      </div>
    ),
    add: (
      <Group>
        <div className={classes.addButtonWrap}>
          <Button
            {...buttonProps}
            className={`${classes[type]} ${classes.red}`}
            leftSection={selectedIcon}
          >
            {children}
          </Button>
        </div>
      </Group>
    ),
  };

  return BUTTONS[type];
};

export default Buttons;

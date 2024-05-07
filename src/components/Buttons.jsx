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
      <Button {...buttonProps} className={`${classes[type]} ${classes.red}`}>
        {children}
      </Button>
      // </>
    ),
    donate: (
      <Button {...buttonProps} className={`${classes[type]} ${classes.red}`}>
        {children}
      </Button>
    ),
    vote: (
      <Group>
        <Button
          {...buttonProps}
          className={`${classes[type]} ${classes.red}`}
          leftSection={selectedIcon}
        >
          {children}
        </Button>
      </Group>
    ),
    more: (
      <Button {...buttonProps} className={`${classes[type]} ${classes.black}`}>
        {children}
      </Button>
    ),
    recharge: (
      <Group>
        <Button
          {...buttonProps}
          className={`${classes[type]} ${classes.red}`}
          leftSection={selectedIcon}
        >
          {children}
        </Button>
      </Group>
    ),
    modalDonate: (
      <Button {...buttonProps} className={`${classes[type]} ${classes.grey}`}>
        {children}
      </Button>
    ),
    modalVote: (
      <Button {...buttonProps} className={`${classes[type]} ${classes.red}`}>
        {children}
      </Button>
    ),
    confirm: (
      <Button {...buttonProps} className={`${classes[type]} ${classes.red}`}>
        {children}
      </Button>
    ),
    add: (
      <Group>
        <Button
          {...buttonProps}
          className={`${classes[type]} ${classes.red}`}
          leftSection={selectedIcon}
        >
          {children}
        </Button>
      </Group>
    ),
  };

  return BUTTONS[type];
};

export default Buttons;

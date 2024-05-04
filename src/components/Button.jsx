import { Group, Button } from "@mantine/core";
import ChartIcon from "../assets/chartIcon.png";
import CreditIcon from "../assets/creditIcon.png";
import PlusIcon from "../assets/plusIcon.png";
import classes from "../components/Buttons.module.css";

export default function Test(props) {
  const { type, icon, color, children } = props;

  const icons = {
    chart: <img src={ChartIcon} alt="Chart" />,
    plus: <img src={PlusIcon} alt="Plus" />,
    credit: <img src={CreditIcon} alt="Credit" />,
  };

  const selectedIcon = icons[icon] || null;

  const BUTTONS = {
    landing: (
      <Button className={`${classes[type]} ${classes[color]}`} size="lg">
        {children}
      </Button>
    ),
    donate: (
      <Button className={`${classes[type]} ${classes[color]}`} size="lg">
        {children}
      </Button>
    ),
    vote: (
      <Group>
        <Button
          className={`${classes.Buttons} ${classes[type]} ${classes[color]}`}
          leftSection={selectedIcon}
        >
          {children}
        </Button>
      </Group>
    ),
    more: (
      <Button className={`${classes[type]} ${classes[color]}`} size="lg">
        {children}
      </Button>
    ),
    recharge: (
      <Group>
        <Button
          className={`${classes.Buttons} ${classes[type]} ${classes[color]}`}
          leftSection={selectedIcon}
        >
          {children}
        </Button>
      </Group>
    ),
    modaldonate: (
      <Button className={`${classes[type]} ${classes[color]}`} size="lg">
        {children}
      </Button>
    ),
    modalvote: (
      <Button className={`${classes[type]} ${classes[color]}`} size="lg">
        {children}
      </Button>
    ),
    donation: (
      <Button className={`${classes[type]} ${classes[color]}`} size="lg">
        {children}
      </Button>
    ),
    add: (
      <Group>
        <Button
          className={`${classes.Buttons} ${classes[type]} ${classes[color]}`}
          leftSection={selectedIcon}
        >
          {children}
        </Button>
      </Group>
    ),
  };

  return BUTTONS[type];
}

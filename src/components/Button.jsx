import { Group, Button } from "@mantine/core";
import ChartIcon from "../assets/chartIcon.png";
import CreditIcon from "../assets/creditIcon.png";
import PlusIcon from "../assets/plusIcon.png";
import classes from "../components/Buttons.module.css";

function Buttons({ icon, size, color, children }) {
  const icons = {
    chart: <img src={ChartIcon} alt="Chart" />,
    plus: <img src={PlusIcon} alt="Plus" />,
    credit: <img src={CreditIcon} alt="Credit" />,
  };

  const selectedIcon = icons[icon] || null;

  return (
    <Group>
      <Button
        className={`${classes.Buttons} ${classes[size]} ${classes[color]}`}
        leftSection={selectedIcon}
      >
        {children}
      </Button>
    </Group>
  );
}

export default Buttons;

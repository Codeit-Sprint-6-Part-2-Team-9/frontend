import { Group, Button } from "@mantine/core";
import { IconGraph, IconPlus, IconDiamonds } from "@tabler/icons-react";
import styles from "../components/Buttons.module.css";

function Buttons({ icon, size, color, children }) {
  let selectedIcon;

  switch (icon) {
    case "graph":
      selectedIcon = <IconGraph size={24} />;
      break;
    case "plus":
      selectedIcon = <IconPlus size={24} />;
      break;
    case "diamonds":
      selectedIcon = <IconDiamonds size={13} />;
      break;
    default:
      selectedIcon = null;
  }

  return (
    <Group>
      <Button
        className={`${styles.Buttons} ${styles[size]} ${styles[color]}`}
        leftSection={selectedIcon}
      >
        {children}
      </Button>
    </Group>
  );
}

export default Buttons;

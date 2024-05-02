import { Group, Button } from "@mantine/core";
import { IconGraph, IconPlus, IconDiamonds } from "@tabler/icons-react";
import styles from "../components/Buttons.module.css";

function Buttons({ icon, size, color, children }) {
  let selectedIcon;

  const iconMap = {
    graph: IconGraph,
    plus: IconPlus,
    diamonds: IconDiamonds,
  };

  const SelectedIcon = iconMap[icon] || null;

  return (
    <Group>
      <Button
        className={`${styles.voteButton} ${styles[size]} ${styles[color]}`}
        leftSection={SelectedIcon && <SelectedIcon size={13} />}
      >
        {children}
      </Button>
    </Group>
  );
}

export default Buttons;

import { Group, Button } from "@mantine/core";
import ChartIcon from "../assets/Chart.svg";

function VoteButton() {
  return (
    <Group justify="center">
      <Button leftSection={<ChartIcon size={14} />} variant="default">
        Gallery
      </Button>
    </Group>
  );
}

export default VoteButton;

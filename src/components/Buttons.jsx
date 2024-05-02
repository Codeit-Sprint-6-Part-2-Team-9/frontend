import { Button } from "@mantine/core";
import styles from "./Buttons.module.css";

function Buttons({ size, color, children }) {
  const sizeClass = size ? styles[size] : "add";
  const colorClass = color ? styles[color] : "red";

  return <Button className={`${sizeClass} ${colorClass}`}>{children}</Button>;
}

export default Buttons;

import classes from "./App.module.css";
import { Title, Text, MantineProvider } from "@mantine/core";

function App() {
  return (
    <div>
      <MantineProvider>
        <Title className={classes.title}>
          <Text className={classes.text}>Welecome to mantine</Text>
        </Title>
      </MantineProvider>
    </div>
  );
}

export default App;

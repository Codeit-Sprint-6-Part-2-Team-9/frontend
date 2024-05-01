import { Title, Text } from '@mantine/core';

import classes from './App.module.css';

function App() {
  return (
    <div>
      <Title className={classes.title}>
        <Text className={classes.text}>Welecome to Mantine</Text>
      </Title>
    </div>
  );
}

export default App;

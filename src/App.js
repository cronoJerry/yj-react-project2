import { Text, Button } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Text fontWeight={600} color={'red.500'}>
        hello
      </Text>
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="teal" variant="outline">
        Button
      </Button>
    </>
  );
}

export default App;

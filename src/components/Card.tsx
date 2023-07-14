import { 
  Center,
  ChakraProvider,
  Input,
  Text,
  Grid,
  Button,
  Flex
} from '@chakra-ui/react';
import { login } from '../services/login';

const Card = () => {
    return ( 
      <ChakraProvider>
      <Flex minHeight='100vh' alignItems='center' justifyContent='center' backgroundColor='#370617' padding='25px'>
        <Grid gap={5} autoFlow="row dense" backgroundColor='#FFFFFF' w='30vw' borderRadius='25px' py='30px' px='50px' >
          <Center>
            <Text fontSize='5xl'>Login</Text>
          </Center>
            <Input placeholder="email" size='lg' />
            <Input placeholder="password" size='lg' />
          <Center>
            <Button onClick={login} colorScheme='red' size='md' width='100%'>
              Button
            </Button>
          </Center>
        </Grid>
      </Flex>
    </ChakraProvider>
     );
}
 
export default Card;
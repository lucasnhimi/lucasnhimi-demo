import { Box, Button, Flex, Text } from '@chakra-ui/react';

import useAuth from './../hooks/useAuth';

export default function Home() {
  const { signin, user } = useAuth();

  return (
    <Box bg="gray.100" p={4} h="100%">
      <Flex as="main" direction="column" maxW="700px" margin="0 auto">
        <main>          
          <Button variant="outline" colorScheme="blue"  onClick={() => signin()}>Entrar com github</Button>        
        </main>    
      </Flex>
    </Box>
  )
}

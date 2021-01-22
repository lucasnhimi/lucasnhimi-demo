import { Box, Button, Text } from '@chakra-ui/react';
import useAuth from './../hooks/useAuth';

function Dashboard(props) {
  const {user} = useAuth();
  console.log(user)

  return (
    <Box>
      <Box mb={2}>
        <Text as="span" fontWeight="bold" display="inline">user: {user?.displayName}</Text>
      </Box>
      <Button variant="outline" colorScheme="blue"  onClick={() => signin()}>Sair</Button>        
    </Box>
  ); 
}

export default Dashboard;
import { Box, Button, Text } from '@chakra-ui/react';
import useAuth from '@/hooks/useAuth';

function Dashboard() {
  const {user, signout} = useAuth();
  return (
    <Box>
      <Box mb={2}>
        <Text as="span" fontWeight="bold" display="inline">user: {user?.name}</Text>
      </Box>
      <Button variant="outline" colorScheme="blue"  onClick={() => signout()}>Sair</Button>        
    </Box>
  ); 
}



export default Dashboard;
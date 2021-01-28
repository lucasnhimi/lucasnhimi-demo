import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  const bgContent = useColorModeValue('#F4F6F8', '#1A202C');

  return (
    <Box minH="100vh" bgColor={bgContent}>
      <Topbar />
      <Flex direction="column" pt={62}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;

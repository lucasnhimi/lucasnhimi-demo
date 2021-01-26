import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Link, Avatar, Icon, useColorMode, useColorModeValue } from '@chakra-ui/react';

import useAuth from '@/hooks/useAuth';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { user } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue("#FFFFFF", "#1A202C")
  const color = useColorModeValue("#1A202C", "#EDEEEE")


  return (
    <Box minH="100vh">
      <Flex
        mb={[8, 16]}
        w="full"  
        position="fixed"
        zIndex={99999}            
        bgColor={bg}
        color={color}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1200px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"     
             
        >
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link>
                <Icon name="save" size="24px" mr={8} />
              </Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link mr={4}>Home</Link>
            </NextLink>
            <NextLink href="/series" passHref>
              <Link>Séries</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? "Escuro" : "Claro"}
            </Button>  
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="66px auto" direction="column" py={4}>
        {children}        
      </Flex>
      <Footer />
    </Box>
  );
};

export default Layout;

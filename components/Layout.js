import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Flex,
  Link,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('#FFFFFF', '#1A202C');
  const color = useColorModeValue('#1A202C', '#EDEEEE');
  const borderColor = useColorModeValue('#DDD', '#27272A');
  const bgContent = useColorModeValue('#F4F6F8', '#1A202C');

  return (
    <Box minH="100vh" bgColor={bgContent}>
      <Flex
        mb={[8, 16]}
        w="full"
        position="fixed"
        zIndex={99999}
        bgColor={bg}
        color={color}
        borderBottom={`1px solid ${borderColor}`}
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
            <NextLink href="/#series" passHref>
              <Link>Séries</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {colorMode === 'light' ? (
              <MoonIcon w={6} h={6} onClick={toggleColorMode} />
            ) : (
              <SunIcon w={6} h={6} onClick={toggleColorMode} />
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" pt={62}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;

import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Topbar from './Topbar';

const Layout = ({ title, path, description, children }) => {
  const bgContent = useColorModeValue('#F4F6F8', '#1A202C');
  const url = `https://lucasnhimi.io${path}`;

  return (
    <Box minH="100vh" bgColor={bgContent}>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <Topbar />
      <Flex direction="column" pt={62}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;

import {
  useColorModeValue,
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

const SerieViewHeader = ({ serie }) => {
  const bg = useColorModeValue('#FFFFFF', '#1A202C');

  return (
    <Box bgColor={bg}>
      <Flex justifyContent="center" alignItems="center" py={8}>
        <Flex px={[4, 8]} w="full" maxW="1200px" direction="column">
          <Heading as="h3" size="lg">
            {serie.name}
          </Heading>
          <Text fontSize="sm" my={2}>
            {`ultima atualização ${serie.updatedAt}`}
          </Text>
          <Box>
            <Button variant="outline">Começar agora</Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SerieViewHeader;

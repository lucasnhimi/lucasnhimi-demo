import {
  Heading,
  Button,
  Flex,
  Text,
  Box,
  Code,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import Layout from '@/components/Layout';
import SerieCard from '@/components/SerieCard';
import { getAllSeries } from '@/lib/dato-cms';

const Cover = () => {
  const bg = useColorModeValue('#FFFFFF', '#1A202C');

  return (
    <Box bgColor={bg}>
      <Flex justifyContent="center" alignItems="center" py={20}>
        <Flex
          px={12}
          py={20}
          w="full"
          maxW="1200px"
          direction="column"
          alignItems="center"
        >
          <Box mb={4}>
            <Code p={2}>alert(Bem-vindo Dev!)</Code>
          </Box>
          <Heading
            as="h1"
            size="4xl"
            mb={4}
            fontWeight="xBold"
            textAlign="center"
          >
            Aprenda programação
            <Box>direto ao ponto </Box>
            <Box bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
              100% free.
            </Box>
          </Heading>
          <Text fontSize="xl" textAlign="center">
            <Box>Mantenha seus conhecimentos atualizados com</Box>
            <Box>
              as mais novas tecnologias que estão disponíveis no mercado!
            </Box>
          </Text>
          <Flex justifyContent="center">
            <Button
              as="a"
              mt={10}
              colorScheme="purple"
              variant="solid"
              size="lg"
              href="#teste"
            >
              Bora começar!
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const Series = ({ series }) => (
  <Flex id="teste" justify="center">
    <Flex w="full" maxW="1200px" px={8} mt={10} direction="column">
      <Heading mb={4}>Séries</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {series.map((serie) => (
          <SerieCard serie={serie} key={serie.id} />
        ))}
      </SimpleGrid>
    </Flex>
  </Flex>
);

function Home({ series }) {
  return (
    <Layout>
      <Cover />
      <Series series={series} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const series = await getAllSeries();

  return {
    props: {
      series,
    },
    revalidate: 120,
  };
};

export default Home;

import {
  Heading,
  Button,
  Flex,
  Text,
  Box,
  Code,
  SimpleGrid,
  useColorModeValue,
  Stack,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react';
import Layout from '@/components/Layout';
import SerieCard from '@/components/SerieCard';
import { getAllSeries } from '@/lib/dato-cms';

const technologies = [
  { logo: '/logos/react2.svg', name: 'React.js' },
  { logo: '/logos/node.svg', name: 'Node.js' },
  { logo: '/logos/graphql.svg', name: 'Graphql' },
  { logo: '/logos/javascript.svg', name: 'JavaScript' },
  { logo: '/logos/typescript.svg', name: 'TypeScript' },
  { logo: '/logos/nextjs-3.svg', name: 'Next.js' },
  // { logo: '/logos/aws.svg', name: 'AWS' },
  // { logo: '/logos/mongodb.svg', name: 'MongoDB' },
  // { logo: '/logos/dotnet.svg', name: '.NET Core' },
  // { logo: '/logos/git.svg', name: 'Git' },
  // { logo: '/logos/github.svg', name: 'Github' },
];

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
          // alignItems="center"
        >
          <Heading
            as="h1"
            size="4xl"
            mb={4}
            fontWeight="xBold"
            // textAlign="center"
          >
            Aprenda programação
            <Box>direto ao ponto </Box>
            <Box bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
              100% free.
            </Box>
          </Heading>
          <Text fontSize="xl">
            <Box>
              Mantenha seus conhecimentos atualizados com as mais novas{' '}
            </Box>
            <Box>tecnologias que estão disponíveis no mercado!</Box>
          </Text>
          <Box>
            <Button
              as="a"
              my={10}
              colorScheme="purple"
              variant="solid"
              size="lg"
              href="#series"
            >
              Bora começar!
            </Button>
          </Box>
          <Box>
            <Wrap>
              {technologies.map((tech) => (
                <WrapItem>
                  <Center
                    w="120px"
                    h="120px"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    flexDirection="column"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      style={{ width: '40px', height: '40px' }}
                    />
                    <Text
                      fontSize="sm"
                      textAlign="center"
                      fontWeight="bold"
                      mt={2}
                    >
                      {tech.name}
                    </Text>
                  </Center>
                </WrapItem>
              ))}
            </Wrap>
            {/* <Stack direction={['column', 'row']}>
              {technologies.map((tech) => (
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={4}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  w="120px"
                  minW="120px"
                />
              ))}
            </Stack> */}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

const Series = ({ series }) => (
  <Flex id="series" justify="center">
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
      <Box pb={10}>
        <Cover />
        <Series series={series} />
      </Box>
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

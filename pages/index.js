import { Heading, Button, Flex, Text, Box, Badge, Image, Code, SimpleGrid } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import SerieCard from '@/components/SerieCard';
import useAuth from '@/hooks/useAuth';
import { getAllSeries } from '@/lib/dato-cms';

function Home({ series }) {
  console.log(series)
  const { signin, user } = useAuth();  

  return (
    <Layout>      
      <Flex justifyContent="center" alignItems="center" py={20} >  
        <Flex px={12} pb={20} w="full" maxW="1200px" direction="column" alignItems="center">
          <Box mb={4}>
            <Code p={2} children="alert('Bem-vindo Dev!')" />
          </Box>
          <Heading as="h1" size="4xl" mb={4} fontWeight="xBold" textAlign="center">
            Aprenda programação direto
            <Box>
              ao ponto{' '}
            <Box display="inline" bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text">
              100% free.
            </Box>
            </Box>            
          </Heading>
          <Text fontSize="xl">
            Vamos juntos aprender as mais novas tecnologias que estão disponíveis no mercado!
          </Text>
          <Flex justifyContent="center">
            <Button as="a" mt={10} colorScheme="purple" variant="solid" size="lg" href="#teste" onClick={() => signin()}>Bora começar!</Button>               
          </Flex>
        </Flex>                
      </Flex>    
      <Flex id="teste" justify="center">
        <Flex w="full" maxW="1200px" px={8} mt={20} direction="column">
          <Heading mb={4}>
            Séries
          </Heading>
          <SimpleGrid columns={[1, null, 3]} spacing="40px">
            {
              series.map(serie => (
                <SerieCard serie={serie} key={serie.id} />
              ))
            }
          </SimpleGrid>
          
        </Flex>
      </Flex>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const series = await getAllSeries();
  
  return {
    props: {
      series,
    },
    revalidate: 120
  };
};

export default Home;


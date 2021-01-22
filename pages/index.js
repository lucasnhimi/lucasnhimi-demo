import { Heading, Button, Flex, Text, Box, Badge, Image, Code, SimpleGrid } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import Layout from '@/components/Layout';
import useAuth from '@/hooks/useAuth';

export default function Home() {
  const { signin, user } = useAuth();  
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Layout>      
      <Flex justifyContent="center">
        
      </Flex>
      <Flex justifyContent="center" alignItems="center" py={20} >  
        <Flex px={12} pb={20} w="full" maxW="1200px" direction="column" alignItems="center">
          <Box mb={4}>
            <Code p={2} children="user === 'dev' ? goToLearning() : goToLearning()" />
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
            <Button as="a" mt={10} colorScheme="purple" variant="solid" size="lg" href="#teste">Bora começar!</Button>               
          </Flex>
        </Flex>                
      </Flex>    
      <Flex id="teste" justify="center">
        <Flex w="full" maxW="1200px" px={8} mt={20} direction="column">
          <Heading mb={4}>
            Projetos
          </Heading>
          <SimpleGrid columns={[1, null, 3]} spacing="40px">

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {property.title}
              </Box>

              <Box>
                {property.formattedPrice}
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < property.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {property.title}
              </Box>

              <Box>
                {property.formattedPrice}
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < property.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {property.title}
              </Box>

              <Box>
                {property.formattedPrice}
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < property.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {property.title}
              </Box>

              <Box>
                {property.formattedPrice}
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < property.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </Box>
          </Box>
          </SimpleGrid>
          
        </Flex>
      </Flex>
    </Layout>
  )
}

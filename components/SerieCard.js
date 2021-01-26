import { Box, Badge, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function SerieCard({ serie }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={serie.thumbUrl.url} alt={serie.name} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Novo
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {serie.seasons.length} temporadas
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {serie.name}
        </Box>

        <Box>{serie.description}</Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < 3 ? 'teal.500' : 'gray.300'} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            34 reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SerieCard;

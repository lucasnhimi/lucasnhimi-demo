import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
  Flex,
  List,
  ListItem,
  Heading,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

function SerieView({ serie }) {
  const [currentEpisode, setCurrentEpisode] = useState();
  const { query } = useRouter();
  const borderColor = useColorModeValue('#DDD', '#27272A');
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    let episode = {};
    if (query.episode && query.season) {
      const season = serie.seasons.find((s) => s.slug === query.season);
      if (season) {
        episode = season.episodes.find((ep) => ep.slug === query.episode);
      }
    } else {
      episode = serie.seasons[0].episodes[0];
    }

    if (episode) setCurrentEpisode(episode);
  }, [query]);

  return (
    <Flex overflow="hidden" flex="1 1 auto" h="100%">
      {isLargerThan992 && (
        <Box minW={380} w={380} flexShrink={0} minH="calc(100vh - 66px)">
          <Box
            position="relative"
            borderRight={`1px solid ${borderColor}`}
            minW="100%"
            minH="calc(100vh - 66px)"
          >
            <Box px={3} py={2}>
              <Heading as="h4" size="md">
                {serie.name}
              </Heading>
            </Box>
            <Divider />
            <Box>
              <Accordion defaultIndex={[0]} allowMultiple>
                {serie.seasons.map((season) => (
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {season.name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <List>
                        {season.episodes.map((episode) => (
                          <ListItem>
                            <Box my={4}>
                              <Box
                                mb="1"
                                fontWeight="semibold"
                                as="h5"
                                lineHeight="tight"
                                isTruncated
                              >
                                {episode.name}
                              </Box>
                              <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                              >
                                {episode.videoTime} &bull; episódio{' '}
                                {episode.order}
                              </Box>
                            </Box>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          </Box>
        </Box>
      )}

      <Flex flexGrow={1} direction="column" h="100%" overflowY="auto">
        <Flex
          overflow="hidden"
          w="100%"
          bgColor="#000"
          minHeight="60vh"
          justifyContent="center"
        >
          {currentEpisode && (
            <iframe
              allow="autoplay; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              src={currentEpisode.videoUrl}
              title={currentEpisode.name}
              width="100%"
              height="100%"
              style={{
                maxWidth: 1200,
                minHeight: '60vh',
                height: '100%',
                width: '100%',
              }}
            />
          )}
        </Flex>
        <Box p={3}>
          <Heading mt={3} mb={2}>
            {currentEpisode?.name}
          </Heading>
          <Divider />
          <Box pt={4}>{currentEpisode?.description}</Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SerieView;

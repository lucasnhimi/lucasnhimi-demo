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
  Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

const NavBar = ({ serie, currentEpisode, onSaveHistory, allHistory = [] }) => {
  const borderColor = useColorModeValue('#DDD', '#27272A');
  const { user } = useAuth();

  const handleSaveHistory = (e, season, episode) => {
    e.preventDefault();

    const history = {
      userName: user.name,
      userId: user.uid,
      episodeId: episode.id,
      episodeName: episode.name,
      serieId: serie.id,
      serieName: serie.name,
      seasonId: season.id,
      seasonName: season.name,
      createdAt: new Date(),
    };

    onSaveHistory(history);
  };

  const isFinished = (episodeId) =>
    allHistory.find((f) => f.episodeId === episodeId);

  return (
    <Box
      overflowY="auto"
      borderRight={`1px solid ${borderColor}`}
      minW={['100%', '380px']}
      w={['100%', '380px']}
      maxH={['380px', 'calc(100vh - 66px)']}
      h={['100%', 'calc(100vh - 66px)']}
    >
      <Box>
        <Box px={3} py={2}>
          <Link href={`/serie/${serie.slug}`}>
            <Heading as="h4" size="md" cursor="pointer">
              {serie.name}
            </Heading>
          </Link>
        </Box>
        <Divider />
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
                      <Link
                        href={`/player/${serie?.slug}/${season?.slug}/${episode?.slug}`}
                      >
                        <Flex alignItems="flex-start">
                          <Box my={4} mr={2} cursor="pointer">
                            {isFinished(episode.id) ? (
                              <Icon as={FaRegCheckCircle} h={4} w={4} />
                            ) : (
                              <Icon
                                as={FaRegCircle}
                                h={4}
                                w={4}
                                onClick={(e) =>
                                  handleSaveHistory(e, season, episode)
                                }
                              />
                            )}
                          </Box>
                          <Box my={4} cursor="pointer">
                            <Box
                              mb="1"
                              fontWeight={
                                episode?.slug === currentEpisode?.slug
                                  ? 'xBold'
                                  : 'normal'
                              }
                              as="h5"
                              lineHeight="tight"
                              isTruncated
                            >
                              {episode.name}
                            </Box>
                            <Box
                              color="gray.500"
                              fontWeight={
                                episode?.slug === currentEpisode?.slug
                                  ? 'xBold'
                                  : 'normal'
                              }
                              letterSpacing="wide"
                              fontSize="xs"
                              textTransform="uppercase"
                              ml="2"
                            >
                              {episode.videoTime} &bull; ep {episode.order}
                            </Box>
                          </Box>
                        </Flex>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

const Video = ({ currentEpisode }) => (
  <Flex flexGrow={1} direction="column" overflowY="auto">
    <Flex
      // overflow="hidden"
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
);

function Player({ serie, seasonSlug, episodeSlug, onSaveHistory, allHistory }) {
  const [currentEpisode, setCurrentEpisode] = useState();

  useEffect(() => {
    let episode = {};

    if (seasonSlug && episodeSlug) {
      const season = serie.seasons.find((s) => s.slug === seasonSlug);
      if (season) {
        episode = season.episodes.find((ep) => ep.slug === episodeSlug);
      }
    } else {
      // eslint-disable-next-line prefer-destructuring
      episode = serie.seasons[0].episodes[0];
    }

    if (episode) setCurrentEpisode(episode);
  }, [serie, seasonSlug, episodeSlug]);

  return (
    <Flex overflow="hidden" h="100%" direction={['column', 'row']}>
      <NavBar
        serie={serie}
        currentEpisode={currentEpisode}
        onSaveHistory={onSaveHistory}
        allHistory={allHistory}
      />
      <Video currentEpisode={currentEpisode} />
    </Flex>
  );
}

export default Player;

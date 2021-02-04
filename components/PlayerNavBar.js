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
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';
import useAuth from '@/hooks/useAuth';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

const PlayerNavBar = ({
  serie,
  currentEpisode,
  onSaveHistory,
  allHistory = [],
}) => {
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
      <PerfectScrollbar options={{ suppressScrollX: true }}>
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
                  {season.episodes.map((episode, index) => (
                    <ListItem>
                      <Link
                        href={`/player/${serie?.slug}/${season?.slug}/${episode?.slug}`}
                      >
                        <Flex alignItems="flex-start" my={2}>
                          <Box mr={2} cursor="pointer">
                            {isFinished(episode.id) ? (
                              <Icon
                                as={FaRegCheckCircle}
                                h={4}
                                w={4}
                                color="green.500"
                              />
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
                          <Box cursor="pointer" minH={50}>
                            <Heading
                              as="h5"
                              size="sm"
                              cursor="pointer"
                              fontWeight={
                                episode?.slug === currentEpisode?.slug
                                  ? 'xBold'
                                  : 'normal'
                              }
                            >
                              {episode.name}
                            </Heading>

                            <Text
                              color="gray.500"
                              fontWeight={
                                episode?.slug === currentEpisode?.slug
                                  ? 'xBold'
                                  : 'normal'
                              }
                              letterSpacing="wide"
                              fontSize="xs"
                              textTransform="uppercase"
                            >
                              {episode.videoTime} &bull; ep {index + 1}
                            </Text>
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
      </PerfectScrollbar>
    </Box>
  );
};

export default PlayerNavBar;

import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import PlayerVideo from './PlayerVideo';
import PlayerNavBar from './PlayerNavBar';

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
      <PlayerNavBar
        serie={serie}
        currentEpisode={currentEpisode}
        onSaveHistory={onSaveHistory}
        allHistory={allHistory}
      />
      <PlayerVideo currentEpisode={currentEpisode} />
    </Flex>
  );
}

export default Player;

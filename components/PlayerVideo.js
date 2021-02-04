import { Box, Divider, Flex, Heading } from '@chakra-ui/react';

const PlayerVideo = ({ currentEpisode }) => (
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
      <Flex
        alignItems="center"
        justifyContent="space-between"
        direction={['column', 'row']}
      >
        <Heading as="h3" size="lg" my={2}>
          {currentEpisode?.name}
        </Heading>
      </Flex>
      <Divider />
      <Box pt={4}>{currentEpisode?.description}</Box>
    </Box>
  </Flex>
);

export default PlayerVideo;

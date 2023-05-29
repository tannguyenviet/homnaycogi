import { Box, Flex } from '@chakra-ui/react';

import ListCard from './components/ListCard';

const Dashboard = () => {
  return (
    <Flex>
      <Box w="364px" p="4" bg="red.400">
        <ListCard />
      </Box>
      <Box flex="1" p="4" bg="green.400">
        Box 2
      </Box>
    </Flex>
  );
};

export default Dashboard;

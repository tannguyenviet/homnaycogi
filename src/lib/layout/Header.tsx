import {
  Box,
  Flex,
  Button,
  Container,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  InputGroup,
  InputRightElement,
  Input,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

import DropDownIcon from '../icons/DropDownIcon';
import SearchIcon from '../icons/SearchIcon';

interface Place {
  key: string;
  label: string;
}
interface Distance {
  key: string;
  label: string;
}

const distances: Distance[] = [
  { key: '1', label: '1km' },
  { key: '2', label: '2km' },
  { key: '5', label: '5km' },
  { key: '10', label: '10km' },
];

const places: Place[] = [
  {
    key: 'DN',
    label: 'Đà Nẵng',
  },
  {
    key: 'QN',
    label: 'Quảng Nam',
  },
  {
    key: 'QNG',
    label: 'Quảng Ngãi',
  },
  {
    key: 'HA',
    label: 'Hội An',
  },
];

const Header = () => {
  const [place, setPlace] = useState<Place>(places[1]);
  const [distance, setDistance] = useState<Distance>(distances[1]);

  return (
    <Box>
      <Container
        display="flex"
        align-item="center"
        justifyContent="space-between"
        maxW={{ pc: '1024px', mobile: '896px' }}
        mt={1}
      >
        <Image
          src="/quote.png"
          width={200}
          height={500}
          alt="Picture of the author"
        />
        <Box>
          <Button>Sign up</Button>
          <Button>Login up</Button>
        </Box>
      </Container>
      <Divider borderColor="#979797" />
      <Container
        justifyContent="space-between"
        maxW={{ pc: '1024px', mobile: '896px' }}
      >
        <Flex justifyContent="space-between" mt={1} mb={2}>
          <Flex>
            <Menu>
              <MenuButton as={Button} rightIcon={<DropDownIcon />}>
                {distance.label}
              </MenuButton>
              <MenuList>
                {distances.map((item) => (
                  <MenuItem onClick={() => setDistance(item)} key={item.key}>
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<DropDownIcon />}>
                {place.label}
              </MenuButton>
              <MenuList>
                {places.map((item) => (
                  <MenuItem onClick={() => setPlace(item)} key={item.key}>
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
          <InputGroup maxW="250px">
            <Input placeholder="Địa điểm gần đây" />
            <InputRightElement>
              <SearchIcon />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Container>

      <div />
    </Box>
    // <Flex as="header" width="full" align="center">
    //   <Box marginLeft="auto">
    //     <ThemeToggle />
    //     <Input/>
    //   </Box>
    // </Flex>
  );
};

export default Header;

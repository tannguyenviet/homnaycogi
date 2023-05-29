import {
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

import LocationIcon from '~/lib/icons/LocationIcon';
import StarIcon from '~/lib/icons/StarIcon';

const ListCard = () => (
  <Flex gap={3} direction="column">
    <Card p={3}>
      <CardBody p={0}>
        <Stack divider={<StackDivider />} spacing="4">
          <Flex gap={4}>
            <Image
              src="/monan.jpg"
              width={64}
              height={71}
              alt="Picture of the author"
            />
            <Flex direction="column" justifyContent="space-between">
              <Flex direction="column">
                <Heading size="sm" textTransform="uppercase">
                  Tiết Canh Vịt
                </Heading>
                <Stack align="center" direction="row" spacing={2}>
                  <LocationIcon />
                  <Text display="inline" color="text.200">
                    381 Trần Hưng Đạo
                  </Text>
                </Stack>
              </Flex>
              <Stack color="text.200" direction="row" spacing={4}>
                <Stack direction="row" spacing={2}>
                  <StarIcon />
                  <Text size="sm">4.0</Text>
                </Stack>
                <Text size="sm">3.3km</Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
    <Card p={3}>
      <CardBody p={0}>
        <Stack divider={<StackDivider />} spacing="4">
          <Flex gap={4}>
            <Image
              src="/monan.jpg"
              width={64}
              height={71}
              alt="Picture of the author"
            />
            <Flex direction="column" justifyContent="space-between">
              <Flex direction="column">
                <Heading size="sm" textTransform="uppercase">
                  Tiết Canh Vịt
                </Heading>
                <Stack align="center" direction="row" spacing={2}>
                  <LocationIcon />
                  <Text display="inline" color="text.200">
                    381 Trần Hưng Đạo
                  </Text>
                </Stack>
              </Flex>
              <Stack color="text.200" direction="row" spacing={4}>
                <Stack direction="row" spacing={2}>
                  <StarIcon />
                  <Text size="sm">4.0</Text>
                </Stack>
                <Text size="sm">3.3km</Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
    <Card p={3}>
      <CardBody p={0}>
        <Stack divider={<StackDivider />} spacing="4">
          <Flex gap={4}>
            <Image
              src="/monan.jpg"
              width={64}
              height={71}
              alt="Picture of the author"
            />
            <Flex direction="column" justifyContent="space-between">
              <Flex direction="column">
                <Heading size="sm" textTransform="uppercase">
                  Tiết Canh Vịt
                </Heading>
                <Stack align="center" direction="row" spacing={2}>
                  <LocationIcon />
                  <Text display="inline" color="text.200">
                    381 Trần Hưng Đạo
                  </Text>
                </Stack>
              </Flex>
              <Stack color="text.200" direction="row" spacing={4}>
                <Stack direction="row" spacing={2}>
                  <StarIcon />
                  <Text size="sm">4.0</Text>
                </Stack>
                <Text size="sm">3.3km</Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
    <Card p={3}>
      <CardBody p={0}>
        <Stack divider={<StackDivider />} spacing="4">
          <Flex gap={4}>
            <Image
              src="/monan.jpg"
              width={64}
              height={71}
              alt="Picture of the author"
            />
            <Flex direction="column" justifyContent="space-between">
              <Flex direction="column">
                <Heading size="sm" textTransform="uppercase">
                  Tiết Canh Vịt
                </Heading>
                <Stack align="center" direction="row" spacing={2}>
                  <LocationIcon />
                  <Text display="inline" color="text.200">
                    381 Trần Hưng Đạo
                  </Text>
                </Stack>
              </Flex>
              <Stack color="text.200" direction="row" spacing={4}>
                <Stack direction="row" spacing={2}>
                  <StarIcon />
                  <Text size="sm">4.0</Text>
                </Stack>
                <Text size="sm">3.3km</Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
    <Card p={3}>
      <CardBody p={0}>
        <Stack divider={<StackDivider />} spacing="4">
          <Flex gap={4}>
            <Image
              src="/monan.jpg"
              width={64}
              height={71}
              alt="Picture of the author"
            />
            <Flex direction="column" justifyContent="space-between">
              <Flex direction="column">
                <Heading size="sm" textTransform="uppercase">
                  Tiết Canh Vịt
                </Heading>
                <Stack align="center" direction="row" spacing={2}>
                  <LocationIcon />
                  <Text display="inline" color="text.200">
                    381 Trần Hưng Đạo
                  </Text>
                </Stack>
              </Flex>
              <Stack color="text.200" direction="row" spacing={4}>
                <Stack direction="row" spacing={2}>
                  <StarIcon />
                  <Text size="sm">4.0</Text>
                </Stack>
                <Text size="sm">3.3km</Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
    <Card p={3}>
      <CardBody p={0}>
        <Stack divider={<StackDivider />} spacing="4">
          <Flex gap={4}>
            <Image
              src="/monan.jpg"
              width={64}
              height={71}
              alt="Picture of the author"
            />
            <Flex direction="column" justifyContent="space-between">
              <Flex direction="column">
                <Heading size="sm" textTransform="uppercase">
                  Tiết Canh Vịt
                </Heading>
                <Stack align="center" direction="row" spacing={2}>
                  <LocationIcon />
                  <Text display="inline" color="text.200">
                    381 Trần Hưng Đạo
                  </Text>
                </Stack>
              </Flex>
              <Stack color="text.200" direction="row" spacing={4}>
                <Stack direction="row" spacing={2}>
                  <StarIcon />
                  <Text size="sm">4.0</Text>
                </Stack>
                <Text size="sm">3.3km</Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  </Flex>
);

export default ListCard;

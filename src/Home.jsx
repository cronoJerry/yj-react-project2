import { Text, Box, Grid, GridItem, VStack } from '@chakra-ui/react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

const DataTour = [
  {
    text: '6월 이벤트',
    image:
      'https://plus.unsplash.com/premium_photo-1673002094288-6c4456aa9098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: '7월 이벤트',
    image:
      'https://plus.unsplash.com/premium_photo-1683299266036-9e9b6c9d9152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: '8월 이벤트',
    image:
      'https://images.unsplash.com/photo-1684324500031-65fc8dcd4156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
];
const DataMount = [
  {
    text: '팔공산투어',
    image:
      'https://images.unsplash.com/photo-1684482570533-b97679dd0705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: '지리산투어',
    image:
      'https://images.unsplash.com/photo-1683659635782-af84e4b67cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: '앞산투어',
    image:
      'https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    text: '뒷산투어',
    image:
      'https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
  },
];
export default function Home() {
  return (
    <Layout>
      <VStack w={'inherit'} py={140} px={4}>
        <VStack w={'full'}>
          <Text fontWeight={600} fontSize={24}>
            New Arrival
          </Text>
          <Grid gridTemplateColumns={'repeat(2,1fr)'} w={'full'} gap={2}>
            {DataMount.map((item, i) => (
              <GridItem
                key={i}
                h={'200px'}
                border={'1px'}
                borderColor={'gray.300'}
                rounded={12}
                backgroundImage={item.image}
                bgSize={'cover'}
                bgPosition={'center center'}
                position="relative"
                overflow={'hidden'}
              >
                <Box
                  position={'absolute'}
                  top={0}
                  left={0}
                  w={'full'}
                  h={'full'}
                  bgGradient={'linear(to-b, rgba(0,0,0,0.1), rgba(0,0,0,0.9))'}
                >
                  <Text
                    color={'white'}
                    position="absolute"
                    w="full"
                    bottom="0px"
                    align="center"
                    fontWeight={600}
                    py={4}
                  >
                    {item.text}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </VStack>
        <VStack w={'full'} alignItems={'flex-start'}>
          <Text fontWeight={600} fontSize={24}>
            event
          </Text>
          <Grid gap={4} w={'full'}>
            {DataTour.map((item, i) => (
              <GridItem
                key={i}
                w={'full'}
                h={'120px'}
                rounded={'lg'}
                bgImage={`url(${item.image})`}
                bgSize={'cover'}
                bgPosition={'center'}
                position={'relative'}
              >
                <Link to="/detail">
                  <Box
                    position={'absolute'}
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                    bgGradient="linear(to-b, rgba(255,255,255,0.1), rgba(255,255,255,0.9))"
                  >
                    <Text
                      position={'absolute'}
                      top={'50%'}
                      left={'50%'}
                      transform={'translate(-50%, -50%)'}
                      fontWeight={600}
                      color={'blackAlpha.800'}
                      fontSize={20}
                    >
                      {item.text}
                    </Text>
                  </Box>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </VStack>
    </Layout>
  );
}


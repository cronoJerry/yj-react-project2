import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import Layout from './Layout';
import { Avatar } from '@chakra-ui/react';

export default function Profile() {
  return (
    <Layout>
      <VStack
        as="form"
        bg={'gray.300'}
        w={'full'}
        minH="100vh"
        py={'140px'}
        alignItems={'center'}
        px={4}
        spacing={6}
      >
        <VStack spacing={8}>
          <Avatar
            src={
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
            }
            size={'xl'}
            color="black"
            name="grace"
            bg={'gray.400'}
          />
          <VStack spacing={2}>
            <Text fontSize={20} fontWeight={600}>
              grace
            </Text>
            <Text fontSize={14} fontWeight={600}>
              she is the greatest mother
            </Text>
          </VStack>
        </VStack>
        <HStack w={'80%'} spacing={4}>
          <Box
            textAlign={'center'}
            border={'1px'}
            rounded={'xl'}
            px={'20px'}
            py={1}
            w={'140px'}
            color={'blue.600'}
            _hover={{
              backgroundColor: 'blue.600',
              color: 'white',
              transition: 'all 2s',
            }}
          >
            Contact
          </Box>
          <Box
            textAlign={'center'}
            border={'1px'}
            rounded={'xl'}
            px={'20px'}
            py={1}
            w={'140px'}
            color={'red.600'}
            _hover={{
              backgroundColor: 'red.600',
              color: 'white',
              transition: 'all 2s',
            }}
          >
            Follow
          </Box>
        </HStack>
      </VStack>
    </Layout>
  );
}

import { Text, Box, HStack, VStack } from '@chakra-ui/react';
import {
  AiFillApple,
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlineContacts,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      {/* header */}
      <Box w="full" display="flex" justifyContent="center">
        <VStack w="sm">
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            w={'inherit'}
            h={'120px'}
            bg="black"
            position={'fixed'}
            top={0}
            zIndex={9}
          >
            <AiFillApple size={32} color="white" />
          </Box>
          {/* header */}
          {/* main Contents */}
          {children}
          {/* main Contents */}
          {/* footer */}
          <Box
            w={'inherit'}
            h={'120px'}
            bg="blackAlpha.900"
            position={'fixed'}
            bottom={0}
          >
            <HStack
              h={'inherit'}
              alignItems={'center'}
              justifyContent={'space-around'}
            >
              <Link to="/">
                <VStack w="full" color="white">
                  <AiOutlineHome />
                  <Text>Home</Text>
                </VStack>
              </Link>
              <Link to="/profile">
                <VStack w="full" color="white">
                  <AiOutlineProfile />
                  <Text>Profile</Text>
                </VStack>
              </Link>
              <Link to="/contact">
                <VStack w="full" color="white">
                  <AiOutlineContacts />
                  <Text>ContactUs</Text>
                </VStack>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Box>
      {/* footer */}
    </>
  );
}

export default Layout;

import { Text, Box, HStack, VStack } from '@chakra-ui/react';
import {
  AiFillApple,
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlineContacts,
  AiFillCaretLeft,
} from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const GNB = [
  { title: 'Home', href: '/', icon: AiOutlineHome },
  { title: 'Profile', href: '/profile', icon: AiOutlineProfile },
  { title: 'Contact', href: '/contact', icon: AiOutlineContacts },
];

function Layout({ children, canGoBack, title }) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
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
            {canGoBack ? (
              <Box
                onClick={handleClick}
                position={'absolute'}
                left={'20px'}
                cursor="pointer"
              >
                <AiFillCaretLeft color="white" size={'20px'} />
              </Box>
            ) : null}
            {canGoBack ? (
              <Text color={'white'}>{title}</Text>
            ) : (
              <AiFillApple size={32} color="white" />
            )}
          </Box>
          {/* header */}
          {/* main Contents */}
          {children}
          {/* main Contents */}
          {/* footer */}
          {canGoBack ? null : (
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
                {GNB.map((item, i) => (
                  <Box w="full" key={i}>
                    <Link to={item.href}>
                      <VStack w="full" color="white">
                        <item.icon
                          size={24}
                          color={
                            location.pathname === item.href
                              ? 'rgb(229,57,53)'
                              : 'white'
                          }
                        />
                        <Text
                          color={
                            location.pathname === item.href
                              ? 'red.500'
                              : 'white'
                          }
                        >
                          {item.title}
                        </Text>
                      </VStack>
                    </Link>
                  </Box>
                ))}
              </HStack>
            </Box>
          )}
        </VStack>
      </Box>
      {/* footer */}
    </>
  );
}

export default Layout;

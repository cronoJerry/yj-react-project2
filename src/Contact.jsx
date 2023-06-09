import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Layout from './Layout';

export default function Contact() {
  return (
    <Layout>
      <VStack
        as="form"
        bg={'gray.300'}
        w={'full'}
        minH="100vh"
        py={'140px'}
        alignItems={'flex-start'}
        px={4}
        spacing={6}
      >
        <Text fontWeight={700} fonstSize={20}>
          무료상담 신청
        </Text>
        <VStack w={'full'} alignItems={'flex-start'}>
          <Text fontWeight={600}>이름</Text>
          <Input
            // onChange={handleChange}
            // value={name}
            bg={'gray.100'}
            placeholder="이름을 입력해 주세요"
          />
        </VStack>
        <VStack w={'full'} alignItems={'flex-start'}>
          <Text fontWeight={600}>연락처</Text>
          <Input bg={'gray.100'} placeholder="연락처를 입력해 주세요" />
        </VStack>
        <VStack w={'full'} alignItems={'flex-start'}>
          <Text fontWeight={600}>e-mail</Text>
          <Input bg={'gray.100'} placeholder="e-mail을 입력해 주세요" />
        </VStack>
        <VStack w={'full'} alignItems={'flex-start'}>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="1">남성</Radio>
              <Radio value="2">여성</Radio>
            </Stack>
          </RadioGroup>
        </VStack>
        <Button colorScheme="blue">전송하기</Button>
      </VStack>
    </Layout>
  );
}


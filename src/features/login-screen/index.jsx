import { useNavigate } from 'react-router-dom'
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Stack,
    Text
} from '@chakra-ui/react'
import { useAuth } from '../../components/supabase-auth-provider/index.jsx'
import { useEffect } from 'react'

export const LoginScreen = () => {
    const navigate = useNavigate()
    const { user, signIn } = useAuth()

    useEffect(() => {
        if (user?.user_id) {
            navigate('/')
        }
    }, [navigate, user?.user_id])

    const handleLogin = () => {
        signIn().then(() => navigate('/'))
    }

    return (
        <Stack
            width={'100vw'}
            height={'100vh'}
            p={0}
            m={0}
            spacing={0}
            direction={{ base: 'column', md: 'row' }}
        >
            <Flex p={8} flex={3} align={'center'} justify={'center'}>
                <Stack spacing={0} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'} marginBottom={8}>
                        {'Добро пожаловать'}
                    </Heading>
                    <FormControl id="email" marginBottom={5}>
                        <FormLabel>{'Email'}</FormLabel>
                        <Input type="email" size={'lg'} />
                    </FormControl>
                    <FormControl id="password" marginBottom={5}>
                        <FormLabel>{'Пароль'}</FormLabel>
                        <Input type="password" size={'lg'} />
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}
                        >
                            <Checkbox>{'Запомнить меня'}</Checkbox>
                            <Text color={'blue.500'}>{'Забыли пароль?'}</Text>
                        </Stack>
                        <Button
                            colorScheme={'blue'}
                            variant={'solid'}
                            size={'lg'}
                            onClick={handleLogin}
                        >
                            {'Войти'}
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={2} width="100%">
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack>
    )
}

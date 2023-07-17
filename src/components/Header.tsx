import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  return(
    <Flex backgroundColor='black' padding='5px'>
      <Box mx='20px'>
        <Center>
          <Text fontSize='3xl' color='white'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              mx='10px'
              onClick={() => navigate('/conta/:id')}
            >
              Home
            </Button>
            <Button
              mx='10px'
              onClick={() => navigate('/user')}
            >
              Informações do usuário
            </Button>
            
            <Button
              mx='10px'
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
    
  )
}
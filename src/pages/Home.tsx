import { Box, Center, Heading, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";
import Btn from "../components/Btn";

const Home = () => {
     const [ email, setEmail ] = useState<string>('')
     const [ pass, setPass ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password);

        if(!loggedIn){
            return alert('Email inválido')
        }
        else {
            setIsLoggedIn(true)
            changeLocalStorage({ login: true })
            navigate('/conta/1')
        }
        
    }

    useEffect(() => {
        const login = localStorage.getItem('diobank');
        if (login) {
            navigate('/conta/1');
        }
    },[navigate]);  

    return (
        <Center h='90vh'>
            <Box padding="25px" maxWidth='600px'>
            <Card>
                <Center>
                    <Heading color='#623893'>Faça o login</Heading>
                </Center>
                <Input placeholder="email" focusBorderColor='purple' my='10px' value={email} onChange={e => setEmail(e.target.value)} required/>
                <Input placeholder="password" focusBorderColor='purple' my='10px' value={pass} onChange={e => setPass(e.target.value)} minLength={8} maxLength={8} required/>
                <Center>
                    <Btn
                        onClick={() => validateUser(email, pass)}
                    />
                </Center>
            </Card>
        </Box>
        </Center>
    );
}

export default Home;
import { Card, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UserData } from "../interface/IUserData";
import { api } from "../api";

const User = () => {
    const [ userData, setUserData ] = useState<null | UserData>();
    
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])
    
    return ( 
        <Center h='90vh'>
            <Card p='20px'>
                <Center my='20px'>
                    <Heading color='#623893'>Informações do usuário</Heading>
                </Center>
                <Center>
                    <Flex direction='column'>
                        <Text><strong>Nome:</strong> {userData?.name}</Text>
                        <Text><strong>Email:</strong> {userData?.email}</Text>
                        <Text><strong>Saldo:</strong> R$ {userData?.balance.toFixed(2).replace('.',',')}</Text>
                    </Flex>
                </Center>
            </Card>
        </Center>
     );
}
 
export default User;

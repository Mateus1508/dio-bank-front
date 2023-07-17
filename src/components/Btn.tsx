import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IBtn {
    onClick: MouseEventHandler
}

export const Btn = ({ onClick }: IBtn) => {
    return(
        <Button
          onClick={onClick}
          colorScheme='purple'
          size="sm"
          width="100%"
          marginTop="5px"
        >
          Entrar
        </Button>
    )
}

export default Btn;
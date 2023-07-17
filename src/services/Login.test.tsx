import { login } from "./login"

describe('login', () => {

    const mockEmail = 'mateus@dio.bank'
    const mockSenha = '12345678'
    it('should show welcome alert', async() => {
        const response = await login(mockEmail,mockSenha)
        expect(response).toBeTruthy()
    })

    it('Should show error case email or password invalid', async() => {
        const response = await login('email@invalido.com','12245678')
        expect(response).toBeFalsy()
    })
})
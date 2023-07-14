import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('should show welcome alert', () => {
        login();
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
    })
})
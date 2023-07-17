const conta = {
    email: 'mateus@dio.bank',
    password: '12345678',
    name: 'Mateus',
    balance: 2000.50,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000);
})
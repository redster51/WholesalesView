export const data = [
    {
        id: 1,
        email: 'user@gmail.com',
        userName: 'Anton',
        password: 'password',
        gender: 'male',
        phoneNumber: '+1234567890',
        country: 'Belarus',
        address: 'Minsk, street Blabla',
        photo: 'https://img.icons8.com/doodle/96/000000/user-male-circle.png',
        amount: '300$',
        role: 'user',
        fees: [2, 3, 4],
        orders: [
            {
                feeId: 1,
                count: 2
            },
            {
                feeId: 5,
                count: 2
            }]
    },
    {
        id: 2,
        email: 'user2@gmail.com',
        userName: 'Maks',
        password: 'password',
        gender: 'male',
        phoneNumber: '+1234567891',
        country: 'Belarus',
        address: 'Minsk, street Blabla',
        photo: 'https://img.icons8.com/doodle/96/000000/user.png',
        amount: '1300$',
        role: 'user',
        fees: [1],
        orders: [
            {
                feeId: 2,
                count: 4
            },
            {
                feeId: 4,
                count: 2
            }]
    },
    {
        id: 3,
        email: 'provider@gmail.com',
        userName: 'Mari',
        password: 'password',
        gender: 'female',
        settlementAccount: 'BY59АКВВ36329000032145100000',
        payerAccountNumber: '590722046',
        companyName: 'IDT',
        phoneNumber: '+1234567891',
        country: 'Belarus',
        address: 'Minsk, street Blabla',
        photo: 'https://img.icons8.com/doodle/96/000000/user-female-skin-type-5--v1.png',
        role: 'provider',
        fees: [],
        orders: [{}],
    },
    {
        id: 4,
        email: 'provider2@gmail.com',
        userName: 'Evgeney',
        password: 'password',
        gender: 'male',
        settlementAccount: 'BY59АКВВ36329000032145100012',
        payerAccountNumber: '590722078',
        companyName: 'IDT',
        phoneNumber: '+1234567893',
        country: 'Belarus',
        address: 'Minsk, street Blabla blabla',
        photo: 'https://img.icons8.com/doodle/96/000000/user.png',
        role: 'provider',
        fees: [],
        orders: [{}],
    }
];

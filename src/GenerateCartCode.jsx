const generateRandomAlphanumeric = (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let cartCode = '';
    for (let i = 0; i < length; i++) {
        cartCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return cartCode;
};

export const randomValue=generateRandomAlphanumeric()

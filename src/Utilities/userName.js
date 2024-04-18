function generateRandomUsername(length) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let username = '';
    for (let i = 0; i < length - 1; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        username += letters[randomIndex];
    }
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    username += randomNumber;

    return username;
}

export default generateRandomUsername

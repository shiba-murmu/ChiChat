/**
 * 
 * @param { for email validations. } email 
 * @returns 
 */

const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
}

export default isValidEmail;
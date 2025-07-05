/**
 * 
 * @param {UserName validations added here, no special characters allowed} 
 * userName .
 * @returns 
 */

const userNameValid = (userName) => {
    const userNameRegex = /^[a-z_][a-z0-9_]*$/;
    return userNameRegex.test(userName);
}

export default userNameValid;
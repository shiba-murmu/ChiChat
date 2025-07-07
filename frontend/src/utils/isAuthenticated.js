export const isAuthenticated = () => {
    // This function is used to check if the user is authenticated or not. If the accessToken exists in the local storage, then the user is authenticated.
    const token = localStorage.getItem("accessToken");
    return !!token;
};
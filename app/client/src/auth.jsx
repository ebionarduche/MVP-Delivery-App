export const isAuthenticated = () => {
    return localStorage.getItem('userData') !== null;
};
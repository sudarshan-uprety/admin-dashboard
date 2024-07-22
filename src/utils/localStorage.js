export const getIdToken = () => {
    return localStorage.getItem('id_token')
}

export const getAccessToken = () => {
    return localStorage.getItem('access_token')
}

export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token')
}

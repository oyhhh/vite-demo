// (获取 || 设置) token
export function ACCESS_TOKEN(token) {
    if (token === undefined) {
        return sessionStorage.getItem('token')
    } else {
        return sessionStorage.setItem('token', token)
    }
}
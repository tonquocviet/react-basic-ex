export const Login = (email, pass) => {
  return {
    type: 'LOGIN',
    payload: {email, pass}
  }
}
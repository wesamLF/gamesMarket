
import axios from "axios"

export const postSignIn = async ({ username, password, email }) => {
    const newUrl = `http://localhost:1337/api/auth/local/register`

    const res = await axios.post(newUrl , {
        username:username,
        email:email,
        password:password
    })
    return res
}

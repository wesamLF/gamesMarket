
import axios from "axios"

export const postLogIn = async ({ identifier, password }) => {



    const newUrl = `http://localhost:1337/api/auth/local`
    const res = await axios.post(newUrl, {
        identifier: identifier,
        password: password
    })

    console.log("res ------", res)

    return res



}
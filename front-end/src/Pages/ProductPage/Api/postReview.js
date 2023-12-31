
import axios from "axios"

export const postReview = async ({ userId, text, rating, product, token }) => {


    const newUrl = `http://localhost:1337/api/createreview/${product}`


    const res = await axios.post(
        newUrl,

        {
            data: {
                userId: userId,
                text: text,
                rating: rating

            }
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }


    )
    console.log("res" ,res)
    return res






}


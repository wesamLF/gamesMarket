

import axios from "axios"



export async function deleteReview({ userId,reviewId, token }) {

        

        const newUrl = `http://localhost:1337/api/myreviews/${userId}/${reviewId}`
        

        const res = await axios.delete(newUrl , {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log("ressss",res)

        return res


}


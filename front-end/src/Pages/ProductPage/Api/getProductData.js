
import axios from "axios"




export async function getProductData(key) {

        const id = key.queryKey[1].id


        const newUrl = `http://localhost:1337/api/products/${id}?populate[0]=image&populate[1]=categories&populate[2]=reviews&populate[3]=reviews.users_permissions_user`
        const res = await axios.get(newUrl)
        const product = await res.data.data.attributes
        const reviews = await res.data.data.attributes.reviews.data.reverse()
        return reviews , product


}
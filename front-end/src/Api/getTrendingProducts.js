
import axios from "axios"


export async function getTrendingProducts(key) {

        

                const newUrl = `http://localhost:1337/api/products?populate=*&pagination[start]=0&pagination[limit]=4`

                const res = await axios.get(newUrl)


                return res.data.data

    

}
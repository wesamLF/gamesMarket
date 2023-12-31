
import axios from "axios"


// if filter === empty => get best products..
// control function


export async function getTrendingProducts(key) {


        const newUrl = `http://localhost:1337/api/products?populate=*&pagination[start]=0&pagination[limit]=4`
        // TO-DO
        // in case for trending we should create field in product tabel to count " trending rank "
        const res = await axios.get(newUrl)


        return res.data.data
    

}
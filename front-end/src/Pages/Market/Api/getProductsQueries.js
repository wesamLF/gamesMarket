
import axios from "axios"


export async function getFilteredProducts(key) {

        const currentPage = `pagination[page]=${key.queryKey[2]}&pagination[pageSize]=8`
        const category = await key?.queryKey[1]?.category?.map((cat) => `&filters[categories][name][$eq]=${cat}`)
        const platform = await key?.queryKey[1]?.platform?.map((p) => `&filters[platform][name][$eq]=${p}`)
        const searchTerm = `&filters[title][$startsWith]=${key?.queryKey[1]?.searchTerm}`
        const filteredCategory = category ? category.join("") : ""
        const filteredPlatform = platform ? platform.join("") : ""



        const newUrl = `http://localhost:1337/api/products?populate=*${filteredCategory}${filteredPlatform}&${searchTerm}&${currentPage}`
        const res = await axios.get(newUrl)

        return res.data


}
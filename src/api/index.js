import axios from "axios"

export const fetchData = async (url) => {
    return await axios.get(url)
}

export const urlCats = "https://catfact.ninja/fact"
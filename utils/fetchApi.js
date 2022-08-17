import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

    

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '206ef27fd5msh27f9c9b7b5926e1p1222f1jsnac40d01294c4'
  }
    }

    )
    return data
}
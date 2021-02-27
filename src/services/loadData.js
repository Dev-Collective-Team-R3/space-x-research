import axios from 'axios'

const fetchMultipleSchema = (schema) =>{

}

export const fetchSingleItem = async ( schema, id ) =>{
    const request_url = `https://api.spacexdata.com/v4/${schema}/${id}`
    const response = await axios.get(request_url)
    return response.data
}

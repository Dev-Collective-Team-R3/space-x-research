import axios from 'axios'
import { useCallback } from 'react'

export const fetchMultipleSchema = async (schemas) =>{
    const base_url = `https://api.spacexdata.com/v4/`
    const constructed_reqs = schemas && schemas.length > 0 ? schemas.map(schema => axios.get(`${base_url}${schema}`)) : []
    const responses = await axios.all(constructed_reqs)
    return schemas.reduce((schema,currrent,index) => ({...schema, [currrent]: responses[index].data}), {})
}

export const fetchSingleSchema = async (schema) => {
    const request_url = `https://api.spacexdata.com/v4/${schema}`
    const response = await axios.get(request_url)
    return response.data
}

export const fetchSingleItem = async ( schema, id ) =>{
    const request_url = `https://api.spacexdata.com/v4/${schema}/${id}`
    const response = await axios.get(request_url)
    return response.data
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// import { JWTStorage } from '@/utils/storage/jwt'

export function useRequest() {
    // const { getJWTToken, removeJWTToken } = JWTStorage()
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Bata' : 'type2'
        },
        withCredentials: false,
    })

    // axiosInstance.interceptors.request.use(
    //     async (config) => {
    //         const token = getJWTToken('token')
    //         if (token) {
    //             config.headers['token'] = token
    //         }
    //         return config
    //     },
    //     (error) => {
    //         return Promise.reject(error)
    //     }
    // )
    
    // axiosInstance.interceptors.response.use(
    //     async (response) => {
    //         if (!response.data.status) {
    //             if (response.data.error?.includes('token is')) {
    //                 window.open('/login')
    //                 removeJWTToken('token')
    //                 return response
    //             }
    //         }
    //         return response
    //     }
    // )

    async function get<T = any>(
        endPoint : string,
        options : AxiosRequestConfig = {}
    ) : Promise<AxiosResponse<T>> {
        const res = await axiosInstance.get<T>(endPoint, options)

        return res
    }

    async function post<T = any>(
        endPoint : string,
        data : any,
        options : AxiosRequestConfig = {}
    ) : Promise<AxiosResponse<T>> {
        const res = await axiosInstance.post<T>(endPoint, data, options)

        return res
    }

    async function put<T = any>(
        endPoint : string,
        data : any,
        options : AxiosRequestConfig = {}
    ) : Promise<AxiosResponse<T>> {
        const res = await axiosInstance.put<T>(endPoint, data, options)

        return res
    }

    async function remove<T = any>(
        endPoint : string,
        options : AxiosRequestConfig = {}
    ) : Promise<AxiosResponse<T>> {
        const res = await axiosInstance.delete<T>(endPoint, options)

        return res
    }

    return {
        get,
        post,
        put,
        remove
    }
}
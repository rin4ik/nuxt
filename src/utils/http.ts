export interface ResponseConfig {
    code: number,
    status: number,
    data: any,
    msg: string
}


const fetch = (url: string, options?: any): Promise<any> => {
    const {baseUrl} = useRuntimeConfig()
    const reqUrl = baseUrl + url 

    return new Promise((resolve, reject) => {
        useFetch(reqUrl, { ...options }).then(({ data, error }) => {
            if (error.value) {
                console.warn('[useFetch error]', reqUrl, error)
                resolve(error.value)
                return
            }
            const value = data.value
            resolve(value)
        }).catch((err: any) => {
            console.error('[useFetch catch]', reqUrl, err)
            reject(err)
        })
    })
}

export default new class Http {

    get(url: string, params?: any): Promise<any> {
        return fetch(url, { method: 'get', params })
    }

    post(url: string, body?: any): Promise<any> {
        return fetch(url, { method: 'post', body })
    }

    put(url: string, body?: any): Promise<any> {
        return fetch(url, { method: 'put', body })
    }

    delete(url: string, body?: any): Promise<any> {
        return fetch(url, { method: 'delete', body })
    }
}
export class performApi {
    static sendData = async ( path: string, method: string, body?: object) => {
        const response = await fetch("http://locahost:3000/" + path, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        const data = await response.json()
        return data
    }

    static getData = async (path: string, token: string) => {
        const response = await fetch("http://locahost:3000/" + path, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
        const data = await response.json()
        return data
    }
}
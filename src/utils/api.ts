export class performApi {
    static sendData = async ( path: string, method: string, body?: object) => {
        console.log("teste")
        const response = await fetch(`http://10.107.144.19:3000/${path}`, {
            method: method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        console.log(response)
        const data = await response.json()
        console.log(data)
        return data
    }

    static getData = async (path: string, token: string) => {
        const response = await fetch("http://10.107.144.19:3000/" + path, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
        const data = await response.json()
        return data
    }
}
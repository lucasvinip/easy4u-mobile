//http://easy4u-server.online:3000
//http://10.107.144.12:3000
//products?productType=Natural&disponibility=true

export class performApi {
    public static sendData = async (path: string, method: string, body?: object | any) => {
        const response = await fetch(`http://easy4u-server.online:3000/${path}`, {
            method: method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        const data = await response.json()
        return data
    };
    
    public static sendDataToken = async (path: string, method: string, token: string | null, body?: object) => {

        console.log(body)

        const response = await fetch(`http://easy4u-server.online:3000/${path}`, {
            method: method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body),
        })
        const data = await response.json()
        return data
    };

    public static sendIdData = async (path: string, method: string, token: string | null) => {
        const response = await fetch(`http://easy4u-server.online:3000/${path}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    };

    public static getData = async (path: string, token: string | null) => {
        const response = await fetch(`http://easy4u-server.online:3000/${path}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    };

    public static deleteData = async (path: string | number, token: string | null) => {
        const response = await fetch(`http://easy4u-server.online:3000/${path}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    };
    
    public static updateData = async (path: string, token: string | null, body: object | any) => {
        const response = await fetch(`http://easy4u-server.online:3000/${path}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        console.log(data)
        return data
    }
}
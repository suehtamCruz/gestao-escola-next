export interface UserData  { 
    token: string,
    user:{
        id: string,
        name: string,
        codUser: number
    }
}


export const login = async (name: string, password: string) => {
    const response = await fetch(`${process.env.API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome: name, password }),
    });
    const data = await response.json() as UserData;
    if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
};
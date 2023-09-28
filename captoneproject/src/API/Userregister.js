import API_URL from "./index";    

export const UserRegister = async (username, password, email) => {

    const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
             
                username: username,
                password: password,
                email: email,
            
        }),
    });
    const data = await response.json();
    return data;
}
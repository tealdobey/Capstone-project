import API_URL from "./index";

export const userLogin = async (username, password) => {

    const response = await fetch(`${API_URL}/auth/login`, {


        method: 'POST',

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            
                username: username,
                password: password,
            
        }),
});
const data = await response.json();
return data;

}
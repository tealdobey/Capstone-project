import API_URL from "./index";

export const OneProduct = async (id) => {
    const response = await fetch(`${API_URL}/products/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
}
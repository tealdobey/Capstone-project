import API_URL from "./index";

export const AllProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    return data;
}
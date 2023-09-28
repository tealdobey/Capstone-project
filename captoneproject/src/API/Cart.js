import API_URL from "./index";



export const fetchAllCarts = async () => {
    const response = await fetch (`${API_URL}/carts`, {
    })
    const result = await response.json();
    console.log(result);
    console.log("the cart is working");
}

export const fetchSingleCart = async (cartId) => {
    const response = await fetch(`${API_URL}/carts/${cartId}`,{

});
    const result = await response.json();
    return result;
}

export const fetchaddCart = async (userId, date, products, productId, quantity) => {
    const response = await fetch(`${API_URL}/carts/${cartId}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    userId: userId,
                    date: date,
                    products:[{productId: productId,quantity:quantity}]
                }
            )
        })
        const result = await response.json();
        return result;
}

export const updateCart = async (useId, date, products, productId, quantity) => {
    const response = await fetch(`${API_URL}/carts/${cartId}`,{
        method:"PATCH",
                body:JSON.stringify(
                    {
                        userId:3,
                        date:2019-12-10,
                        products:[{productId:1,quantity:3}]
                    }
                )
            })
            const result = await response.json();
            return result;
}

export const deleteCart = async () => {
    const response = await fetch(`${API_URL}/carts/${cartId}`,{
        method: "DELETE"
    })
    const result = await response.json();
    return result;
}
export const getProduct = async ( id ) => {
    const resp = await fetch( `https://fakestoreapi.com/products/${id}` );
    const product = await resp.json();
    return product;
}
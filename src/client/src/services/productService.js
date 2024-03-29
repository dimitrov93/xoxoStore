import * as request from "./requester";

const baseUrl = 'https://xoxostore.onrender.com/api/products';

export const getAll = () => request.get(baseUrl);
export const getAllFiltered = (cat) => request.get(`${baseUrl}?category=${cat}`);

export const getOne = (productId) => request.get(`${baseUrl}/${productId}`);


export const create = (productData) => request.post(baseUrl, productData);

export const remove = (productId) => request.del(`${baseUrl}/${productId}`);

export const edit = (gameId, gameData) => request.put(`${baseUrl}/${gameId}`, gameData);

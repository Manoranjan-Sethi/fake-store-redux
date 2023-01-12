import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/actionTypes";

export const fetchProducts = () => async (dispatch) => {
  const res = await fakeStoreApi.get("/products");

  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: res.data });
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  const res = await fakeStoreApi.get(`/products/${id}`);

  dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: res.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

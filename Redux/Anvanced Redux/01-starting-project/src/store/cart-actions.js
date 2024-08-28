import { uiSliceActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
//Action creator thunk
//A thunk is a function that is called after another task done
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.showNotification({
        status: "pending",
        title: "Updated...",
        message: "Updated cart data",
      })
    );
    const sendRequest = async () => {
      const respponse = await fetch(
        "https://advanced-redux-project-d9cbc-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!respponse.ok) {
        throw new Error("Updated cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Updated cart data successfully.!",
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Updated cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const respponse = await fetch(
        "https://advanced-redux-project-d9cbc-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!respponse.ok) {
        throw new Error("Fetching cart data failed.");
      }
      const data = await respponse.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

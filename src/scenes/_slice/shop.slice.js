import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    categories: [],
    card: [],
    total: [],
    sumPrice: 0,
}

const setProductData = (state, action) => {
    state.productList = action.payload
}

const setcategoriesData = (state, action) => {
    state.categories = action.payload
}

const addProductToCard = (state, action) => {
    const product = action.payload;
    const isExist = state.card.findIndex(e => e.id === product.id);
    if (isExist >= 0) {
        state.card[isExist] = { ...product, quantity: state.card[isExist].quantity + 1 }
    } else {
        state.card = [...state.card, {
            ...product,
            quantity: 1
        }]
    }
    state.card.map((item, index) => {
        state.total = [...state.total, item.price * item.quantity]
        console.log( +item.price );

    })

}
const incrementQuantity = (state, action) => {
    const item = state.card.find((item) => { return item.id === action.payload });
    item.quantity++;
}
const decrementQuantity = (state, action) => {
    const item = state.card.findIndex((item) => { return item.id === action.payload });
    state.card[item].quantity === 1 ? state.card.splice(item, 1) : state.card[item].quantity--;
}
const totalPrice = (state) => {
    state.card.map((item, index) => {
        state.total = [...state.total, item.price * item.quantity]
    })
    console.log('sata', state.total);

    // state.total.map((item) => {
    //     state.sumPrice += item;
    // })
}
const ProductData = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductData,
        setcategoriesData,
        addProductToCard,
        incrementQuantity,
        decrementQuantity,
        totalPrice,
    }

})
export const {
    setProductData: setProductDataAction,
    setcategoriesData: setcategoriesDataAction,
    addProductToCard: addProductToCardAction,
    incrementQuantity: incrementQuantityAction,
    decrementQuantity: decrementQuantityAction,
    totalPrice: totalPriceAction,
} = ProductData.actions

export default ProductData.reducer
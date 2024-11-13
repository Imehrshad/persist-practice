const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}

const revalidateTotals = (state) => {
    state.totalCount = 0
    state.totalPrice = 0
    state.items.map((item) => {
        state.totalPrice += Math.floor(item.price*item.count)
    })
    state.items.map((item) => {
        state.totalCount +=item.count
    })
    return state
}

const shoppingCardRducer = createSlice({
    name: "shopping card",
    initialState: INITIAL_STATE,
    reducers: {
        addNewProduct: (state, action) => {
            state.items.push({ ...action.payload, count: 1 });
            return revalidateTotals(state)
        },
        increaseCount: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload) {
                     item.count++
                }
                else {
                     item
                }
            }
            )
            return revalidateTotals(state)
        },
        decreaseCount: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload) {
                    return item.count--
                }
                else {
                    return item
                }
            }
            )
            return revalidateTotals(state)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            return revalidateTotals(state)
        }

    }
})

export const { addNewProduct, increaseCount, decreaseCount, removeItem } = shoppingCardRducer.actions
export const shoppingCardSlice = shoppingCardRducer.reducer
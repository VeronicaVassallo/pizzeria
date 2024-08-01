import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	products: [],
	isLoading: false,
	error: null,
};

export const getListProducts = createAsyncThunk(
	"products/getAllProducts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER_BASE_URL}/product`
			);
			return response.data; //Axios mette i dati nella proprietà `data`
		} catch (error) {
			//Se c'è un errore rejectWithValue passare un errore personalizzato
			return rejectWithValue(error.response?.data || "An error occurred");
		}
	}
);

const productsSlice = createSlice({
	name: "getProducts",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getListProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getListProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(getListProducts.rejected, (state) => {
				state.isLoading = false;
				state.error = " Errore durante la ricezione dei dati dal server.";
			});
	},
});

export const allProducts = (state) => state.productsStore.products;

export const isProductLoading = (state) => state.productsStore.isLoading;

export const productError = (state) => state.productsStore.error;

export default productsSlice.reducer;

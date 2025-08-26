import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortfolio = createAsyncThunk(
  "portfolio/fetchPortfolio",
  async (symbols: string[]) => {
    const response = await axios.post("/api/portfolio", { symbols });

    return response.data.portfolio;
  }
);

interface PortfolioState {
  stocks: any[];
  loading: boolean;
  error: string | null;
}

const initialState: PortfolioState = {
  stocks: [],
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolio.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.stocks = action.payload;
      })
      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching portfolio";
      });
  },
});

export default portfolioSlice.reducer;

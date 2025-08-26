import yahooFinance from "yahoo-finance2";

export const getStockData = async (symbol: string) => {
  try {
    const quote = await yahooFinance.quote(symbol);
    return {
      symbol: quote.symbol,
      cmp: quote.regularMarketPrice,
      pe: quote.trailingPE,
      earnings: quote.earningsTimestamp
        ? new Date(Number(quote.earningsTimestamp) * 1000).toISOString()
        : null,
    };
  } catch (error) {
    throw new Error(`Error fetching data for ${symbol}`);
  }
};

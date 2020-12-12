import { Resource } from "../Resource";
import { StockInterface } from "./StockInterface";

export class Stock extends Resource {
  static baseUrl = "/v1/stock";

  get(symbol: string, date: Date, algorithm?: any) {
    const ulr = `${Stock.baseUrl}/${symbol}/${date}${
      algorithm && "/" + symbol
    }`;
    return this.API.get<StockInterface>(ulr);
  }
}

import { API } from "./API";
import { Resource } from "./resource/Resource";
import { APIConfigurations } from "./Configuration";
import { User } from "./resource/user/User";
import { Stock } from "./resource/stock/Stock";

export class Service extends Resource {
  protected API: API;

  user: User;
  stock: Stock;

  constructor(private options: APIConfigurations) {
    super({} as any);

    this.API = new API(options);

    this.user = new User(this.API);
    this.stock = new Stock(this.API);
  }

  abortPendingGetRequests() {
    this.API.abortRequests();
  }
}

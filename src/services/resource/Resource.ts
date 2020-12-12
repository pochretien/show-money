import { API } from "../API";
import * as queryString from "query-string";

export class Resource {
  static baseUrl: string;

  constructor(protected API: API) {}

  // for Post purpose
  protected buildPath(route: string, parameters: any): string {
    return route + this.convertObjectToQueryString(parameters);
  }

  private convertObjectToQueryString(parameters: any): string {
    if (!parameters) {
      return "";
    } else {
      const requestURL = queryString.stringify(parameters, {
        skipEmptyString: true,
        skipNull: true,
        sort: false,
      });
      return requestURL.length ? `?${requestURL}` : "";
    }
  }
}

import { APIConfigurations, Environment, Region } from "./Configuration";

export class API {
  private getRequestsController: AbortController;
  constructor(private config: APIConfigurations) {
    this.getRequestsController = new AbortController();
  }

  // List of request
  async get<T = Record<string, unknown>>(
    url: string,
    args: RequestInit = { method: "get" }
  ): Promise<T | undefined> {
    args.signal = args.signal || this.getRequestsController.signal;
    try {
      return await this.request<T>(url, args);
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      } else {
        throw error;
      }
    }
  }

  async post<T = Record<string, unknown>>(
    url: string,
    body: any = {},
    args: RequestInit = {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  ): Promise<T> {
    return await this.request<T>(url, args);
  }

  async put<T = Record<string, unknown>>(
    url: string,
    body: any = {},
    args: RequestInit = {
      method: "put",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  ): Promise<T> {
    return await this.request<T>(url, args);
  }

  async delete<T = Record<string, unknown>>(
    url: string,
    args: RequestInit = { method: "delete" }
  ): Promise<T> {
    return await this.request<T>(url, args);
  }

  abortRequests(): void {
    this.getRequestsController.abort();
    this.getRequestsController = new AbortController();
  }

  private get environment(): Environment {
    return this.config.environment || Environment.prod;
  }

  private get region(): Region {
    return this.config.region || Region.US;
  }

  private get endpoint(): string | undefined {
    return this.config.host;
    if (this.config.region) {
      //TODO: Return the right string for the host
    }
  }

  private get accessToken(): string | undefined {
    return this.config.accessToken;
  }

  private getUrlFromRoute(route: string): string {
    return `${this.endpoint}${route}`;
  }

  // Update my request for each call
  private async request<T>(route: string, args: RequestInit): Promise<T> {
    const init: RequestInit = {
      ...args,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        Accept: "application/json",
        ...(args.headers || {}),
      },
    };

    const response = await fetch(this.getUrlFromRoute(route), init);
    return this.responseValidator<T>(response);
  }

  // To Improve and add UI Toast or something
  private async responseValidator<T>(response: Response) {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 204) {
      return {};
    }
    throw await response.json();
  }
}

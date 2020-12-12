import { Resource } from "../Resource";
import { UserInterface } from "./UserInterface";

export class User extends Resource {
  static baseUrl = "/v1/user";

  get(userId: string) {
    return this.API.get<UserInterface>(`${User.baseUrl}/${userId}`);
  }
}

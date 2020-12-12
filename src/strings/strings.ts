import { map } from "lodash";

export const Strings = {
  UserHeader: "Hello, {name}",
  Title: "Show Money",
  Name: "Show Money",
  SocialMedial: "Social media",
  Total: "Total",
  Settings: "Settings",
  DisplaySocialMedia: "Display Social Media",
  StartingDate: "Starting date",
  Algorithm: "Algorithm to use",
  Date: "Date",
  Price: "Price",
  Buying: "Buying",
  Holding: "Holding",
  Selling: "Selling",
  PriceSign: "${price}",
  Percentage: "{value}%",
  Search: "Search",
};

export const StringsName: { [key: string]: string } = Object.fromEntries(
  map(Strings, (value: string, key: string) => [key, key])
);

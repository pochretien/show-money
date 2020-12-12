export interface APIConfigurations {
  accessToken?: string;
  environment?: Environment;
  region?: Region;
  host?: string;
}
export enum Region {
  US = "us",
  EU = "eu",
  FR = "fr",
}

export enum Environment {
  dev = "dev",
  prod = "production",
}

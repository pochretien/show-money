import { Region } from "../../Configuration";

// Sync with backend
export enum Media {
  facebook = "facebook",
  instagram = "instagram",
  linkedin = "linkedin",
  twitter = "twitter",
  reddit = "reddit",
}

export const defaultMedia = {
  [Media.facebook]: 0,
  [Media.instagram]: 0,
  [Media.linkedin]: 0,
  [Media.twitter]: 0,
  [Media.reddit]: 0,
};

export interface SocialMedia {
  totalCount: number;
  media: {
    [media: string]: number;
  };
}

export enum AlgorithmName {
  recommendationAlgorithm = "recommendationAlgorithm",
  new1 = "new1",
  new2 = "new2",
  beta = "beta",
}

export interface AlgorithmStock {
  name: AlgorithmName;
  args?: { [paramName: string]: any };
}

export interface StockInterface {
  symbol: {
    value: string;
  };
  price: {
    value: number;
    currency: Region;
  };
  socialMedial: SocialMedia;
  dateBegin: Date;
  numberOfRecommendation: number;
  recommendation: Recommendation[];
  algorithm?: AlgorithmStock;
}

export enum Sign {
  up = "up",
  down = "down",
}
export const defaultDateFormat = "LLL";

export interface Recommendation {
  buying: {
    value: number;
    sign: Sign;
  };
  holding: {
    value: number;
    sign: Sign;
  };
  selling: {
    value: number;
    sign: Sign;
  };
  price: number;
  date: string;
}

import { Media, SocialMedia } from "./stock/StockInterface";
import { getNumber } from "../../utils";

export interface SocialMedialGenerator {
  totalCount: number;
  facebook: number;
  instagram: number;
  linkedin: number;
  twitter: number;
  reddit: number;
}

export const DemoMockUtils = {
  StockPriceGenerator: (symbol: string, date: Date): number =>
    Math.round(getNumber(3000) * 100) / 100,
  SocialMediaCountGenerator: (
    symbol: string,
    mediaType?: Media
  ): SocialMedia => {
    const facebook = getNumber(10000);
    const instagram = getNumber(10000);
    const linkedin = getNumber(20000);
    const twitter = getNumber(50000);
    const reddit = getNumber(20000);
    return {
      totalCount: facebook + instagram + linkedin + twitter + reddit,
      media: {
        facebook,
        instagram,
        linkedin,
        twitter,
        reddit,
      },
    };
  },
};

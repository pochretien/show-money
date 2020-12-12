import { times } from "lodash";
import {
  AlgorithmName,
  defaultDateFormat,
  Recommendation,
  Sign,
} from "./resource/stock/StockInterface";
import { getPercentage } from "../utils";
import moment from "moment";
import { DemoMockUtils } from "./resource/DemoMockUtils";

export const Algorithms: {
  [name: string]: (args: { [paramName: string]: any }) => any;
} = {
  [AlgorithmName.recommendationAlgorithm]: ({
    price,
    socialMediaCount,
    date,
    number,
  }): Recommendation[] => {
    const recommendations: Recommendation[] = [];
    times(number, (index: number) => {
      recommendations.push({
        buying: {
          value: getPercentage(),
          sign: Math.random() > 0.5 ? Sign.up : Sign.down,
        },
        holding: {
          value: getPercentage(),
          sign: Math.random() > 0.5 ? Sign.up : Sign.down,
        },
        selling: {
          value: getPercentage(),
          sign: Math.random() > 0.5 ? Sign.up : Sign.down,
        },
        price: DemoMockUtils.StockPriceGenerator("", date),
        date: moment(date).add(index, "days").format(defaultDateFormat),
      });
    });
    return recommendations;
  },
  [AlgorithmName.new1]: ({ price, socialMediaCount, arg1 }): Recommendation[] =>
    ({} as any),
  [AlgorithmName.new2]: ({
    price,
    socialMediaCount,
    arg1,
    arg2,
  }): Recommendation[] => ({} as any),
  [AlgorithmName.beta]: ({
    price,
    socialMediaCount,
    beta_arg1,
    beta_arg2,
  }): Recommendation[] => ({} as any),
};

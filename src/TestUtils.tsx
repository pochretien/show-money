import { KeyValueReducerGenerator } from "./redux/reducers/KeyValueReducerGenerator";
import { StockState } from "./redux/Interfaces";
import { ReduxConstants } from "./redux/ReduxConstants";
import { Region } from "./services/Configuration";
import { Algorithms } from "./services/Algorithms";
import { AlgorithmName, Media } from "./services/resource/stock/StockInterface";
import { NumberOfRecommendation } from "./redux/request/StockRequest";
import { Store } from "./redux/Store";
import moment from "moment";

export const TestUtils = {
  updateStock: () =>
    Store.dispatch(
      KeyValueReducerGenerator.setKeyValue<StockState>(
        ReduxConstants.Keys.stock,
        {
          symbol: {
            value: "aaa",
          },
          price: {
            value: 10,
            currency: Region.US,
          },
          dateBegin: moment().toDate(),
          socialMedial: {} as any,
          numberOfRecommendation: NumberOfRecommendation[0],
          recommendation: Algorithms[AlgorithmName.recommendationAlgorithm]({
            price: 10,
            socialMediaCount: 20,
            date: moment().toDate(),
            number: 10,
          }),
        }
      )
    ),
};

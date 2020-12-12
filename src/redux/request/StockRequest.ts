import { Dispatch } from "redux";
import { sleep } from "../../utils";
import {
  AlgorithmName,
  AlgorithmStock,
  Media,
} from "../../services/resource/stock/StockInterface";
import { DemoMockUtils } from "../../services/resource/DemoMockUtils";
import { Region } from "../../services/Configuration";
import { Algorithms } from "../../services/Algorithms";
import { ReduxConstants } from "../ReduxConstants";
import { StockState } from "../Interfaces";
import { KeyValueReducerGenerator } from "../reducers/KeyValueReducerGenerator";
import { RequestActions } from "../reducers/RequestActions";
import { ReduxState } from "../ReduxState";

export const NumberOfRecommendation = [10, 25];

export const StockRequest = {
  get: (algorithm?: AlgorithmStock) => async (
    dispatch: Dispatch,
    getState: () => ReduxState
  ) => {
    const state = getState();
    const symbol = state.searchSymbol;
    const date = state.searchDate;

    dispatch(RequestActions.set(ReduxConstants.Requests.stock));
    /* With backend
    const stock: StockInterface = await AppAPI.Service.stock.get(
      symbol,
      date,
      algorithm
    );
     */
    await sleep(200);
    const price = DemoMockUtils.StockPriceGenerator(symbol, date);
    const socialMedia = DemoMockUtils.SocialMediaCountGenerator(
      symbol,
      Media.facebook
    );
    dispatch(
      KeyValueReducerGenerator.setKeyValue<StockState>(
        ReduxConstants.Keys.stock,
        {
          symbol: {
            value: symbol,
          },
          price: {
            value: price,
            currency: Region.US,
          },
          dateBegin: date,
          socialMedial: socialMedia,
          numberOfRecommendation: NumberOfRecommendation[0],
          recommendation: Algorithms[AlgorithmName.recommendationAlgorithm]({
            price,
            socialMediaCount: socialMedia.totalCount,
            date,
            number: 10,
            ...(algorithm?.args ?? {}),
          }),
          algorithm,
        }
      )
    );
    dispatch(RequestActions.set(ReduxConstants.Requests.stock, false));
  },
};

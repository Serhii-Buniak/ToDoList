import CardApi, { Card } from "../../api/CardApi";
import { AppDispatch } from "../action";
import { InitCardAction } from "./CardsAction";
import CardsTypes from "./CardsTypes";

class CardsCreators {
    public initAction(cards: Card[]): InitCardAction {
        return {
            type: CardsTypes.Init,
            items: cards
        }
    }

    public initThunk = () => async (dispatch: AppDispatch) => {
        const response = await CardApi.getItems()
        const items = response.data
        dispatch(this.initAction(items))
    }
}

export default new CardsCreators()
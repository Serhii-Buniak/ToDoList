import CardsAction, { InitCardAction } from './CardsAction';
import CardsState from './CardsState';
import CardsTypes from './CardsTypes';

const initialState: CardsState = {
    items: [

    ]
}

function cardReducer(state = initialState, action: CardsAction): CardsState {
    switch (action.type) {
        case CardsTypes.Init:
            const initAction = action as InitCardAction
            return {
                ...state,
                items: initAction.items
            }
        default:
            return state
    }
}

export default cardReducer
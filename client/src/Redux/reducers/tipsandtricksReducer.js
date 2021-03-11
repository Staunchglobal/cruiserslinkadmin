import { SET_TIPS_AND_TRICKS, RESET_TIPS_AND_TRICKS } from '../actions/actionTypes'
import { TIP_AND_TRICKS_META_DATA } from '../../util/constants'
const defaultVal = {}
TIP_AND_TRICKS_META_DATA.forEach((t, x) => {
    defaultVal[t.id] = { data: [], count: 0 }
})
const initialState = {
    tipsandtricks: defaultVal,
}
export const tipsandtricksReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_TIPS_AND_TRICKS:
            const { tipsandtricks, category } = action.payload
            const { data, count } = state.tipsandtricks[category]
            return Object.assign({}, state, {
                tipsandtricks: {
                    ...state.tipsandtricks,
                    [category]: { data: tipsandtricks, count: tipsandtricks.length }
                }
            })
        case RESET_TIPS_AND_TRICKS:
            return Object.assign({}, state, initialState)
        default:
            return state;
    }
}
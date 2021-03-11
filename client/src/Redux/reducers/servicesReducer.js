import { SET_SERVICES, RESET_SERVICES } from '../actions/actionTypes'
import { ServiceCategories } from '../../util/constants'
const initialState = {
    services: {
        1: { data: [], count: 0 },
        2: { data: [], count: 0 },
        3: { data: [], count: 0 },
        5: { data: [], count: 0 },
        6: { data: [], count: 0 },
        7: { data: [], count: 0 },
        8: { data: [], count: 0 },
        9: { data: [], count: 0 },
    },
}
export const servicesReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_SERVICES:
            const { services, category } = action.payload
            const { data, count } = state.services[category]
            return Object.assign({}, state, {
                services: {
                    ...state.services,
                    [category]: { data: services, count: services.length },
                }
            })
        case RESET_SERVICES:
            return Object.assign({}, state, initialState)
        default:
            return state
    }
}
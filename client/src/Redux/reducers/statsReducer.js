import { SET_STATS, RESET_STATS } from '../actions/actionTypes'
const initalState = {
    users: 0,
    services: 0,
    cruisers: 0,
    business: 0,
    tipsandtricks: 0,
    services_by_category: {
        1: { active: 0, pending: 0, inactive: 0, total: 0 },
        2: { active: 0, pending: 0, inactive: 0, total: 0 },
        3: { active: 0, pending: 0, inactive: 0, total: 0 },
        5: { active: 0, pending: 0, inactive: 0, total: 0 },
        6: { active: 0, pending: 0, inactive: 0, total: 0 },
        7: { active: 0, pending: 0, inactive: 0, total: 0 },
        8: { active: 0, pending: 0, inactive: 0, total: 0 },
        9: { active: 0, pending: 0, inactive: 0, total: 0 },
    },
    tips_and_tricks_by_category: {
        100: { active: 0, pending: 0, inactive: 0, total: 0 },
        200: { active: 0, pending: 0, inactive: 0, total: 0 },
        300: { active: 0, pending: 0, inactive: 0, total: 0 },
        400: { active: 0, pending: 0, inactive: 0, total: 0 },
        500: { active: 0, pending: 0, inactive: 0, total: 0 },
        600: { active: 0, pending: 0, inactive: 0, total: 0 },
        700: { active: 0, pending: 0, inactive: 0, total: 0 },
        800: { active: 0, pending: 0, inactive: 0, total: 0 },
        900: { active: 0, pending: 0, inactive: 0, total: 0 },
        1000: { active: 0, pending: 0, inactive: 0, total: 0 },
        1100: { active: 0, pending: 0, inactive: 0, total: 0 },
        1200: { active: 0, pending: 0, inactive: 0, total: 0 },
        1300: { active: 0, pending: 0, inactive: 0, total: 0 },
        1400: { active: 0, pending: 0, inactive: 0, total: 0 },
        1500: { active: 0, pending: 0, inactive: 0, total: 0 },
        1600: { active: 0, pending: 0, inactive: 0, total: 0 },
        1700: { active: 0, pending: 0, inactive: 0, total: 0 },
        1800: { active: 0, pending: 0, inactive: 0, total: 0 },
        1900: { active: 0, pending: 0, inactive: 0, total: 0 },
        2000: { active: 0, pending: 0, inactive: 0, total: 0 },
        2100: { active: 0, pending: 0, inactive: 0, total: 0 },
        2200: { active: 0, pending: 0, inactive: 0, total: 0 },
        2300: { active: 0, pending: 0, inactive: 0, total: 0 },
        2400: { active: 0, pending: 0, inactive: 0, total: 0 },
        2500: { active: 0, pending: 0, inactive: 0, total: 0 },
        2600: { active: 0, pending: 0, inactive: 0, total: 0 },
        2700: { active: 0, pending: 0, inactive: 0, total: 0 },
        2800: { active: 0, pending: 0, inactive: 0, total: 0 },
        2900: { active: 0, pending: 0, inactive: 0, total: 0 },
        3000: { active: 0, pending: 0, inactive: 0, total: 0 },
        3100: { active: 0, pending: 0, inactive: 0, total: 0 },
        3200: { active: 0, pending: 0, inactive: 0, total: 0 },
        3300: { active: 0, pending: 0, inactive: 0, total: 0 },
        3400: { active: 0, pending: 0, inactive: 0, total: 0 },
        3500: { active: 0, pending: 0, inactive: 0, total: 0 },
        3600: { active: 0, pending: 0, inactive: 0, total: 0 },
        3700: { active: 0, pending: 0, inactive: 0, total: 0 },
        3800: { active: 0, pending: 0, inactive: 0, total: 0 },
        3900: { active: 0, pending: 0, inactive: 0, total: 0 },
        4000: { active: 0, pending: 0, inactive: 0, total: 0 },
        4100: { active: 0, pending: 0, inactive: 0, total: 0 },
        4200: { active: 0, pending: 0, inactive: 0, total: 0 },
        4300: { active: 0, pending: 0, inactive: 0, total: 0 },
        4400: { active: 0, pending: 0, inactive: 0, total: 0 },
        4500: { active: 0, pending: 0, inactive: 0, total: 0 },
    }

}

export const statsReducer = function (state = initalState, action) {
    switch (action.type) {
        case SET_STATS:
            return Object.assign({}, state, action.payload.stats);
        case RESET_STATS:
            return Object.assign({}, state, initalState);
        default:
            return state;
    }
}
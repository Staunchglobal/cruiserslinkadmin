import { combineReducers } from 'redux'
import { usersReducer } from './usersReducer'
import { servicesReducer } from './servicesReducer'
import { tipsandtricksReducer } from './tipsandtricksReducer'
import { ratingsandfeedbackReducer } from './ratingsandfeedbackReducer'
import { claimsReducer } from './claimsReducer'
import { statsReducer } from './statsReducer'
const rootReducer = combineReducers({
    usersReducer,
    servicesReducer,
    tipsandtricksReducer,
    ratingsandfeedbackReducer,
    claimsReducer,
    statsReducer
})
export default rootReducer
import { USER_MOVE_NLP } from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    page: "",
    titleid: 1,
    categoryid: 1
};

const usermove_nlp = (state, action) => {
    return updateObject(state, {
        page: action.page,
        titleid: action.titleid,
        categoryid: action.categoryid
    });
};

const reducer = (state = initialState, action) => {
    return usermove_nlp(state, action)
};

export default reducer;
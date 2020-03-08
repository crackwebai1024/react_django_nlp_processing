import * as actionTypes from "./actionTypes";

export const usermove_nlp = (page, titleid, categoryid) => {
    return {
        type: actionTypes.USER_MOVE_NLP,
        page: page,
        titleid: titleid,
        categoryid: categoryid
    };
};
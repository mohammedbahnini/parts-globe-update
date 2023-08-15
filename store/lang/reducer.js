import { actionTypes } from './action';
import { frData } from './fr_data';
import { enData } from './en_data';
// need data in separate files 
// export data in reducer depending on action 

export const initialState = {
    currentLang:
    {
        id: enData.id,
        name: enData.name
    },
    langs: enData.langsMenu,
    langData: enData
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TO_FR:
            return {
                ...action.payload
            };
        case actionTypes.CHANGE_TO_EN:
            return {
                ...action.payload
            };
        case actionTypes.CHANGE_SUCESS:
            return {
                ...action.payload
            };
        default:
            return state;
    }
}

export default reducer;



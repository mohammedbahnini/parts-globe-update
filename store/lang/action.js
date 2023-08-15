import { frData } from './fr_data';
import { enData } from './en_data';

export const actionTypes = {
    CHANGE_TO_FR: 'CHANGE_TO_FR',
    CHANGE_TO_EN: 'CHANGE_TO_EN',
    CHANGE_TO_RU: 'CHANGE_TO_RU',
    CHANGE_SUCESS: 'CHANGE_SUCCESS'
};

export const changeLang = (lang) => {
    switch (lang) {
        case 'fr':
            return {
                type: actionTypes.CHANGE_TO_FR,
                payload: {
                    currentLang: { id: frData.id, name: frData.name },
                    langs: frData.langsMenu,
                    langData: frData
                }
            };
        case 'en':
            return {
                type: actionTypes.CHANGE_TO_EN,
                payload: {
                    currentLang: { id: enData.id, name: enData.name },
                    langs: enData.langsMenu,
                    langData: enData
                }
            };
    }

}

export const changeLangSuccess = (payload) => {
    return {
        type: actionTypes.CHANGE_SUCESS,
        payload
    }
}
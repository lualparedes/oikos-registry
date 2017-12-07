const initialState = {
    isEditorOpen: false,
    isModalSelectOpen: false,
    isModalWarnOpen: false
};

export function reducer(state = initialState, action) {
    switch(action.type) {

        case 'EDITOR_OPENS':
            return { ...state, isEditorOpen: true }
        break;

        case 'MODAL_SELECT_OPENS':
            return { ...state, isModalSelectOpen: true }
        break;

        case 'MODAL_WARN_OPENS':
            return { ...state, isModalWarnOpen: true }
        break;

        default:
            return state;
    }
}
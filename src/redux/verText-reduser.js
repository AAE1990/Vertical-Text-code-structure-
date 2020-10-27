const VERT_TEXT = 'VERT_TEXT';

let initialState = {
    VerticalTextD: '',
}

const verticalTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case VERT_TEXT: {
            return {
                ...state,
                VerticalTextD: action.VerticalTextD,
            }
        }
        default:
            return state;
    }
}

export const verticalTextCreator = (VerticalTextD) => ({ type: VERT_TEXT, VerticalTextD });

export default verticalTextReducer;
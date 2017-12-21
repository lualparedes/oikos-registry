import { clone } from '../assets/scripts/utils';

const initialState = {
    memberCollections: {
        current: [],
        honorary: [],
        alumni: []
    },
    editor: {
        title: 'Add new member',
        name: '',
        status: '',
        cardNumber: '',
        idNumber: '',
        email: '',
        phoneNumberHome: '',
        phoneNumberMobile: '',
        major: '',
        address: '',
        sex: '',
        dateOfBirth: {
            day: '',
            month: '',
            year: ''
        },
        typeOfBlood: '',
        allergies: '',
        diseases: '',
        emergencyContact1: '',
        emergencyContact2: '',
        enrollmentDate: {
            day: '',
            month: '',
            year: ''
        }
    }
};

export function reducer(state = initialState, action) {

    switch(action.type) {

        case 'UPDATE_CURRENT_MEMBERS':
            return {
                ...state,
                memberCollections: {
                    current: action.payload,
                    honorary: state.memberCollections.honorary,
                    alumni: state.memberCollections.alumni
                }
            };
        break;

        case 'UPDATE_HONORARY_MEMBERS':
            return {
                ...state,
                memberCollections: {
                    current: state.memberCollections.current,
                    honorary: action.payload,
                    alumni: state.memberCollections.alumni
                }
            };
        break;

        case 'UPDATE_ALUMNI_MEMBERS':
            return {
                ...state,
                memberCollections: {
                    current: state.memberCollections.current,
                    honorary: state.memberCollections.honorary,
                    alumni: action.payload
                }
            };
        break;

        case 'ADD_NEW_RECORD':
            return initialState;
        break;

        case 'EDIT_RECORD':
            return { 
                ...state, 
                editor: action.payload
            };
        break;

        case 'UPDATE_DATE_OF_BIRTH':
            let o = clone(state);
                o.editor.dateOfBirth = action.payload;
            return o;
        break;

        case 'UPDATE_ENROLLMENT_DATE':
            let obj = clone(state);
                obj.editor.enrollmentDate = action.payload;
            return obj;
        break;

        default:
            return state;
    }
}
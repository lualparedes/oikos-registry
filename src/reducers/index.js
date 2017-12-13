import { clone } from '../assets/scripts/utils';

const initialState = {
    global: {
        currentTable: 'Current members'
    },
    editor: {
        title: 'Add new member',
        name: '',
        status: '',
        carnet: '',
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

        case 'CHANGE_TABLE':
            return {
                global: {
                    currentTable: action.payload
                },
                ...state
            }
        break;

        default:
            return state;
    }
}
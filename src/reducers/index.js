import { clone } from '../assets/scripts/utils';

const initialState = {
    memberCollections: {
        current: [],
        honorary: [],
        alumni: []
    },
    currentRecordInEdition: null,
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
            return { 
                ...state, 
                editor: action.payload
            };
        break;

        case 'EDIT_RECORD':
            return { 
                ...state, 
                currentRecordInEdition: action.payload.currentRecordInEdition,
                editor: action.payload.editor
            };
        break;

        case 'UPDATE_EDITOR':
            let o = clone(state);
            switch(action.payload.key) {
                case 'name':
                    o.editor.name = action.payload.value;
                break;
                case 'status':
                    o.editor.status = action.payload.value;
                break;
                case 'card-number':
                    o.editor.cardNumber = action.payload.value;
                break;
                case 'id-number':
                    o.editor.idNumber = action.payload.value;
                break;
                case 'email':
                    o.editor.email = action.payload.value;
                break;
                case 'phone-number-home':
                    o.editor.phoneNumberHome = action.payload.value;
                break;
                case 'phone-number-mobile':
                    o.editor.phoneNumberMobile = action.payload.value;
                break;
                case 'major':
                    o.editor.major = action.payload.value;
                break;
                case 'address':
                    o.editor.address = action.payload.value;
                break;
                case 'sex':
                    o.editor.sex = action.payload.value;
                break;
                case 'type-of-blood':
                    o.editor.typeOfBlood = action.payload.value;
                break;
                case 'allergies':
                    o.editor.allergies = action.payload.value;
                break;
                case 'diseases':
                    o.editor.diseases = action.payload.value;
                break;
                case 'emergency-contact-1':
                    o.editor.emergencyContact1 = action.payload.value;
                break;
                case 'emergency-contact-2':
                    o.editor.emergencyContact2 = action.payload.value;
                break;
            }
            return o;
        break;

        // =====================================================================
        //                      🛠️ REFACTORING CANDIDATE 🛠️
        // =====================================================================
        // Can be incorporated with UPDATE_EDITOR
        case 'UPDATE_DATE_OF_BIRTH':
            let o1 = clone(state);
                o1.editor.dateOfBirth = action.payload;
            return o1;
        break;

        case 'UPDATE_ENROLLMENT_DATE':
            let o2 = clone(state);
                o2.editor.enrollmentDate = action.payload;
            return o2;
        break;
        // =====================================================================
        default:
            return state;
    }
}
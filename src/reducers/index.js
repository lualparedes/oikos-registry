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

        case 'ADD_NEW':
            return initialState;
        break;

        case 'EDIT_RECORD':
            return { 
                ...state, 
                editor: action.payload
            };
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
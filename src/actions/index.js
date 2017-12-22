import { findRecordId } from '../services/api.service';

export function updateLocalMemberCollections(collectionName, collection) {

    let type;

    switch(collectionName) {
        case 'honorary':
            type = 'UPDATE_HONORARY_MEMBERS';
        break;
        case 'alumni':
            type = 'UPDATE_ALUMNI_MEMBERS';
        break;
        default:
            type = 'UPDATE_CURRENT_MEMBERS';
    }

    return {
        type,
        payload: collection
    }
}

export function addNewRecord() {
    return {
        type: 'ADD_NEW_RECORD',
        payload: {
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
}

export function editRecord(e, store) {

    console.log(store.currentRecordInEdition);

    let record = e.target.closest('.main-table__row').children;
    let recordId = findRecordId(record[0].innerHTML, record[1].innerHTML, store);

    console.log(recordId);

    return {
        type: 'EDIT_RECORD',
        payload: {
            currentRecordInEdition: recordId,
            editor: {
                title:             record[0].innerHTML,
                name:              record[0].innerHTML,
                status:            record[1].innerHTML,
                cardNumber:        record[2].innerHTML,
                idNumber:          record[3].innerHTML,
                email:             record[4].innerHTML,
                phoneNumberHome:   record[5].innerHTML,
                phoneNumberMobile: record[6].innerHTML,
                major:             record[7].innerHTML,
                address:           record[8].innerHTML,
                sex:               record[9].innerHTML,
                dateOfBirth: {
                    day:   record[10].innerHTML.split('/')[0],
                    month: record[10].innerHTML.split('/')[1],
                    year:  record[10].innerHTML.split('/')[2]
                },
                typeOfBlood:       record[11].innerHTML,
                allergies:         record[12].innerHTML,
                diseases:          record[13].innerHTML,
                emergencyContact1: record[14].innerHTML,
                emergencyContact2: record[15].innerHTML,
                enrollmentDate: {
                    day:   record[16].innerHTML.split('/')[0],
                    month: record[16].innerHTML.split('/')[1],
                    year:  record[16].innerHTML.split('/')[2]
                }
            }
        }
    };
}

export function updateEditor(key, value) {
    return {
        type: 'UPDATE_EDITOR',
        payload: { key, value }
    }
}

export function updateDateOfBirth(newDateOfBirth) {
    return {
        type: 'UPDATE_DATE_OF_BIRTH',
        payload: newDateOfBirth
    }
}

export function updateEnrollmentDate(newEnrollmentDate) {
    return {
        type: 'UPDATE_ENROLLMENT_DATE',
        payload: newEnrollmentDate
    }
}
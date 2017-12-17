export function addNewRecord() {
    return {
        type: 'ADD_NEW_RECORD'
    };
}

export function editRecord(e) {

    let record = e.target.closest('.main-table__row').children;

    return {
        type: 'EDIT_RECORD',
        payload: {
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
    };
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
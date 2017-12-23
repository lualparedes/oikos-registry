import { show, hide } from './modals.service';
import { updateLocalMemberCollections } from '../actions';
import { g } from '../assets/scripts/utils';

export function getMemberCollection(collectionName, store) {

    let req = new XMLHttpRequest();
        req.open('GET', 'https://ancient-lake-42168.herokuapp.com/'+collectionName+'-members');
        //req.open('GET', 'http://localhost:8000/'+collectionName+'-members');
        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    store.dispatch(
                        updateLocalMemberCollections(collectionName, JSON.parse(req.responseText))
                    );
                }
                else {
                    console.log('There was a problem with the request.');
                }
            }
        };
        req.send();
}

function makeARequest(method, memberData, typeOfMember, memberId = '') {
    let req = new XMLHttpRequest();
        req.open(method, 'https://ancient-lake-42168.herokuapp.com/'+typeOfMember+'-members/'+memberId);
        //req.open(method, 'http://localhost:8000/'+typeOfMember+'-members/'+memberId);
    if (method !== 'DELETE') {
        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    }
        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    console.log('The database update was successful');
                    hide('editor');
                    // =========================================================
                    //               🛠️ REFACTORING CANDIDATE 🛠️
                    // =========================================================
                    // Make it async!!!!
                    window.location.reload();
                    // =========================================================
                }
                else {
                    console.log('There was a problem with the request.');
                }
            }
        };
    if (method !== 'DELETE') {
        req.send(JSON.stringify(memberData));
    }
    else {
        req.send();
    }
}

export function findRecordId(memberName, typeOfMember, store) {

    let collection;
    switch(typeOfMember) {
        case 'Honorary':
            collection = 'honorary';
        break;
        case 'Alum':
            collection = 'alumni';
        break;
        default:
            collection = 'current';
    }

    let memberIndex = store.getState().memberCollections[collection].indexOf(
        store.getState().memberCollections[collection].find(
            (memberObj) => memberObj.name === memberName
        )
    );

    return store.getState().memberCollections[collection][memberIndex]['_id'];
}

// @notes
// [1] 'active', 'passive', 'candidate', 'candidate-star'
export function createMember(memberData) {
    switch(memberData.status) {
        case 'Honorary':
            makeARequest('POST', memberData, 'honorary');
        break;
        case 'Alum':
            makeARequest('POST', memberData, 'alumni');
        break;
        default: // [1]
            makeARequest('POST', memberData, 'current');
    }    
}

// @notes
// [1] No change in status → it stays in the same collection
// [2] Current status belongs to current-members collection and new status also
//     belongs to the same collection → it stays in the same collection
export function updateMember(memberData, currentRecordInEdition) {

    if (
        (   // [1]
            memberData.status === currentRecordInEdition.originalStatus
        )
        ||
        (   // [2]
            (currentRecordInEdition.originalStatus === 'Candidate' ||
             currentRecordInEdition.originalStatus === 'Candidate*' ||
             currentRecordInEdition.originalStatus === 'Active' ||
             currentRecordInEdition.originalStatus === 'Passive')
            &&
            (memberData.status === 'Candidate' ||
             memberData.status === 'Candidate*' ||
             memberData.status === 'Active' ||
             memberData.status === 'Passive')
        )
    ) { 
        switch(currentRecordInEdition.originalStatus) {
            case 'Honorary':
                makeARequest('PUT', memberData, 'honorary', currentRecordInEdition.id);
            break;
            case 'Alum':
                makeARequest('PUT', memberData, 'alumni', currentRecordInEdition.id);
            break;
            default:
                makeARequest('PUT', memberData, 'current', currentRecordInEdition.id);
        }
    }
    else {
        deleteMember(memberData, currentRecordInEdition);
        createMember(memberData);
    }
    
}

export function deleteMember(memberData, currentRecordInEdition) {
    switch(currentRecordInEdition.originalStatus) {
        case 'Honorary':
            makeARequest('DELETE', memberData, 'honorary', currentRecordInEdition.id);
        break;
        case 'Alum':
            makeARequest('DELETE', memberData, 'alumni', currentRecordInEdition.id);
        break;
        default:
            makeARequest('DELETE', memberData, 'current', currentRecordInEdition.id);
    }
}

function convertStatus(statusValue) {
    switch(statusValue) {
        case 'active':
            return 'Active';
        break;
        case 'passive':
            return 'Passive';
        break;
        case 'candidate':
            return 'Candidate';
        break;
        case 'candidate-star':
            return 'Candidate*';
        break;
        case 'honorary':
            return 'Honorary';
        break;
        case 'alum':
            return 'Alum';
        break;
        case 'past-candidate':
            return 'Past candidate (deletes the entry)';
        break;
    }
}

export function save(store) {
    
    let atLeastItHasTheName = (g('#name').value === '') ? false : true;

    if (!atLeastItHasTheName) {
        show('modalWarn');
    }
    else {
        let memberData = {
            name: g('#name').value,
            status: convertStatus(g('#status').value),
            cardNumber: g('#card-number').value,
            idNumber: g('#id-number').value,
            email: g('#email').value,
            phoneNumberHome: g('#phone-number-home').value,
            phoneNumberMobile: g('#phone-number-mobile').value,
            major: g('#major').value,
            address: g('#address').value,
            sex: g('#sex').value.toUpperCase(),
            dateOfBirth: {
                day: g('#date-of-birth-day').value,
                month: g('#date-of-birth-month').value,
                year: g('#date-of-birth-year').value
            },
            typeOfBlood: g('#type-of-blood').value.toUpperCase(),
            allergies: g('#allergies').value,
            diseases: g('#diseases').value,
            emergencyContact1: g('#emergency-contact-1').value,
            emergencyContact2: g('#emergency-contact-2').value,
            enrollmentDate: {
                day: g('#enrollment-date-day').value,
                month: g('#enrollment-date-month').value,
                year: g('#enrollment-date-year').value
            }
        };
        // DB stuff
        switch(g('.editor-header__title').innerHTML) {
            case 'Add new member':
                if (g('#status').value !== 'past-candidate') {
                    createMember(memberData);
                }
            break;
            default:
                if (g('#status').value !== 'past-candidate') {
                    updateMember(memberData, store.getState().currentRecordInEdition);
                }
                else {
                    deleteMember(memberData, store.getState().currentRecordInEdition);
                }
        }
        // Cleaning the UI
        hide('editor');
        g('.editor-content').classList.remove('editor-content--active');
        g('.editor-footer').classList.remove('editor-footer--active');
    }
}
import { hide } from './modals.service';
import { updateLocalMemberCollections } from '../actions';

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
                    console.log(typeOfMember);
                    console.log(method);
                    console.log('The database update was successful');
                    hide('editor');
                    // =========================================================
                    //               🛠️ REFACTORING CANDIDATE 🛠️
                    // =========================================================
                    // Make it async!!!!
                    // window.location.reload();
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

export function updateMember(memberData, currentRecordInEdition) {
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
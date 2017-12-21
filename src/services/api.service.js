import { hide } from './modals.service';
import { updateLocalMemberCollections } from '../actions';

export function getMemberCollection(collectionName, store) {

    /*const members = ['current', 'honorary', 'alumni'];

    members.forEach((typeOfMember) => {
        let req = new XMLHttpRequest();
            req.open('GET', 'https://ancient-lake-42168.herokuapp.com/'+typeOfMember+'-members');
            req.onreadystatechange = () => {
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === 200) {
                        let o = {};
                            o[typeOfMember] = JSON.parse(req.responseText);
                        thisArg.setState(o);
                    }
                    else {
                        console.log('There was a problem with the request.');
                    }
                }
            };
            req.send();
    }); */

    let req = new XMLHttpRequest();
        req.open('GET', 'https://ancient-lake-42168.herokuapp.com/'+collectionName+'-members');
        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    store.dispatch(
                        updateLocalMemberCollections(collectionName, JSON.parse(req.responseText))
                    );                 
                    //console.log(JSON.parse(req.responseText));
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
        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
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
        req.send(JSON.stringify(memberData));
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

export function findRecordId(memberName, typeOfMember) {

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
    
    /*let memberIndex = thisArg.state[collection].indexOf(
        thisArg.state[collection].find(
            (memberObj) => memberObj.name === memberName
        )
    );*/

    //return thisArg.state[collection][memberIndex]._id;
    return 'ha';
}

export function updateMember(memberData, recordId) {
    
}

export function deleteMember(memberData, recordId) {
    // body...
}
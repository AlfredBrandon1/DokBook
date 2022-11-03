//id
import {v4 as uuidv4} from 'uuid'

const initialState = {
    allPatients: [
        {
            id:uuidv4().slice(0,6) ,lastName: 'Sparrow', firstName: 'Jack',gender: 'male' ,  age: 20 , birthdate: '1/2/1990', contactNo: 6390990909 , address: 'Baguio City',  
            country: 'Philippines', date: '01/02/2022', description: 'text-here', diagnosis: 'text-here',prescription: 'text-here',notes:'text-here'
        },
        {
            id:uuidv4().slice(0,6) ,lastName: 'Doe', firstName: 'Jane',gender: 'female' ,  age: 50 , birthdate: '', contactNo: 639012123 , address: 'La Trinidad',
            country:'USA', date: '03/02/2021', description: 'text-here', diagnosis: 'text-here',prescription: 'text-here',notes:'text-here'
        },
        {
            id:uuidv4().slice(0,6) ,lastName: 'Dalisay', firstName: 'Card',gender: 'male' ,  age: 40 , birthdate: '', contactNo: 6390232223 , address: 'Mars',
            country:'Philippines',date: '03/02/2021', description: 'text-here', diagnosis: 'text-here',prescription: 'text-here',notes:'text-here'
        },
        {
            id:uuidv4().slice(0,6) ,lastName: 'Man', firstName: 'Super',gender: 'male' ,  age: 300 , birthdate: '', contactNo: 63901212123 , address: 'Saturn',
            country:'Marvel',date: '03/02/2021', description: 'text-here', diagnosis: 'text-here',prescription: 'text-here',notes:'text-here'
        }
    ]
}

const reducer =  (state = initialState, action) =>{
    switch( action.type ){
        case 'ADD_PATIENT':
            let addPatient = {
                id: uuidv4().slice(0,6),
                lastName: action.payload.lastName,
                firstName: action.payload.firstName, 
                age: action.payload.age,
                gender: action.payload.gender, 
                contactNo : action.payload.contactNo, 
                address: action.payload.address,
                country: action.payload.country,
                birthdate: action.payload.birthdate,
            }
            return { ...state, allPatients: [ ...state.allPatients, addPatient ]};

/*             case 'ADD_RECORD':
                let addRecord = {
                    date:action.payload.date,
                    description:action.payload.description,
                    diagnosis:action.payload.diagnosis,
                    prescription:action.payload.prescription,
                    notes:action.payload.notes,
                }
            return { ...state, allPatients: [ ...state.allPatients, addRecord ]}; */

            default: 
            return state;
    }
}

export default reducer
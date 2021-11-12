let id = localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')).id
: ''

let firstName = localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')).firstName
: ''

let lastName = localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')).lastName
: ''

let token = localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')).token
: ''

let email = localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')).email
: ''

let idNumber = localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')).idNumber
: ''

let phoneNumber = localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')).phoneNumber
: ''

export const initialState = {
    id: '' || id,
    email: '' || email,
    firstName: '' || firstName,
    lastName: '' || lastName,
    token: '' || token,
    idNumber: '' || idNumber,
    phoneNumber: '' || phoneNumber,
    errorMessage: null,
}

export const AuthReducer = (initialState, action) => {
    switch(action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState
            }
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                id:action.payload.id,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                token: action.payload.token,
                idNumber: action.payload.idNumber,
                phoneNumber: action.payload.phoneNumber,
                
            }
        case "EDIT_SUCCESS":
            return {
                ...initialState,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                idNumber: action.payload.idNumber,
                phoneNumber: action.payload.phoneNumber,
                
            }
            case 'LOGOUT':
            return {
                ...initialState,
                firstName: '',
                lastName: '',
                email: '',
                token: '',
                idNumber: '',
                phoneNumber: '',
            }
        case 'LOGIN_ERROR':
            return {
                ...initialState
            }
        default:
            throw new Error(`unhandled action type : ${action.type}`)
    }
}
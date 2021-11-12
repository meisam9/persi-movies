const url = 'https://615210514a5f22001701d607.mockapi.io/persiMovies'


export async function loginUser(dispatch, loginpayload) {
    const requestOption = {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(loginpayload)
    }
    try {
        dispatch({type: 'REQUEST_LOGIN'})
        let response = await fetch(`${url}`,requestOption)
        let data = await response.json()

        if(data.email) {
            dispatch({type:'LOGIN_SUCCESS', payload: data})
            localStorage.setItem('user', JSON.stringify(data))
            return data
        }
        
        return
    }catch(error) {
        dispatch({type:'LOGIN_ERROR', payload:error})
        console.log(error)
    }
}
export async function editUser(dispatch, editpayload,id) {
    const requestOption = {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(editpayload)
    }
    try {
        dispatch({type: 'REQUEST_LOGIN'})
        let response = await fetch(`${url}/${id}`,requestOption)
        let data = await response.json()

        if(data.email) {
            dispatch({type:'EDIT_SUCCESS', payload: data})
            localStorage.setItem('user', JSON.stringify(data))
            return data
        }
        
        return
    }catch(error) {
        dispatch({type:'LOGIN_ERROR', payload:error})
        console.log(error)
    }
}
export async function deleteUser(dispatch,id) {
    const requestOption = {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
        
    }
    try {
        dispatch({type: 'REQUEST_LOGIN'})
        let response = await fetch(`${url}/${id}`,requestOption)
        let data = await response.json()

        if(data) {
            dispatch({type:'LOGOUT'})
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            return data
        }
        
        return
    }catch(error) {
        dispatch({type:'LOGIN_ERROR', payload:error})
        console.log(error)
    }
}

export async function logout(dispatch) {
    dispatch({type: 'LOGOUT'})
    localStorage.removeItem('user')
    localStorage.removeItem('token')
}
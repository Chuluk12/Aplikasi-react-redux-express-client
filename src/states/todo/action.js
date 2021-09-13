import axios from "axios"

export const getTodo = () => {
  const request = axios.get(`http://localhost:8000/todo`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  
  return(dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'GET_TODO',
        payload: response.data.data
      })
    })
  }
}

export const getTodoById = (id) => {                 
  const request = axios.get(`http://localhost:8000/todo/${id}`)

  return(dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'GET_TODO_BY_ID',
        payload: response.data.data
      })
    })
  }
}

export const addTodo = (todo) => {                       
  const request = axios.post(`http://localhost:8000/todo`, todo, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  return(dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'ADD_TODO',
        payload: response.data.data
      })
    })
    .catch(err => {
      alert("login ulang bro")
      localStorage.removeItem('isLogin')
      localStorage.removeItem('token')
    })
  }
}

export const updateTodo = (todo) => {             
  const request = axios.patch(`http://localhost:8000/todo`, todo, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  return(dispatch) => {
    request.then((response) => {
      alert(response.data.message)
      dispatch({
        type: 'UPDATE_TODO',
        payload: response.data.data
      })
    })
    .catch(err => {
      alert("login ulang bro")
      localStorage.removeItem('isLogin')
      localStorage.removeItem('token')
    })
  }
}

export const deleteTodo = (id) => {                    
  const request = axios.delete(`http://localhost:8000/todo/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  return(dispatch) => {
    request.then((response) => {
      alert(response.data.message)
      dispatch({
        type: 'DELETE_TODO',
        payload: {id}
      })
    })
    .catch(err => {
      alert("login ulang bro")
      localStorage.removeItem('isLogin')
      localStorage.removeItem('token')
    })
  }
}
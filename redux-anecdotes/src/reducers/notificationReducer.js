  const notificationAtStart = null
  
  const initialState = notificationAtStart

  var timeoutID = null

  export const setNotification = (content, time=0) => {
    return async dispatch => {
      dispatch ({
        type: 'SET_NOTIFICATION',
        data: {
          content: content,
        }
      })
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {  
        dispatch ({
          type: 'REMOVE_NOTIFICATION'
        })
      }, time*1000)
    }
  }

  export const removeNotification = () => {
    return {
      type: 'REMOVE_NOTIFICATION'
    }
  }
  
  const notificationReducer = (state = initialState, action) => {
    let changedNotification = null

    switch (action.type) {

    case 'SET_NOTIFICATION':
      changedNotification = action.data.content
      return changedNotification

    case 'REMOVE_NOTIFICATION':
      return changedNotification

    default: return state
    }
  }
  
  export default notificationReducer
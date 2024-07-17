import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()


//doesnt interact with DB, but simply keeps the local state
//  sync'd to the DB, which allows auto refreshing without a new API req
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS': 
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts:  [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default: 
            return state
    }
}

//wraps the children (<app />) 
    //which wraps all components, allowing every comp to access the context
export const WorkoutsContextProvider = ({ children }) => {
    //returns a state value, intiializes initial value for the state,
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })



    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}
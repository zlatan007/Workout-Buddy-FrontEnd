const { createContext, useReducer } = require("react");

export const WorkoutContext = createContext(null);

export const workoutReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUT':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter(item => item._id !== action.payload._id)
            }
        default:
            return state
    }
} 

const WorkoutContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })
    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutContextProvider
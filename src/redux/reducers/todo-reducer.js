import { ADD_TODO, DELETE_TODO } from "../actions/action-types"
// reducer takes two things state & action 

const initialState = []
//state represent current state manage by reducer
export default (state = initialState, action) => {  // action(payload, type)

    //using if   else if

    // if(action.type === ADD_TODO){
    //     //add todo
    // }else if (action.type === DELETE_TODO){
    //     //delete todo
    // }else if (action.type === UPDATE_TODO){
    //     //update todo
    // }
    // else{
    //     //return initial state
    // }



    // using switch case 

    switch (action.type) {
        case ADD_TODO:
            //add todo in state
            return [...state, action.payload]  //create a new array

        case DELETE_TODO:
            //delete todo
            const newState = state.filter((todo) => todo.id !== action.payload) 
            return newState

        // case UPDATE_TODO:
        //     //update todo
        //   const updateState =  state.map(todo => {
        //         if (todo.id == action.payload.todoId){
        //         todo.title = action.payload.todo.title
        //         todo.description = action.payload.todo.description
            
        //     }
        //      return todo
        //     })
        //     return updateState


        default:
            return state    //initial state
          
    }
}
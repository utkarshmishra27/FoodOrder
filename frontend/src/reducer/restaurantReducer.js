import { ALL_RESTAURANTS_REQUEST, ALL_RESTAURANTS_SUCCESS } from "../constants/restaurantConstant";

const initialState = {
    restaurant: [],
}

export const restaurantReducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_RESTAURANTS_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
                
            }
        case ALL_RESTAURANTS_SUCCESS:
            return{
                ...state,
                loading: false,
                count: action.payload.count,
                retaurants: action.payload,
            }
            

        default:
            return state;
    
            

    }
}
import {ActionType} from '../../action/action-types'
const initialState = {
    movies :[
        {
            name : 'thiri aung',
            description :'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contain',
        },
        {
            name : 'developer',
            description :'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contain',
        }
    ],
    movie :{},
}

export const movieReducer =(state = initialState,{type,payload}) =>{
    switch(type){
        case ActionType.FETCH_MOVIES:
            return {...initialState,movies:payload};
            
         case ActionType.SELECT_MOVIE :
            return {...initialState,movie:payload};
            default: return state;

    }
}
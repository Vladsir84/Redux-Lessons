import { GO_PREV, GO_NEXT } from './users.actions';

const initialState = {
    usersList: [
        {
            age: 21,
            name: 'Bob',
            id: 'id-0',
        },
        {
            age: 17,
            name: 'Tom',
            id: 'id-1',
        },
        {
            age: 18,
            name: 'Tad',
            id: 'id-2',
        },
        {
            age: 45,
            name: 'Sam',
            id: 'id-3',
        },
        
],

    currentPage: 0,

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GO_PREV:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            };


        case GO_NEXT: {

            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
        }


        default:
            return state;
    }
}

export default usersReducer;
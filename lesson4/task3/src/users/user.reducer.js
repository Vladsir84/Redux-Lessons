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
        // {
        //     age: 12,
        //     name: 'Gus',
        //     id: 'id-4',
        // },
        // {
        //     age: 60,
        //     name: 'Ozzy',
        //     id: 'id-5',
        // },
        // {
        //     age: 28,
        //     name: 'Dock',
        //     id: 'id-6',
        // },
        // {
        //     age: 49,
        //     name: 'Zak',
        //     id: 'id-7',
        // }


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
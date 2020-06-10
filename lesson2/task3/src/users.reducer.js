const initialState = {
    usersList: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                usersList: state.usersList.concat(action.userData)
            };

        case 'REMOVE':
            return {
                ...state,
                usersList: state.usersList.filter(el => el.id !== action.userId),
            };

        default:
            return state;

    };
};


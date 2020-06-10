const initialState = {
    userList: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                userList: state.userList.concat(action.userData)
            };

        case 'REMOVE':
            return {
                ...state,
                userList: state.userList.filter(el => el.id !== action.userId),
            };

        default:
            return state;

    };
};


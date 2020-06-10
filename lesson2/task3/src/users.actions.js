const ADD = 'ADD';
const REMOVE = 'REMOVE'

export const addUser = userData => {
    return {
        type: ADD,
        userData: userData,
    };
};

export const deleteUser = userId => {
    return {
        type: REMOVE,
        userId: userId,
    };
};






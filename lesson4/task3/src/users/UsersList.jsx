import React from 'react';
import { connect } from 'react-redux';
import User from './User'
import Pagination from './Pagination';
import * as userActions from './users.actions'


const UsersList = ({ users, goPrev, goNext, currentPage }) => {


    
    const itemsPerPage = 3;
    const start = currentPage * itemsPerPage;
    const usersList = users.slice(start, start + itemsPerPage);

    return (
        <div>
            <Pagination
                goPrev={goPrev}
                goNext={goNext}
                currentPage={currentPage}
                totalItems={users.length}
                itemsPerPage={itemsPerPage}
            />
            <ul className="users">
                {usersList.map(user => (
                    <User key={user.id} {...user} />
                ))}
            </ul>
        </div>
    );
}



const mapState = state => {
    return {
        users: state.usersList,
        currentPage: state.currentPage,
    }
};

const mapDispatch = {

    goPrev: userActions.goPrev,
    goNext: userActions.goNext,

};

const connector = connect(mapState, mapDispatch);
const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
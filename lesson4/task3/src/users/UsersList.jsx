import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User'
import Pagination from './Pagination';
import * as userActions from './users.actions'


class UsersList extends Component {
     
    render() {
        const { users, goPrev, goNext, currentPage } = this.props;
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
}


const mapState = state => {
    return {
        users: state.usersList,
        currentPage: state.currentPage,
    }
};

const mapDispatch = {

    goPrev: userActions.goPrevPage,
    goNext: userActions.goNextPage,

};

const connector = connect(mapState, mapDispatch);
const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
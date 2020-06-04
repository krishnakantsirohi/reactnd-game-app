import React, {Component} from "react";

class UserList extends Component{
    render() {
        const {users, showScores} = this.props;
        return(
            <ol className='contact-list'>
                {users.map(
                    (user) => (
                        <li key={user.username} className='contact-list-item'>
                            <div className='contact-details'>
                                <p>{user.firstName}</p>
                                <p>{user.lastName}</p>
                                {showScores&&<p>{user.numgames}</p>}
                            </div>
                            <button className='contact-remove'/>
                        </li>
                    )
                )}
            </ol>
        )
    };
}

export default UserList;
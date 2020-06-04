import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from "./CreateUser";
import UserList from './UserList';

class App extends Component {
    state = {
        users: [{
            firstName: 'Selena',
            lastName: 'Gomez',
            username: 'selgo',
            numgames: 0
        },{
            firstName: 'Britney',
            lastName: 'Spears',
            username: 'britse',
            numgames: 0
        }],
        showScores: true,
    };
    addData = user => {
        user.numgames = 0;
        this.setState(currentState => ({
                users: [...currentState.users, user],
            }));
    };

    hideScores = () => {
        this.setState(currentState => ({
            showScores: !this.state.showScores
        }));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <CreateUser onAddUser={this.addData} users={this.state.users}/>
                <label>
                    Show/Hide Scores
                    <label className='switch'>
                        <input type='checkbox' onClick={this.hideScores}/>
                        <span className='slider round'/>
                    </label>
                </label>
                <UserList users={this.state.users} showScores={this.state.showScores}/>
            </div>
        );
    }
}

export default App;

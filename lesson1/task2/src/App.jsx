import React from 'react';
import Header from './Header';
import { ThemeContext } from './themes-context';

class App extends React.Component {
    state = {
        userData:
        {
            name: 'Nikola Tesla',
            avatar_url: 'https://avatars3.githubusercontent.com/u10001',
        }
    };


    render() {
        return (

            <ThemeContext.Provider value={this.state.userData}>
                <div className="page">
                    <Header />
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default App;
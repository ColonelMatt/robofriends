import { render } from '@testing-library/react';
import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

const state = {
    
}


class App extends Component{
    render()
        {
            constructor()
            {
                super()
                this.state = {
                    robots: robots,
                    searchfield: ''
                }
            }
            return(
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox />
                    <CardList robots={robots} />
                </div>
                )
        }

}

    


export default App
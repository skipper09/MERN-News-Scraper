var React = require('react');
import { Search } from './Search.js';
import { Saved } from './Saved.js';

export class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h2 className='text-center'>New York Times Article Scrubber<br/><small>My ex is a piece of shit</small></h2>
                    </div>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className="col">
                            <Search />
                        </div>

                    </div>
                    <div className='row'>
                        <div className="col">
                            <Saved />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
var React = require('react');

export class Search extends React.Component {
    render() {
        return (
            <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Search Panel</h3>
                </div>
                <div className="panel-body">
                    Panel content
            </div>
            </div>
            <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Results Panel</h3>
            </div>
            <div className="panel-body">
                Panel content
        </div>
        </div>
            </div>
        )
    }
}
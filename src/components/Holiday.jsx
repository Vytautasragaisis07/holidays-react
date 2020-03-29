import React, {Component} from 'react';

class Holiday extends Component {
    constructor(props) {
        super(props);
        this.state = {holiday: {}};
    }

    componentDidMount() {
        fetch(`http://skelbimai.test/api/holiday/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(
                data => {
                    this.setState({
                        holiday: data
                    })
                })
    }

    render() {
        return (
            <>
            </>
        );
    }
}

export default Holiday;

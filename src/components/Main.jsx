import React, {Component} from 'react';
import Holidays from "./Holidays";
import {Link} from "react-router-dom";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            allHolidays: []
        };
    }

    componentDidMount(){
        fetch(`http://skelbimai.test/api/allHolidays`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        allHolidays: data
                    }, )
                })
    }
    render(){

        return(
            <main>
                <div className="card-body">
                    <Holidays holidays = {this.state.allHolidays}/>
                    <div className="text-center">
                        <div className="btn btn-primary btn-danger"><Link to="/newholiday" type="submit">Pridėti</Link></div>
                    </div>
                </div>
            </main>
        );

    }

}
export default Main;
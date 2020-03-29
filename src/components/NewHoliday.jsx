import React, {Component} from "react";
import axios from 'axios';

class NewHoliday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            title: '',
            description: ''
        };
        this.handleTitle = this.handleTitle.bind(this);
        this.handleLastDescription = this.handleLastDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const db = new FormData();
        db.append('img',  this.state.img);
        db.append('title', this.state.title);
        db.append('description', this.state.description);
        axios.post('http://skelbimai.test/api/store-holiday', db)
            .then(response => {
                this.props.history.push('/', { some: 'state' })
            });
    };
    handleTitle(event) {
        this.setState({title: event.target.value});
    }
    handleLastDescription(event) {
        this.setState({description: event.target.value});
    }
    fileSelectedHandler = event => {
        this.setState({
            img: event.target.files[0]
        })
    };

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-7 mb-5">
                    <div className="text-center">
                        <h3 className="mb-4 text-black newholiday">
                            Pridėti naują įrašą</h3>
                    </div>
                    <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">
                                    Pavadinimas</label>
                                <input type="text" id="title" value={this.state.title}
                                       onChange={this.handleTitle}
                                       name="title" className="form-control"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">
                                    Aprašymas</label>
                                <input type="text" id="title" value={this.state.description}
                                       onChange={this.handleLastDescription} name="title"
                                       className="form-control"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">Prideti paveiksleli</label>
                                <input type="file" id="img" onChange={this.fileSelectedHandler} name="img"
                                       className="form-control"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <div className="text-center">
                                <input type="submit" value="Pridėti"
                                       className="btn btn-primary btn-danger"/>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewHoliday;
import React from "react";

function Holidays(props) {
    const holidays = props.holidays.map(holiday => {
        return(
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={"http://skelbimai.test/storage/" + holiday.img}/></a>

                    <div className="card-body">
                        <h4 className="card-title">
                            {holiday.title}
                        </h4>
                        <p className="card-text">{holiday.description}</p>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div className="row">
            {holidays}
        </div>
    );
}

export default Holidays;
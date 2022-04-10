import React from 'react';



function Pictures(props) {
    return (
        <div className='col-md-4 col-sm-6'>
            <div className="card">
                <div className="card-header">
                    <img style={{ maxWidth: '100%' }} src={props.img} alt={`Icon of `} />
                </div>
                <div className='card-body'
                    style={{ backgroundColor: props.website ? 'white' : 'red' }}>
                    <p>{props.name}</p>
                    <p>{props.work}</p>
                    <p>{props.phone}</p>
                    <p> {props.email ? "" : 'there is no email'}
                        {props.email}</p>
                    <p>{props.website}</p>
                </div>
            </div>

        </div>
    );
}

export default Pictures;

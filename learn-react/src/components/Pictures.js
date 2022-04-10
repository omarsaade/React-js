import React from 'react';



function Pictures(props) {
    return (

        <div className='col-md4-4 col-sm-6'>
            <div className="card">
                <div className="card-header">
                    <img style={{ maxWidth: '100%' }} src={props.p.img} />
                </div>

                <div className='card-body' style={{ backgroundColor: props.p.website ? 'white' : 'red' }}>
                    <p>{props.p.name}</p>
                    <p>{props.p.work}</p>
                    <p>{props.p.phone}</p>
                    <p>{props.p.email}</p>
                    <p >{props.p.website}</p>
                </div>
            </div>

        </div>
    );
}

export default Pictures;

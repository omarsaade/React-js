//class component with state


import React, { Component } from 'react';



class Pictures extends Component {
    render() {
        return (
            <div className='col-md-4 col-sm-6'>
                <div className="card">
                    <div className="card-header">
                        <img style={{ maxWidth: '100%' }} src={this.props.img} alt={`Icon of `} />
                    </div>
                    <div className='card-body'
                        style={{ backgroundColor: this.props.website ? 'white' : 'red' }}>
                        <p>{this.props.name}</p>
                        <p>{this.props.work}</p>
                        <p>{this.props.phone}</p>
                        <p> {this.props.email ? "" : 'there is no email'}
                            {this.props.email}</p>
                        <p>{this.props.website}</p>
                    </div>
                </div>

            </div>


        );
    }
}

export default Pictures;












////functional component with props


// import React from 'react';



// function Pictures(props) {
//     return (
//         <div className='col-md-4 col-sm-6'>
//             <div className="card">
//                 <div className="card-header">
//                     <img style={{ maxWidth: '100%' }} src={props.img} alt={`Icon of `} />
//                 </div>
//                 <div className='card-body'
//                     style={{ backgroundColor: props.website ? 'white' : 'red' }}>
//                     <p>{props.name}</p>
//                     <p>{props.work}</p>
//                     <p>{props.phone}</p>
//                     <p> {props.email ? "" : 'there is no email'}
//                         {props.email}</p>
//                     <p>{props.website}</p>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default Pictures;

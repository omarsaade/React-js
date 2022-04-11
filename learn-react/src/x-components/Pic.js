//class component with state

import React, { Component } from 'react';
import Pictures from './Pictures';
import Info from './Info';



class Pic extends Component {
    constructor() {
        super()
        this.state = { Info: Info }
        // this.state = {
        // info: [
        //     {
        //         id: 1,
        //         img: 'https://picsum.photos/60',
        //         name: 'omarz',
        //         work: 'web designer',
        //         phone: '+49 123456',
        //         email: 'omarz@gmail.com'
        //     },
        //     {
        //         id: 2,
        //         img: 'https://picsum.photos/61',
        //         name: 'omarz',
        //         work: 'web designer',
        //         phone: '+49 123456',
        //         website: "www.space.com"

        //     },
        //     {
        //         id: 3,
        //         img: 'https://picsum.photos/62',
        //         name: 'omarz',
        //         work: 'web designer',
        //         phone: '+49 123456',
        //         email: 'omarz@gmail.com',
        //         website: 'www.lol.com'

        //     },
        //     {
        //         id: 4,
        //         img: 'https://picsum.photos/63',
        //         name: 'omarz',
        //         work: 'web designer',
        //         phone: '+49 123456',
        //         email: 'omarz@gmail.com'

        //     }

        // ]
        // }

    }


    mapping(x) {
        const members = x.map(member => <Pictures
            key={member.id}
            img={member.img}
            name={member.name}
            work={member.work}
            phone={member.phone}
            email={member.email}
            website={member.website}
            member={member}
        />
        );
        return members;
    }


    render() {
        return (
            <div className="row" >
                {this.mapping(this.state.Info)}
                {/* {this.mapping(this.state.info)} */}

            </div>
        )
    }

}

export default Pic;
















////functional component with props

// import React from 'react';
// import Pictures from './Pictures';



// function Pic() {

//     const info = [
//         {
//             id: 1,
//             img: 'https://picsum.photos/60',
//             name: 'omarz',
//             work: 'web designer',
//             phone: '+49 123456',
//             email: 'omarz@gmail.com'
//         },
//         {
//             id: 2,
//             img: 'https://picsum.photos/61',
//             name: 'omarz',
//             work: 'web designer',
//             phone: '+49 123456',
//             website: "www.space.com"

//         },
//         {
//             id: 3,
//             img: 'https://picsum.photos/62',
//             name: 'omarz',
//             work: 'web designer',
//             phone: '+49 123456',
//             email: 'omarz@gmail.com',
//             website: 'www.lol.com'

//         },
//         {
//             id: 4,
//             img: 'https://picsum.photos/63',
//             name: 'omarz',
//             work: 'web designer',
//             phone: '+49 123456',
//             email: 'omarz@gmail.com'

//         }

//     ]


//     const members = info.map(member => <Pictures
//         key={member.id}
//         img={member.img}
//         name={member.name}
//         work={member.work}
//         phone={member.phone}
//         email={member.email}
//         website={member.website}
//         member={member}
//     />
//     );

//     return (
//         <div className="row">
//             {members}
//         </div>
//     )
// }

// export default Pic;

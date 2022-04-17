
//class component with state

import React, { Component } from 'react';
import Pictures from './Pictures';
import Info from './Info';



class Pic extends Component {
    //kell shi yuktab tahet el class mubashar
    constructor() {
        //hon fina n3aref li badna yeh ..in ken counter aw array..kelshi
        super()
        this.state = {
            Info: Info,
            members: [],
            counter: 0,
        }
        //darure nerbot el function li mnenshe2a men 5ilel el bind
        this.clickEvent = this.clickEvent.bind(this)

    }



    // clickEvent() {

    //     console.log(Info);
    //     // newArray.push(..);
    // }

    //lezem na3mul array jdide hye fadye..
    //bykun el page fadye w kell ma fa2asna 3al click btzid
    // member jdide 3al array el jdide w bi tem 3arda bel page
    //Note:aya method bet3arfa hon ben constructor and render
    //lezem tenrabattttttt bel constructorrrrrrrrrrrr


    //bas tef2os 3a click shu bisir? iza ken el ra2em asgar men 3adad el
    //element li bel array bet2ale3

    clickEvent() {
        if (this.state.counter < this.state.Info.length) {
            //bta3mul push lal first element bel new array
            this.state.members.push(this.state.Info[this.state.counter]);
            //btjaded el counter/btzido 1
            this.setState(function (prevState) {
                return { counter: prevState.counter + 1 }
            });
            //bta3mul map lal mawjud bel array member w btarej3nla yeh m7afaz bi shi
            //esmo array esma newMembers
            this.newMembers = this.state.members.map(member => {
                return <Pictures
                    key={member.id}
                    img={member.img}
                    name={member.name}
                    work={member.work}
                    phone={member.phone}
                    email={member.email}
                    website={member.website}
                    member={member}
                />
            })
        }

    }





    //to print ererything

    render() {
        return (
            <div className="row" >
                <button className='btn btn-primary btn-block' onClick={this.clickEvent} >Click ME!</button>
                {/* bt3ayetlo */}
                {this.newMembers}

            </div>
        )
    }

}

export default Pic;





































//class component with state

// import React, { Component } from 'react';
// import Pictures from './Pictures';
// import Info from './Info';


// let i = 0;
// const m = [];



// class Pic extends Component {


//     //kell shi yuktab tahet el class mubashar
//     constructor() {

//         super();

//         this.state = { Info: m }

// // muhem deyman na3mul rabet la aya method men 5ilel el bind

//         this.clickHandler = this.clickHandler.bind(this);



//     }






//     clickHandler() {
//         m.push(Info[i]);
//         i++;
//         this.setState({ Info: m })

//     }



//     render() {
//         return (
//             <div className="row" >
//                 <button className='btn btn-primary btn-block' onClick={this.clickHandler} >Click ME!</button>
//                 {this.state.Info.map(home => <Pictures
//                     key={home.id}
//                     img={home.img}
//                     name={home.name}
//                     work={home.work}
//                     phone={home.phone}
//                     email={home.email}
//                     website={home.website}
//                     home={home}
//                 />)}


//             </div>
//         )
//     }

// }

// export default Pic;























// //class component with state

// import React, { Component } from 'react';
// import Pictures from './Pictures';
// import Info from './Info';



// class Pic extends Component {
//     //kell shi yuktab tahet el class mubashar
//     constructor() {
//         super()
//         this.state = { Info: Info }
//         // this.state = {
//         // info: [
//         //     {
//         //         id: 1,
//         //         img: 'https://picsum.photos/60',
//         //         name: 'omarz',
//         //         work: 'web designer',
//         //         phone: '+49 123456',
//         //         email: 'omarz@gmail.com'
//         //     },...// ]
//         // }

//         //lezem tet3araf el array hon

//     }



//     // clickEvent() {
//     //     console.log(Info);
//     //     // newArray.push(..);
//     // }

//     //lezem na3mul array jdide hye fadye..
//     //bykun el page fadye w kell ma fa2asna 3al click btzid
//     // member jdide 3al array el jdide w bi tem 3arda bel page





//     //function
//     mapping(x) {
//         const members = x.map(member => <Pictures
//             key={member.id}
//             img={member.img}
//             name={member.name}
//             work={member.work}
//             phone={member.phone}
//             email={member.email}
//             website={member.website}
//             member={member}
//         />
//         );
//         return members;
//     }


//     render() {
//         return (
//             <div className="row" >
//                 <button className='btn btn-primary btn-block' onClick={this.clickEvent} >Click ME!</button>
//                 {this.mapping(this.state.Info)}
//                 {/* {this.mapping(this.state.info)} */}

//             </div>
//         )
//     }

// }

// export default Pic;





























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

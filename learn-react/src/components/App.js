import React, { Component } from "react";


class App extends Component {



    //meth1
    constructor() {
        super()
        this.state = { answer: 'Yes' }
    }




    //meth2
    render() {
        return (
            <div>
                <h1>Do you love me{this.state.answer}</h1>
            </div>
        )
    }
}






export default App;


































// import React, { Component } from "react";
// import File from "./File";


// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <File name="ali" name2="samad" />
//                 <File name="aly" name2="samadi" />
//                 <File name="alo" name2="samado" />
//             </div>
//         )
//     }
// }


// export default App;








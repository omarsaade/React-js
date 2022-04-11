import React from 'react';


function Header() {
    const client = "Designer";
    // const title_designer = "Design ";
    // const title_programmer = "Programming ";
    const title = {
        designer: "Design",
        programmer: "Programming"
    }

    // if (client === "Designer") {
    //     title = "Design is my life";
    // } else {
    //     title = "Programming is my life";
    // }
    const info = {
        name: "Mike",
        nick: "Sports"
    }



    return (
        // jsx {javascript} jsx
        <div className="navbar bg-primary text-white">
            {/* Hello {info.name + " " + info.nick}  */}
            Hello {`${info.name} ${info.nick}`}
            <h1>
                {client === "Designer" ? title.designer : title.programmer}
                is my life.
            </h1>
        </div>
    );
}

export default Header; 
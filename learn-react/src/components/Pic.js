import React from 'react';
import Pictures from './Pictures';



function Pic() {
    return (
        <div className='row'>
            <Pictures p={{
                img: 'https://picsum.photos/60',
                name: 'omarz',
                work: 'web designer',
                phone: '+49 123456',
                email: 'omarz@gmail.com',
            }} />
            <Pictures p={{
                img: 'https://picsum.photos/60',
                name: 'omarz',
                work: 'web designer',
                phone: '+49 123456',
                email: 'omarz@gmail.com',
                website: "www.space.com",
            }} />
            <Pictures p={{
                img: 'https://picsum.photos/60',
                name: 'omarz',
                work: 'web designer',
                phone: '+49 123456',
                email: 'omarz@gmail.com',
                website: "www.lol.com",
            }} />
            <Pictures p={{
                img: 'https://picsum.photos/60',
                name: 'omarz',
                work: 'web designer',
                phone: '+49 123456',
                email: 'omarz@gmail.com',
            }} />

        </div>
    )
}

export default Pic;
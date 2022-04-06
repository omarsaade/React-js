import React from 'react';

function Text() {
    return (
        // <p>Grapic and web design are far more than a job</p>
        <div>
            <form className='form-check '>
                <label>
                    <input type="checkbox" name="name" />
                    Facebook
                </label><br></br>
                <label>
                    <input type="checkbox" name="name" />
                    Youtube
                </label><br></br>
                <label>
                    <input type="checkbox" name="name" />
                    Instagram
                </label><br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Text;
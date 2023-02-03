import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
            <h4>Contact Us</h4>
            <form action="">
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Abc'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Abc@xyz.com'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Tell us about you query...'/>
                </div>
                <button type="submit">send</button>
            </form>
            </main>
        </div>
    )
}

export default Contact

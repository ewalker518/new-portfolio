import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Invalid email address');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section id="contact-info" class="contact">
            <div>
                <h2 class="section-title primary-border">Contact</h2>
            </div>
            <div>
                <ul>
                    <li>
                        (801) 540-7241
                    </li>
                    <li>
                        <a href="mailto:ewalkertbone@gmail.com">ewalkertbone@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/eric-walker-380344213/">Linkdin</a>
                    </li>
                    <li>
                        <a href="https://github.com/ewalker518">Github</a>
                    </li>
                </ul>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="contact-submit" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact
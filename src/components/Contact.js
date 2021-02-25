import React, { useState } from 'react';
import validator from 'validator';
import AccessibleHeading from './AccessibleHeading';

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

const Contact = ({ headingStyle }) => {
    const [buttonText, setButtonText] = useState('Send');
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [ariaMessage, setAriaMessage] = useState('');
    const [missingInputs, setMissingInputs] = useState({});

    const sendMail = e => {
        e.preventDefault();
        setMissingInputs({});
        const { email, message, name } = formFields;
        if (!name.trim()) {
            setMissingInputs({ name: true });
            ariaMessage('Name is not valid.');
            return;
        }
        if (!email.trim() || !validator.isEmail(email)) {
            setMissingInputs({ email: true });
            ariaMessage('Email is not valid.');
            return;
            return;
        }
        if (!message.trim()) {
            setMissingInputs({ message: true });
            ariaMessage('Message is not valid.');
            return;
        }

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formFields }),
        })
            .then(onSubmitSucces)
            .catch(onSubmitError);

        function onSubmitSucces() {
            setButtonText('Thank You!');
            setAriaMessage('Message received! Thank you.');
            restoreButtonText();
        }

        function onSubmitError() {
            setButtonText("Can't reach the server!");
            setAriaMessage('Something went wrong. It is not your fault.');
            restoreButtonText();
        }

        function ariaMessage(msg) {
            setAriaMessage(msg);
            setTimeout(() => {
                setAriaMessage('');
            }, 3000);
        }

        function restoreButtonText() {
            setTimeout(() => {
                setButtonText('Send');
                setFormFields({
                    message: '',
                    email: '',
                    name: '',
                });
            }, 2000);
        }
    };

    return (
        <>
            <AccessibleHeading
                targetId="navigation"
                level="2"
                className={`font-semibold mb-2 text-2xl ${headingStyle}`}
            >
                Contact Us
            </AccessibleHeading>
            <form onSubmit={sendMail}>
                <input
                    name="name"
                    aria-label="Name"
                    type="text"
                    autocomplete="false"
                    aria-autocomplete="false"
                    className={`w-full my-2 py-3 px-2 rounded border-2 border-transparent ${
                        missingInputs.name ? 'border-red-400' : ''
                    }`}
                    value={formFields.name}
                    placeholder="Your name..."
                    onChange={e =>
                        setFormFields({
                            ...formFields,
                            [e.target.name]: e.target.value,
                        })
                    }
                />
                <input
                    aria-label="Email"
                    name="email"
                    type="text"
                    autocomplete="false"
                    aria-autocomplete="false"
                    className={`w-full my-2 py-3 px-2 rounded border-2 border-transparent ${
                        missingInputs.email ? 'border-red-400' : ''
                    }`}
                    value={formFields.email}
                    placeholder="Your e-mail..."
                    onChange={e =>
                        setFormFields({
                            ...formFields,
                            [e.target.name]: e.target.value,
                        })
                    }
                />
                <textarea
                    autocomplete="false"
                    aria-autocomplete="false"
                    aria-label="message"
                    name="message"
                    placeholder="Your message..."
                    value={formFields.message}
                    onChange={e =>
                        setFormFields({
                            ...formFields,
                            [e.target.name]: e.target.value,
                        })
                    }
                    className={`w-full my-2 py-3 px-2 rounded h-40 border-2 border-transparent ${
                        missingInputs.message ? 'border-red-400' : ''
                    }`}
                ></textarea>
                <button
                    type="submit"
                    data-testid="btn"
                    className="mt-4 bg-primary rounded-lg shadow-md mx-auto px-8 py-2 text-white outline-none"
                >
                    {buttonText}
                </button>
                <div
                    className="sr-only"
                    aria-live="assertive"
                    aria-relevant="additions"
                    aria-atomic="true"
                >
                    {ariaMessage ? ariaMessage : ''}
                </div>
            </form>
        </>
    );
};

export default Contact;

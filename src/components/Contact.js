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
    const [missingInputs, setMissingInputs] = useState({});

    const sendMail = e => {
        e.preventDefault();
        setMissingInputs({});
        const { email, message, name } = formFields;
        if (!name.trim()) {
            setMissingInputs({ name: true });
            return;
        }
        if (!email.trim() || !validator.isEmail(email)) {
            setMissingInputs({ email: true });
            return;
        }
        if (!message.trim()) {
            setMissingInputs({ message: true });
            return;
        }

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formFields }),
        })
            .then(response => console.log('Form Submitted', response))
            .catch(console.error);

        setButtonText('Thank You!');

        setTimeout(() => {
            setButtonText('Send');
            setFormFields({
                message: '',
                email: '',
                name: '',
            });
        }, 2000);
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
                    type="text"
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
                    name="email"
                    type="text"
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
                    className="mt-4 bg-primary rounded-lg shadow-md mx-auto px-8 py-2 text-white outline-none"
                >
                    {buttonText}
                </button>
            </form>
        </>
    );
};

export default Contact;

import React from 'react';
import { Link } from 'gatsby';

export default function NotFound() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-75 bg-black flex justify-center items-center">
            <div className="rounded bg-white py-8 px-12 max-w-xl text-center">
                <p className="mb-8 text-2xl">
                    This page couldn't be found! <br />
                    Get back the main page, please.
                </p>

                <Link className="text-primary text-xl hover:underline" to="/">
                    Take me back to the paradise city where the grass is green
                    and the girls are pretty
                </Link>
            </div>
        </div>
    );
}

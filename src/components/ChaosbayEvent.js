import React from 'react';
import DateTime from 'luxon/src/datetime.js';

const ChaosbayEvent = ({ event, eventsFilter }) => {
    return (
        <li className="flex flex-col lg:flex-row justify-between items-center w-full border-2 border-color-primary px-4 py-4 my-6">
            <div>
                <p className="text-gray-900 lg:text-white lg:tracking-wider font-light">
                    {DateTime.fromISO(event.datetime).toLocaleString({
                        weekday: 'short',
                        month: 'short',
                        day: '2-digit',
                        locale: 'en-US',
                    })}
                </p>
                <h3 className="text-gray-900 font-semibold lg:font-normal text-xl lg:text-white lg:text-lg tracking-tight mb-4 lg:mb-0">
                    {event.title
                        ? event.title + ', ' + event.venue.country
                        : `${event.venue.name}, ${event.venue.city}`}
                </h3>
            </div>
            <a
                href={event.url}
                className="w-full flex-shrink-0 lg:w-auto text-center bg-primary text-white px-6 py-3 hover:bg-transparent hover:text-primary hover:border-color-primary border-2 border-transparent transition duration-300 font-medium tracking-wider"
            >
                {eventsFilter === 'upcoming' ? 'Get Tickets' : 'I Was There'}
            </a>
        </li>
    );
};

export default ChaosbayEvent;

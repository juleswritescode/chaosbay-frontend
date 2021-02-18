import React, { useEffect, useState } from 'react';
import { SiBandsintown } from 'react-icons/si';

import ChaosbayEvent from './ChaosbayEvent';
import Divider from './Divider';
import Loading from './Loading';
import { onKey } from '../utils/onKey';

let upcomingEventCache = [];
let pastEventCache = [];
let eventFilterCache = '';

const Dates = ({ headingStyle, linkStyle }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [eventsFilter, setEventsFilter] = useState(
        eventFilterCache || 'upcoming'
    );

    useEffect(() => {
        if (
            (eventsFilter == 'upcoming' && upcomingEventCache.length == 0) ||
            (eventsFilter == 'past' && pastEventCache.length == 0)
        ) {
            setLoading(true);
            fetch(
                `https://rest.bandsintown.com/v4/artists/chaosbay/events?app_id=${process.env.GATSBY_BANDS_API_KEY}&date=${eventsFilter}`
            )
                .then(res => res.json())
                .then(events => {
                    setLoading(false);
                    if (eventsFilter == 'upcoming') {
                        upcomingEventCache = events;
                    } else if (eventsFilter == 'past') {
                        pastEventCache = events;
                    }

                    setEvents(events);
                    eventFilterCache = eventsFilter;
                })
                .catch(console.error);
        } else {
            setLoading(false);
            setEvents(
                eventsFilter == 'upcoming' ? upcomingEventCache : pastEventCache
            );
        }
    }, [eventsFilter]);

    return (
        <aside className="w-full">
            <h3
                className={
                    'text-white text-center fixed top-0 left-0 p-4' +
                    ' ' +
                    linkStyle
                }
            >
                <span
                    className={`
                            ${eventsFilter === 'upcoming' && 'text-primary'}
                            cursor-pointer hover:text-primary`}
                    onClick={() => setEventsFilter('upcoming')}
                    onKeyDown={onKey('Enter', setEventsFilter, 'upcoming')}
                    role="button"
                >
                    {'Upcoming'}
                </span>
                <span className="mx-2">|</span>
                <span
                    className={`
                            ${eventsFilter === 'past' && 'text-primary'}
                            cursor-pointer hover:text-primary`}
                    onClick={() => setEventsFilter('past')}
                    onKeyDown={onKey('Enter', setEventsFilter, 'past')}
                    role="button"
                >
                    {'Past'}
                </span>
            </h3>
            <h3 className={`font-semibold text-xl ${headingStyle}`}>
                Tour Dates
            </h3>
            <Divider />
            {loading ? (
                <Loading />
            ) : events && events.length < 0 ? (
                <h3 className="text-white text-center">
                    There are currently no events scheduled.
                </h3>
            ) : (
                events.map(event => (
                    <ChaosbayEvent
                        key={event.id}
                        event={event}
                        eventsFilter={eventsFilter}
                    />
                ))
            )}
            <Divider />
            <div className="my-4 lg:flex justify-between w-full">
                <a
                    className="text-center w-full lg:w-auto inline-block text-primary px-6 py-3 hover:text-white border-color-primary border-2 transition duration-300 uppercase"
                    href="https://www.bandsintown.com/a/2470074-chaosbay?affil_code=js_1729869.site123.me&app_id=js_1729869.site123.me&came_from=242&trigger=play_my_city&utm_campaign=play_my_city&utm_medium=web&utm_source=widget"
                >
                    <span className="hidden lg:inline-block">Should we</span>{' '}
                    Play in your city?
                </a>
                <div className="px-4 mt-8 lg:mt-0">
                    <SiBandsintown className="text-gray-800 lg:text-gray-300 opacity-75 w-8 h-8" />
                </div>
            </div>
        </aside>
    );
};

export default Dates;

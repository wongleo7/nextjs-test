import React, { useState } from 'react';
import getWorldTime from '../factory/httpCalls'
import moment from 'moment';
const dateTimeFormat = "YYYY-MM-DD HH:mm:ss";

export default function getTimeButton() {
    const [currentTimeObject, setCurrentTimeObject] = useState([]);

    let getTime = async () => {
        let now = await getWorldTime();
        let currentTimes = [...currentTimeObject];
        currentTimes.push(now);
        setCurrentTimeObject(currentTimes);
    }

    return (
        <>
            <button onClick={getTime}>
                Get Current Time
            </button>
            <section className="timeBoxes">
                {currentTimeObject &&
                    currentTimeObject.map((times, i) => (
                        <p key={i} className="timeBox">
                            {moment(times.datetime).format(dateTimeFormat)}
                        </p>
                    )
                )}
            </section>
            <style jsx>{`
                .timeBoxes{
                    display: flex;
                    flex-wrap: wrap;
                }
                .timeBox{
                    width: 15rem;
                }
                .timeBox:last-child{
                    color: red;
                }
            `}</style>
        </>
    )
}
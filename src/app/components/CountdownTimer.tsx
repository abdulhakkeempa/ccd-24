"use client";

import {useEffect, useState} from "react";

const endDate = new Date("2024-10-05T22:00:00");

interface NumberProps {
  count: number;
  label: string;
}

function Number({count, label}: NumberProps) {
    const [tens, setTens] = useState(Math.floor(count / 10));
    const [ones, setOnes] = useState(count % 10);

    useEffect(() => {
        setTens(Math.floor(count / 10));
        setOnes(count % 10);
    }, [count]);

    return (
        <div className="text-center">
            <div className="digit-container">
                <div className="digit">
                    <span className="digit-value">{tens}</span>
                </div>
                <div className="digit">
                    <span className="digit-value">{ones}</span>
                </div>
            </div>
            <p className="text-white font-bold capitalize">{label}</p>
        </div>
    );
}

export default function Countdown() {
    const [date, setDate] = useState({
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
    });

    useEffect(() => {
        const int = setInterval(() => {
            const diff = endDate.getTime() - new Date().getTime();
            const timeLeft = {
                day: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hour: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minute: Math.floor((diff / (1000 * 60)) % 60),
                second: Math.floor((diff / 1000) % 60),
            };

            setDate(timeLeft);
        }, 1000);

        return () => clearInterval(int);
    }, []);

    return (
      <div className="flex flex-col gap-4 item-center">
        <div className="flex item-center justify-center">
            <h2 className="text-white text-xl text-center">Registration closes in</h2>
        </div>
        <div className="clock w-100 my-5 text-white flex justify-center space-x-0 sm:space-x-6">
            <Number count={date.day} label={"days"}/>
            <Number count={date.hour} label={"hours"}/>
            <Number count={date.minute} label={"minutes"}/>
            <Number count={date.second} label={"seconds"}/>
        </div>

      </div>
    );
}

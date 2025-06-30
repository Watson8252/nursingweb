"use client";
import {useEffect, useState} from "react";

type cardProps = {
    question: string;
    options: string[];
    answer: string;
    handleNextAction: () => void;
}

export default function Card({question, options, answer, handleNextAction}: cardProps) {
    const [selected, setSelected] = useState<string | null>(null);

    const handleClick = (option: string) => {
        if (selected === null) {
            setSelected(option);
        }
    };

    useEffect(() => {
        setSelected(null);
    }, [question]);

    return (
        <div>
            <div>
                <h1>Q: {question}</h1>
            </div>
            <div>
                <ul>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleClick(option)}
                            style={{
                                cursor: selected === null ? "pointer" : "default",
                                color:
                                    selected === null
                                        ? "black"
                                        : selected === option
                                            ? option === answer
                                                ? "green"
                                                : "red"
                                            : "black",
                                fontWeight: selected === option ? "bold" : "normal"
                            }}
                        >{option}</li>
                    ))}
                </ul>
                {selected !== null && (
                    <button onClick={handleNextAction}>Next</button>
                )}
            </div>
        </div>
    );
}
import { useState } from "react";
import Selector from "../Selector/Selector";

export type TicketDetailsSelectorProps = {
    theater: string;
    date: string;
    buffet: string;
    theaterOptions: string[];
    dateOptions: string[];
    buffetOptions: string[];
    onSelectTheater: (value: string) => void;
    onSelectDate: (value: string) => void;
    onSelectBuffet: (value: string) => void;
};

const TicketDetailsSelector = ({ theater, date, buffet, theaterOptions, dateOptions, buffetOptions, onSelectBuffet, onSelectDate, onSelectTheater}: TicketDetailsSelectorProps) => {

    const [selectedTheater, setMovie] = useState<string | null>(theater);
    const [selectedDate, setDate] = useState<string | null>(date);
    const [selectedBuffet, setBuffet] = useState<string | null>(buffet);

    return (
        <>
            <div className="px-4 mt-4">
            <p className="text-sm text-gray-300">
                You need to select the mandatory fields (*) to proceed to the checkout page.
            </p>
        </div>
        <div className="px-4 mt-4 mb-56 w-full">
            <div className="flex flex-col gap-4 w-full">
                <Selector 
                    options={theaterOptions}
                    placeholder="Select a Theater *"
                    selected={selectedTheater}
                    onSelect={(option) => {
                        setMovie(option);
                        if (option !== null) {
                            onSelectTheater(option);
                        }
                    }}
                    customSize={{ width: "400px", height: "80px" }}
                />
                <Selector 
                    options={dateOptions}
                    placeholder="Select a Date *"
                    selected={selectedDate}
                    onSelect={(option) => {
                        setDate(option);
                        if (option !== null) {
                            onSelectDate(option);
                        }
                    }}
                    customSize={{ width: "400px", height: "80px" }}
                />
                <Selector 
                    options={buffetOptions}
                    placeholder="Select a Buffet *"
                    selected={selectedBuffet}
                    onSelect={(option) => {
                        setBuffet(option);
                        if (option !== null) {
                            onSelectBuffet(option);
                        }
                    }}
                    customSize={{ width: "400px", height: "80px" }}
                />
            </div>
        </div>
      </>
)};

export default TicketDetailsSelector;
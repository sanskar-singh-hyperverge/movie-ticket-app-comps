import React, { useState } from "react";
import Counter from "./components/Counter/Counter"
import BuffetCard from "./components/BuffetCard/BuffetCard"
import Selector from "./components/Selector/Selector"
import SeatSelector from "./components/SeatSelector/SeatSelector";

function App() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const theaters = [
    "NY City - Cinema Village",
    "LA - Hollywood Theater",
    "Chicago - Downtown Cinema",
  ];


  return (
    <>
    {/* <Counter></Counter> */}
    {/* <div className="h-400 w-400"> */}
    {/* <div className="ml-10 mt-10">
    <Counter
        initialValue={2}
        minValue={0}
        maxValue={1}
        label="Child"
        orientation="horizontal"
        onChange={(value) => console.log("New value:", value)}
        customSize={{ width: "176", height: "58" }}
      />
  <Counter 
        orientation="vertical"
        minValue={0}
        maxValue={10}
customSize={{ width: "60", height: "170" }} 
      /> */}


    {/* </div> */}

      <BuffetCard
        imageSrc="https://picsum.photos/300/200"
        title="Large Menu"
        description={["Large Popcorn", "Large Coca Cola (400 mL)"]}
        price={30}
        customSize={{ width: "351px", height: "155px" }}
      />
    {/* </div> */}

    {/* <Selector
      options={theaters}
      placeholder="Choose a Movie Theater *"
      selected={selectedOption}
      onSelect={(option) => setSelectedOption(option)}
      customSize={{ width: "400px", height: "80px" }}
    /> */}
    {/* <Selector
  options={[
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ]}
  placeholder="Select an option"
  displayKey="label"
  customSize={{ width: "400px", height: "80px" }}
  onSelect={(option) => console.log(option)}
/> */}
      {/* <div className="p-6 bg-gray-900 min-h-screen text-white">
        {selectedOption && <p className="mt-4">Selected: {selectedOption}</p>}
      </div> */}

      {/* <SeatSelector
        rows={5}
        seatsPerRow={6}
        maxSelections={5}
        gap={4}
        seatSize="40px"
        colors={{
          booked: "bg-gray-600",
          available: "bg-purple-500",
          selected: "bg-orange-500",
        }}
        availableSeats={{
          SR1S1: "available",
          R1S2: "available",
          R1S3: "booked",
          R1S4: "available",
          R1S5: "available",
          R1S6: "available",
          R2S1: "booked",
          R2S2: "available",
          R2S3: "available",
          R2S4: "booked",
          R2S5: "available",
          R2S6: "available",
          R3S1: "available",
          R3S2: "booked",
          R3S3: "available",
          R3S4: "available",
          R3S5: "booked",
          R3S6: "booked",
          R4S1: "available",
          R4S2: "available",
          R4S3: "available",
          R4S4: "available",
          R4S5: "booked",
          R4S6: "available",
          R5S1: "booked",
          R5S2: "available",
          R5S3: "available",
          R5S4: "available",
          R5S5: "available",
          R5S6: "available",
        }}
      /> */}
    {/* </div> */}

    </>
  )
}

export default App

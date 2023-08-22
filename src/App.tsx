import logo from "./assets/images/logo.svg";
import dollar from "./assets/images/icon-dollar.svg";
import person from "./assets/images/icon-person.svg";

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");
  const [selectedTip, setSelectedTip] = useState("");

  const [totalTip, setTotalTip] = useState<string>("0.00");
  const [totalForEach, setTotalForEach] = useState<string>("0.00");

  useEffect(() => {
    if (bill && people && tip) {
      const billAmount = parseFloat(bill);
      const tipPercentage = parseFloat(tip) / 100;
      const numberOfPeople = parseInt(people);

      if (
        !isNaN(billAmount) &&
        !isNaN(numberOfPeople) &&
        !isNaN(tipPercentage)
      ) {
        const totalTipAmount =
          (billAmount * tipPercentage + billAmount) / numberOfPeople;
        const totalForEachAmount =
          (billAmount * tipPercentage) / numberOfPeople;

        setTotalTip(totalTipAmount.toFixed(2));
        setTotalForEach(totalForEachAmount.toFixed(2));
      }
    }
  }, [bill, people, tip]);

  function handleBill(event: React.ChangeEvent<HTMLInputElement>) {
    setBill(event.target.value);
  }

  function handleCustomTip(event: React.ChangeEvent<HTMLInputElement>) {
    setTip(event.target.value);
  }

  function handleTip(value: string) {
    setTip(value);
    setSelectedTip(value);
  }

  function handlePeople(event: React.ChangeEvent<HTMLInputElement>) {
    setPeople(event.target.value);
  }

  function handleReset() {
    setBill("");
    setPeople("");
    setTip("");
    setTotalTip("0.00");
    setTotalForEach("0.00");
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="all h-screen flex flex-col justify-center items-center">
          <div className="logo">
            <img src={logo} alt="app-logo" />
          </div>
          <div className="app-card sm:h-72 mt-10 bg-white rounded-xl sm:flex sm:flex-col p-2">
            <div className="sm:flex p-2 sm:p-5 sm:gap-5 sm:h-full">
              <div className="left sm:w-[50%] flex flex-col gap-2">
                <div className="bill flex flex-col">
                  <span className="text-xs font-bold text-[#647275]">Bill</span>
                  <div className="relative">
                    <img
                      src={dollar}
                      alt=""
                      className="absolute left-2 top-6 transform -translate-y-1/2 w-2"
                    />
                    <input
                      type="text"
                      placeholder="0"
                      onChange={handleBill}
                      value={bill}
                      className="w-full mt-2 text-right rounded h-8 pr-2 text-[#0a3838] font-bold bg-[#f3f8fb] placeholder:text-[#a8bcbd] focus:border-[#9fe8df] border-2 border-transparent focus:outline-none"
                    />
                  </div>
                </div>
                <div className="tip-buttons">
                  <span className="text-xs font-bold text-[#647275]">
                    Select Tip %
                  </span>
                  <div className="buttons flex flex-col gap-2">
                    <div className="flex gap-2 mt-1">
                      <button
                        onClick={() => handleTip("5")}
                        className={`w-[90px] py-1 hover:bg-[#9fe8df] hover:text-[#055d61] bg-[#00474b] rounded font-bold text-white ${
                          selectedTip === "5"
                            ? "bg-[#9fe8df] text-[#055d61]"
                            : ""
                        }`}
                      >
                        5%
                      </button>
                      <button
                        onClick={() => handleTip("10")}
                        className={`w-[90px] py-1 hover:bg-[#9fe8df] hover:text-[#055d61] bg-[#00474b] rounded font-bold text-white ${
                          selectedTip === "10"
                            ? "bg-[#9fe8df] text-[#055d61]"
                            : ""
                        }`}
                      >
                        10%
                      </button>
                      <button
                        onClick={() => handleTip("15")}
                        className={`w-[90px] py-1 hover:bg-[#9fe8df] hover:text-[#055d61] bg-[#00474b] rounded font-bold text-white ${
                          selectedTip === "15"
                            ? "bg-[#9fe8df] text-[#055d61]"
                            : ""
                        }`}
                      >
                        15%
                      </button>
                    </div>
                    <div className="custom-tip flex gap-2 mt-1">
                      <button
                        onClick={() => handleTip("25")}
                        className={`w-[90px] py-1 hover:bg-[#9fe8df] hover:text-[#055d61] bg-[#00474b] rounded font-bold text-white ${
                          selectedTip === "25"
                            ? "bg-[#9fe8df] text-[#055d61]"
                            : ""
                        }`}
                      >
                        25%
                      </button>
                      <button
                        onClick={() => handleTip("50")}
                        className={`w-[90px] py-1 hover:bg-[#9fe8df] hover:text-[#055d61] bg-[#00474b] rounded font-bold text-white ${
                          selectedTip === "50"
                            ? "bg-[#9fe8df] text-[#055d61]"
                            : ""
                        }`}
                      >
                        50%
                      </button>
                      <input
                        type="text"
                        placeholder="Custom"
                        onChange={handleCustomTip}
                        className="w-[89px] placeholder:pl-3 placeholder:text-center text-right rounded h-8 pr-2 text-[#0a3838] font-bold bg-[#f3f8fb] placeholder:text-[#a8bcbd] focus:border-[#9fe8df] border-2 border-transparent focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="people-number flex flex-col">
                  <span className="text-xs font-bold text-[#647275] mt-1">
                    Number of People
                  </span>
                  <div className="relative">
                    <img
                      src={person}
                      alt=""
                      className="absolute left-2 top-6 transform -translate-y-1/2 w-2"
                    />
                    <input
                      type="text"
                      placeholder="0"
                      onChange={handlePeople}
                      value={people}
                      className="w-full pl-8 mt-2 text-right rounded h-8 pr-2 text-[#0a3838] font-bold bg-[#f3f8fb] placeholder:text-[#a8bcbd] focus:border-[#9fe8df] border-2 border-transparent focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="right mt-5 flex flex-col justify-between sm:w-[50%] bg-[#00474b] rounded-xl">
                <div className="flex items-center justify-around my-5 mx-5">
                  <div className="flex flex-col text-[10px] gap-5">
                    <div className="flex flex-col text-[10px]">
                      <span className="text-[#dfffff]">Tip Amount</span>
                      <span className="text-[#70a0a4] text-[8px]">
                        / person
                      </span>
                    </div>
                    <div className="flex flex-col text-[10px]">
                      <span className="text-[#dfffff]">Total</span>
                      <span className="text-[#70a0a4] text-[8px]">
                        / person
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-36 text-right gap-5">
                    <h1 className="text-3xl text-[#2cc8b3] font-bold">
                      ${totalForEach}
                    </h1>
                    <h1 className="text-3xl text-[#2cc8b3] font-bold">
                      ${totalTip}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col mx-5 mb-5">
                  <button
                    onClick={handleReset}
                    className="uppercase rounded-md px-5 py-1 font-bold bg-[#0d686d] text-[#055d61] hover:bg-[#9fe8df] hover:text-[#055d61]"
                  >
                    reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

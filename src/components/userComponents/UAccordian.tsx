import { useState } from "react";

interface CounterInputProps {
  label: string;
}

const CounterInput: React.FC<CounterInputProps> = ({ label }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <label className="mr-2">{label}</label>
      <div className="flex items-center">
        <button
          className="px-2 py-1 mr-2 text-white bg-blue-500 rounded"
          onClick={decrement}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className="px-2 py-1 ml-2 text-white bg-blue-500 rounded"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const accordionItems = [
    { label: "Item 1" },
    { label: "Item 2" },
    { label: "Item 3" },
  ];

  return (
    <div className="container mx-auto">
      <div className="mt-4">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <div className="flex items-center justify-between p-4 bg-gray-200">
              <h3>{item.label}</h3>
              <svg
                className="w-5 h-5 text-gray-500 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 9.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 11.414V16a1 1 0 01-2 0v-4.586l-1.293 1.293a1 1 0 01-1.414-1.414l3-3zM9 3a1 1 0 012 0v1a1 1 0 11-2 0V3zm4 1a1 1 0 011 1v6a1 1 0 11-2 0V5a1 1 0 011-1zm-8 0a1 1 0 011 1v6a1 1 0 11-2 0V5a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="hidden">
              <CounterInput label={item.label} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

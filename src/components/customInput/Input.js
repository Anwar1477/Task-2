import React, { useEffect, useState } from "react";

const Input = ({ dynamicFieldHandler, item, items, index, dynamicFields,setCalculateTotal, calculateTotal }) => {
  const { checkbox, inputField, isChecked, value, id } = item;
  const [inputValue, setInputValue] = useState(null);
  const [checked, setChecked] = useState(isChecked ? isChecked : false);
  const itemDataHandler = (isChecked) => {
      let fieldArray = {};
    if (isChecked) {
        fieldArray= {
        id,
        isChecked,
        inputValue,
      };
      dynamicFieldHandler([...dynamicFields,fieldArray ]);
    } else if (!isChecked) {
      const filteredItems = dynamicFields.filter(
        (filteredItem) => Number(filteredItem.id) !== Number(id)
      );
      dynamicFieldHandler(filteredItems);
    }
  };
//   console.log(dynamicFields);

  useEffect(() => {
    // console.log('dynamicFields',dynamicFields)
    if (dynamicFields.length > 0) {
    
      const total = dynamicFields.reduce((acc, current) => {
        if (current.isChecked) {
          acc = Number(acc) + Number(current.inputValue);
          return acc;
        }
      }, []);
      setCalculateTotal(Number(total));
    }
  
  }, [dynamicFields, setCalculateTotal]);
  return (
    <div className="flex gap-4 mt-2">
      <input
        type="checkbox"
        name={checkbox}
        onChange={() => {
          itemDataHandler(!checked);
          setChecked(!checked);
        }}
        value={isChecked}
      />
      <input
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
        type="number"
        name={inputField}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;

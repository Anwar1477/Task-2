import { Formik } from "formik";
import React, { useState } from "react";
import Input from "../customInput/Input";

const Step1 = () => {
  const [fields, setFields] = useState([]);
  const [stepsCount, setStepsCount] = useState(null);
  const [dynamicFieldValues, setDynamicFieldValues] = useState([]);
  const [calculateTotal, setCalculateTotal] = useState(null);
  console.log(stepsCount);

  const handleFormSubmit = () => {
    for (let i = 0; i < Number(stepsCount); i++) {
      fields.push({
        id: i,
        isChecked: false,
        value: "",
      });
    }

    setStepsCount(null);
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => {
        // console.log(values);
        handleFormSubmit();
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <p className="border-2 w-1/4 text-center mx-[30%] rounded bg-blue-100">
            Step 1
          </p>
          <div className="flex justify-center items-center gap-1 mt-2">
            <p className="border-2 bg-orange-100 px-1 text-[14px]">
              Number of textbox
            </p>
            <input
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
              name="step"
              type="number"
              onChange={(e) => setStepsCount(e.target.value)}
              value={stepsCount}
            />
          </div>
          <button
            className="btn btn-sm btn-primary mt-2 ml-[270px]"
            type="submit"
            onClick={handleFormSubmit}
          >
            Add Textbox
          </button>

          <div className=""></div>
          <div className="mx-[35px]">
            {fields.length > 0 &&
              fields.map((item, index) => (
                <Input
                  key={index}
                  item={item}
                  fieldHandler={setFields}
                  items={fields}
                  index={index}
                  dynamicFields={dynamicFieldValues}
                  dynamicFieldHandler={setDynamicFieldValues}
                  setCalculateTotal={setCalculateTotal}
                  calculateTotal={calculateTotal}
                />
              ))}
          </div>

          {calculateTotal !== null && dynamicFieldValues.length !== 0 && (
            <div className="border-2 p-2 mt-2 bg-gray-200">
              <p>
                Total Number is{" "}
                <span className="font-bold">{calculateTotal}</span>
              </p>
            </div>
          )}
        </form>
      )}
    </Formik>
  );
};

export default Step1;

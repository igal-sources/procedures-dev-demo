import React, { useState, useEffect } from "react";
import * as types from "../../../shared/types";
import "./days-pattern.scss";

const DaysPattern = ({ recurrenceValues, updatedCheckedState = [] }) => {
  //console.log("recurrenceValues: ", recurrenceValues);
  const [checkedState, setCheckedState] = useState(types.daysPattern);
  //console.log("checkedState: ", checkedState);

  const handleOnChange = (position, checked) => {
    const selected = checkedState[position].active;
    //console.log("selected: ", selected);
    checkedState[position] = { ...checkedState[position], active: !selected };

    setCheckedState(checkedState);
    //console.log("updatedCheckedState: ", checkedState);
  };

  const initData = () => {
    const arrayCheckedValues = types.daysPattern;
    //console.log("arrayCheckedValues: ", arrayCheckedValues);

    if (recurrenceValues) {
      const inputValues = recurrenceValues.split`,`.map((x) => +x);
      //console.log("inputValues: ", inputValues);

      const res = arrayCheckedValues.map((x) => {
        const flag = inputValues.some((y) => y === x.id);
        return {
          id: x.id,
          day: x.day,
          active: flag,
        };
      });

      setCheckedState(res);
      //console.log("res: ", res);
    }
  };

  useEffect(() => {
    initData();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="DaysPattern-container">
      {types.daysPattern.map(({ day, checked }, index) => {
        return (
          <ul className="toppings-list">
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={day}
                    value={day}
                    checked={checkedState && checkedState[index].active}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{day}</label>
                </div>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default DaysPattern;

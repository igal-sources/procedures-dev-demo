import React, { useState, useEffect } from "react";
import * as types from "../../../shared/types";
import "./days-pattern.scss";

const DaysPattern = ({ recurrenceValues, onUpdatedRecurrence = types.EmptyFn }) => {
  //console.log("recurrenceValues: ", recurrenceValues);
  const [checkedState, setCheckedState] = useState(types.daysPattern);
  const [outCheckedState, setOutCheckedState] = useState();
  //console.log("checkedState: ", checkedState);

  const handleOnChange = (position, checked) => {
    const selected = checkedState[position].active;

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? { ...item, active: !selected } : item
    );
    setCheckedState(updatedCheckedState);

    const updated = updatedCheckedState.map((x, index) => {
      const isChecked = x.active === true ? index : null;
      return {
        isChecked,
      };
    });

    onUpdatedRecurrence(updated);
    //console.log('updatedRecurrenceValues: ', updated);
  };

  const initData = () => {
    const arrayCheckedValues = types.daysPattern;

    if (recurrenceValues) {
      const inputValues = recurrenceValues.split`,`.map((x) => +x);

      const res = arrayCheckedValues.map((x) => {
        const flag = inputValues.some((y) => y === x.id);
        return {
          id: x.id,
          day: x.day,
          active: flag,
        };
      });

      setCheckedState(res);
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

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

import { options, years, months } from "./Constants.js";

const DateHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <div
    style={{
      margin: 10,
      display: "flex",
      justifyContent: "center",
    }}
  >
    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
      {"<"}
    </button>
    <Select
      options={years}
      defaultValue={new Date().getYear()}
      onChange={() => console.log("noops")}
    />

    <Select
      options={months}
      defaultValue={new Date().getMonth()+1}
      onChange={() => console.log("noops")}
    />
    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
      {">"}
    </button>
  </div>
);

function App() {
  const [selected, setSelected] = useState(null);
  const [date, setDate] = useState(new Date());

  const StyledSelect = styled(Select)`
    margin-bottom: 2rem;
  `;

  return (
    <>
      <StyledSelect
        options={options}
        defaultValue={selected}
        onChange={setSelected}
        maxMenuHeight={300}
      />
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
      <DatePicker
        renderCustomHeader={(props) => <DateHeader {...props} />}
        selected={date}
        onChange={(date) => setDate(date)}
      />
      <div>Hello world</div>
    </>
  );
}

export default App;

"use client";
import React, { Fragment } from "react";

export const Input = ({
  type,
  value,
  handleChange,
  model,
  isReadOnly,
}) => {
  switch (type) {
    case "text":
    case "password":
    case "date":
      return (
        <Fragment>
          <input
            disabled={isReadOnly}
            value={value}
            name={model}
            onChange={handleChange}
            className="form-control"
            type={type}
          />
        </Fragment>
      ); 
  }
};

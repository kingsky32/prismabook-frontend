import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  border: 0;
  border: 1px solid ${props => props.theme.lightGreyColor};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.whiteColor};
  font-size: 1.7rem;
  padding: 1.4rem 1.6rem;
  &:focus {
    border-color: ${props => props.theme.blueColor};
    box-shadow: 0 0 0 .2rem ${props => props.theme.lightGreyColor};
    border-color: ${props => props.theme.blueColor};
  }
`;

const Input = React.forwardRef(
  (
    { placeholder, required = false, value = "", onChange, className, type = "text", onClick },
    ref
  ) =>
    <Container
      ref={ref}
      className={className}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      onClick={onClick}
      type={type}
    />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  classname: PropTypes.string,
  type: PropTypes.oneOf([
    "checkbox",
    "button",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week"
  ]),
  onClick: PropTypes.func
};

export default Input;

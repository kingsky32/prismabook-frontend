import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lightGreyColor};
  border-radius: 4rem;
  transition: .25s background-color ease;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &:hover {
    transition-duration: 0s;
    background-color: ${props => props.theme.lightDarkGreyColor};
  }
`;

const NavigationInfo = styled.span`
  display: block;
  position: absolute;
  color: ${props => props.theme.whiteColor};
  background-color: ${props => props.theme.blackColor};
  padding: .8rem 1rem;
  font-size: 1.2rem;
  border-radius: ${props => props.theme.borderRadius};
  opacity: 0;
  pointer-events: none;
  bottom: -3.5rem;
  transition: .25s opacity ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
  &.show {
    opacity: .75;
  }
`;

const CircleButton = ({ className, onClick, icon, info, size = "4rem" }) => {
  const onMouseEnter = e => {
    e.target.querySelector("span") && e.target.querySelector("span").classList.add("show");
  };

  const onMouseLeave = e => {
    e.target.querySelector("span") && e.target.querySelector("span").classList.remove("show");
  };

  return (
    <Button
      className={className}
      onClick={onClick}
      onMouseEnter={info && onMouseEnter}
      onMouseLeave={info && onMouseLeave}
      size={size}
    >
      {icon}
      {info &&
        <NavigationInfo>
          {info}
        </NavigationInfo>}
    </Button>
  );
};

CircleButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  icon: PropTypes.object.isRequired,
  info: PropTypes.string
};

export default withRouter(CircleButton);

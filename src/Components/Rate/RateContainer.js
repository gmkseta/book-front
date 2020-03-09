import React from "react";
import PropTypes from "prop-types";
import RatePresenter from "./RatePresenter";

const RateContainer = ({
  rate,
  title
}) => {
  return (
    <RatePresenter rate={rate} title={title}/>
  );
};

RateContainer.propTypes = {
  rate: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default RateContainer;

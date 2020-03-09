import React from "react";
import PropTypes from "prop-types";
import RatePresenter from "./RatePresenter";

const RateContainer = ({
  rate,
  title,
  id
}) => {
  return (
    <RatePresenter rate={rate} title={title} id={id}/>
  );
};

RateContainer.propTypes = {
  rate: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default RateContainer;

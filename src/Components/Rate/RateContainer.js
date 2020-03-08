import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RatePresenter from "./RatePresenter";

const RateContainer = ({
  rate
}) => {
  return (
    <RatePresenter rate={rate}/>
  );
};

RateContainer.propTypes = {
  rate: PropTypes.number.isRequired
};

export default RateContainer;

import React, { memo } from "react";
import PropTypes from "prop-types";
const Button = ({
  text,
  children,
  ButtonClick,
  className = { isReplace: false, Class: null },
  ButtonTouch,
  type = "submit",
}) => {
  return (
    <button
      type={type}
      onClick={ButtonClick}
      onTouchMove={ButtonTouch}
      className={
        className.isReplace
          ? className.Class
          : `${className.Class} font-medium py-2 px-4`
      }
    >
      {text || children}
    </button>
  );
};

export default memo(Button);

Button.prototype = {
  text: PropTypes.string,
  children: PropTypes.element,
  ButtonClick: PropTypes.func,
  className: PropTypes.exact({
    Class: PropTypes.string,
    isReplace: PropTypes.bool,
  }),
  ButtonTouch: PropTypes.func,
};

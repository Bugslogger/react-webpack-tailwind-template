import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  endIcon,
  iconName,
  startIcon,
  className,
  InputClass,
  placeholder,
  value,
  defaultValue,
  style,
  InputId,
  InputFocus,
  InputBlur,
  InputChange,
  replaceInputClass,
  name,
  IconClass = {
    startMain: null,
    startImage: null,
    endMain: null,
    endImage: null,
    child: "",
  },
  error = { class: "", message: null },
}) => {
  function IsIconsAvailable() {
    if (startIcon && endIcon) {
      return "w-[calc(100%_-_92px)]";
    } else if ((startIcon && !endIcon) || (!startIcon && endIcon)) {
      return "w-[calc(100%_-_48px)]";
    } else {
      return "w-full";
    }
  }

  return (
    <>
      <div className={`${className} flex justify-between items-center w-full`}>
        {startIcon && (
          <div className={`p-3 w-[48px] cursor-pointer ${IconClass.startMain}`}>
            {startIcon && (
              <img
                src={startIcon}
                width={"100%"}
                className={IconClass.child}
                alt={iconName}
              />
            )}
          </div>
        )}
        <input
          className={
            replaceInputClass
              ? replaceInputClass
              : `${InputClass} h-full appearance-none ${IsIconsAvailable()}  py-2 px-3 text-gray-700 border-0 leading-tight focus:outline-none`
          }
          id={InputId}
          type={type}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={InputChange}
          onBlur={InputBlur}
          onFocus={InputFocus}
        />
        {endIcon && (
          <div className={`p-3 w-[48px] cursor-pointer ${IconClass.endMain}`}>
            {endIcon && (
              <img
                src={endIcon}
                className={IconClass.child}
                width={"100%"}
                alt={iconName}
              />
            )}
          </div>
        )}
      </div>
      {error.message && (
        <p className={error.class + " text-red-500 text-xs italic"}>
          {error.message}
        </p>
      )}
    </>
  );
};

export default Input;

Input.prototype = {
  type: PropTypes.string,
  endIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  iconName: PropTypes.string,
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  InputClass: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  InputId: PropTypes.string,
  InputFocus: PropTypes.func,
  InputBlur: PropTypes.func,
  InputChange: PropTypes.func,
  replaceInputClass: PropTypes.string,
  IconClass: PropTypes.exact({
    startMain: PropTypes.string,
    startImage: PropTypes.string,
    endMain: PropTypes.string,
    endImage: PropTypes.string,
    child: PropTypes.string,
  }),
  error: PropTypes.exact({
    message: PropTypes.string,
    class: PropTypes.string,
  }),
};

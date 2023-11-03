import React from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="Toggle">
      <input
        type="checkbox"
        className="Toggle__checkbox"
        onClick={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "Toggle__slider Toggle__slider-F"
            : "Toggle__slider Toggle__slider-C"
        }
      />
      <p
        className={
          currentTemperatureUnit === "F"
            ? "Toggle__C font_inactive"
            : "Toggle__C font_active"
        }
      >
        C
      </p>
      <p
        className={
          currentTemperatureUnit === "F"
            ? "Toggle__F font_active"
            : "Toggle__F font_inactive"
        }
      >
        F
      </p>
    </label>
  );
}

export default ToggleSwitch;

import "bootstrap-icons/font/bootstrap-icons.min.css";
import "normalize.css/normalize.css";

import "./style.css";

import { updateFirstColor, updateSecondColor } from "./colorInputs";
import { setOrientation } from "./helpers";
import { copyToClipboard } from "./orientation";

const body = document.querySelector("body");

const firstColorInput = document.getElementById(
  "firstcolor"
) as HTMLInputElement;
const secondColorInput = document.getElementById(
  "secondcolor"
) as HTMLInputElement;

const clipboardButton = document.getElementById("btncopy") as HTMLButtonElement;

let orientation = "to right";

const orientationButtons = document.querySelectorAll(".btnOrientation");

orientationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const updateOrientation = setOrientation(
      orientation,
      `${(button as HTMLButtonElement).dataset.value}`,
      button as HTMLButtonElement,
      {
        first: firstColorInput,
        second: secondColorInput
      }
    );
    orientation = updateOrientation; // Actualiza la orietnacion cada vez que cambia
  });
});

clipboardButton.addEventListener("click", () =>
  copyToClipboard(
    { first: firstColorInput, second: secondColorInput },
    orientation
  )
);

firstColorInput.addEventListener("input", (event) =>
  updateFirstColor(event, body!, secondColorInput, orientation)
);

secondColorInput.addEventListener("input", (event) =>
  updateSecondColor(event, body!, firstColorInput, orientation)
);

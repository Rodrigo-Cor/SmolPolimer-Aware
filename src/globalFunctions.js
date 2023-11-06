import Swal from "sweetalert2";

export const genericAlert = (message, icon) => {
  Swal.fire({
    title: message,
    icon: icon,
    background: "#272727",
    color: "#effffb",
    showConfirmButton: true,
    confirmButtonText: "OK",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
  });
};

export const generateColor = (hue, luminosity, count) => {
  const customPalette = ["#50D890", "#5733FF"];
  const randomCustomColor = randomColor({
    count: count,
    luminosity: luminosity,
    format: "hex",
    hue: hue,
  });
  return randomCustomColor;
};

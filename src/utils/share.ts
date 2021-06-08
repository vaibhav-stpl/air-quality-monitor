export const getColorValue = (value: number) => {
    if (value >= 0 && value <= 50) {
      return "#365f37";
    } else if (value >= 51 && value <= 100) {
      return "#2cd630";
    } else if (value >= 101 && value <= 200) {
      return "#ffeb3b";
    } else if (value >= 201 && value <= 300) {
      return "#ff5722";
    } else if (value >= 301 && value <= 400) {
      return "#f91909";
    } else if (value >= 401 && value <= 500) {
      return "#6d0f08";
    }
    return "#359965";
  };
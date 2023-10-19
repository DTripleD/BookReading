export const days = (time) => {
  if (Math.floor(time / (1000 * 60 * 60 * 24)) > 99) {
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }
  if (Math.floor(time / (1000 * 60 * 60 * 24)) > 9) {
    return "0" + Math.floor(time / (1000 * 60 * 60 * 24));
  }
  return "00" + Math.floor(time / (1000 * 60 * 60 * 24));
};

export const hours = (time) => {
  if (Math.floor((time / (1000 * 60 * 60)) % 24) > 9) {
    return Math.floor((time / (1000 * 60 * 60)) % 24);
  }
  return "0" + Math.floor((time / (1000 * 60 * 60)) % 24);
};
export const minutes = (time) => {
  if (Math.floor((time / 1000 / 60) % 60) > 9) {
    return Math.floor((time / 1000 / 60) % 60);
  }
  return "0" + Math.floor((time / 1000 / 60) % 60);
};

export const seconds = (time) => {
  if (Math.floor((time / 1000) % 60) > 9) {
    return Math.floor((time / 1000) % 60);
  }
  return "0" + Math.floor((time / 1000) % 60);
};

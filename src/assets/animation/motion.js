export const showup = (delay = 0.1, duration = 0.5) => {
  return {
    container: {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
        },
      },
    },
  };
};

export const enterInLeft = (xDeviation = -200, delay = 0.1, duration = 0.5) => {
  return {
    container: {
      hidden: {
        opacity: 0,
        x: xDeviation,
      },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: duration,
          delay: delay,
        },
      },
    },
  };
};

export const enterInButtom = (
  yDeviation = 200,
  delay = 0.1,
  duration = 0.5
) => {
  return {
    container: {
      hidden: {
        opacity: 0,
        y: yDeviation,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration,
          delay: delay,
        }
      },
    },
  };
};

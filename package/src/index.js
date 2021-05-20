/**
 * @name cssClass
 * @param {...import("./index").Input} classes
 * @retuns {string|undefined}
 */
const cssClass =
  (...classes) => {
    return classes.reduce(
      (str, el) => {
        if (typeof el == "string") {
          return str + el;
        }

        for (const k in el) {
          if (el[k] === true) {
            str = `${str} ${k}`;
          }
        }

        return str;
      },
      ""
    ) || undefined;
  };

export default cssClass;

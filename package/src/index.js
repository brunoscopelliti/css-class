/**
 * @name cssClass
 * @param {...import("./index").Input} classes
 * @retuns {string|undefined}
 */
const cssClass =
  (...classes) => {
    let result = "";
    for (const entry of classes) {
      if (typeof entry == "string") {
        result = result
          ? `${result} ${entry}`
          : entry;
      } else if (entry && typeof entry == "object") {
        for (const k in entry) {
          if (entry[k] === true) {
            result = result
              ? `${result} ${k}`
              : k;
          }
        }
      }
    }
    return result || undefined;
  };

export default cssClass;

const getCarCountByYear = (list, prop) => {
 const iter = (elems, acc) => {
    if (elems.length === 0) {
      return acc;
    }
    const [{ prop }, ...rest] = elems;
    const newValue = acc[prop] ? acc[prop] + 1 : 1;
    return iter(rest, { ...acc, [prop]: newValue });
  };
  return iter(list, {});
}
export default getCarCountByYear;


/**
 * 
 * Acá va el manejo de la data
 * 
 */

//console.table(DATA)

const filterHouse = (DATA, condition) => {
  const filteredHouse = DATA.filter(element => {
    return element.house === condition
  })
  return filteredHouse;
};
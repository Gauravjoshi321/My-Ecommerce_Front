// export function fetchAllProducts() {
//   return new Promise(async (resolve) => {
//     // TODO: will make it more dynamic

//     const res = await fetch("http://localhost:8080/products");
//     const data = await res.json();

//     resolve({ data });
//   });
// }

export function fetchProductsByFilters(filter, sort) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}

  // TODO : on server we will support multi values in filter
  let queryString = '';

  // For Filter
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  // For Sorting
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products?' + queryString)
    const data = await response.json()
    resolve({ data })
  }
  );
}

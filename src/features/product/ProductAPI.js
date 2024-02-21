export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO : will make it more dynamic

    const res = await fetch("http://localhost:8080/products");
    const data = await res.json();

    resolve(data);
  });
}

let endpoint = 0;
export const weakMap = new WeakMap();
export function queryAPI(myObj) {
  weakMap.set(endpoint, ++endpoint); 
}

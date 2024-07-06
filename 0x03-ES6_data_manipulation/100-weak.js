let end = 0;
export const weakMap = new WeakMap();

export function queryAPI(myObj) {
  end++;
  weakMap.set(myObj, end);

  if (weakMap.get(myObj) >= 5) {
   throw new Error("Endpoint load is high");
  }
}

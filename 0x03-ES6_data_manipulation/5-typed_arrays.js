export default function createInt8TypedArray(length, position, value) {
  const newBuffer = new ArrayBuffer(length);
  const newView = new DataView(newBuffer);
  try {
    newView.setInt8(position, value);
    return newView;
  } catch (error) {
    throw new Error('Position outside range');
  }
}

export default function Formula(peakTime, scanTime, injectionVol) {
  // eslint-disable-next-line prettier/prettier
  return (+peakTime - (+scanTime / 2)) + (+injectionVol / 3);
}

export function swapTwoElementsOfArray(array, elementAIndex, elementBIndex) {
    [array[elementAIndex], array[elementBIndex]] = [array[elementBIndex], array[elementAIndex]];
}
import {swapTwoElementsOfArray} from "./utils";

export function bubbleSort(elementsList) {
    const totalListLength = elementsList.length;
    let isSwapped = true;
    let i = 0;
    let finish = 0;
    while (isSwapped) {
        isSwapped = false;
        i = 0;
        for (let j = i + 1; j < totalListLength - finish; j++) {
            if (elementsList[i] > elementsList[j]) {
                swapTwoElementsOfArray(elementsList, i, j);
                isSwapped = true;
            }
            i++;
        }
        finish++;
    }
}
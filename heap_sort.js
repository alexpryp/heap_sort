"use strict"

// deeps down to the children, and check if children is less then parent
function heapSwap(array, i, max) {
    let big_index, child, childl, childr;

    while (i < max) {
        big_index = i;
        childl = 2 * i + 1;
        childr = childl + 1;

        if (childl < max && array[childl] > array[big_index]) {
            big_index = childl;
        }

        if (childr < max && array[childr] > array[big_index]) {
            big_index = childr;
        }

        if (big_index == i) {
            return;
        }

        let temp = array[i];
        array[i] = array[big_index];
        array[big_index] = temp;
        i = big_index;
    }
}

// build heap from the array 
function build_heap(array) {
    let index = Math.floor((array.length / 2) - 1);

    while (index >= 0) {
        heapSwap(array, index, array.length);
        index--;
    }
}

// start sorting
function heapSort(array) {
    build_heap(array);

    let end = array.length - 1;

    while(end >= 0) {
        let temp = array[0];
        array[0] = array[end];
        array[end] = temp;

        heapSwap(array, 0, end);
        end -= 1;
    }

    return array;
}

console.log(heapSort([5, 4, 6, 3, 7, 2, 8, 1, 9, 10, 11, 19, 20, 12, 18, 13, 17, 14, 16, 15]));

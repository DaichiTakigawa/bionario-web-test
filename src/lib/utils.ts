// return first index which satisfy item < array[index].
export function binarySearch<T, I>(
  array: I[],
  item: T,
  comparer: (a: T, b: I) => number
): number {
  let lb = 0;
  let ub = array.length;
  while (ub - lb > 1) {
    const mid = Math.floor((lb + ub) / 2);
    const comp = comparer(item, array[mid]);
    if (comp < 0) {
      ub = mid;
    } else if (comp > 0) {
      lb = mid;
    } else {
      lb = mid;
    }
  }

  return ub;
}

export function getMinMax(array: number[]) {
  return [Math.min(...array), Math.max(...array)];
}

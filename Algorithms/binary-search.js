const arr = [2, 4, 6, 7, 8, 9, 10, 13, 16];
const binarySearch = (array, key) => {
  let end = array.length - 1;
  let start = 0;
  let mid = Math.floor((start + end) / 2);

  while (start <= mid) {
    if (key === array[mid]) {
      return `${mid}th Index`;
    } else if (array[mid] < key) {
      start = mid + 1;
    } else if (array[mid] > key) {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return "Not found";
};
console.log(binarySearch(arr, 13));

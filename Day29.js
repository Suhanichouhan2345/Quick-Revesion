var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2];

    arr.sort((a, b) => a - b);

    let n = arr.length;

    if (n % 2 === 1) {
        return arr[Math.floor(n / 2)];
    } else {
        let mid = n / 2;

        return (arr[mid - 1] + arr[mid]) / 2;
    }
};
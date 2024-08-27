function majorityElement(nums: number[]): number {
    const counts: { [key: number]: number } = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (counts[num] === undefined) {
            counts[num] = 1;
        } else {
            counts[num]++;
        }

        if (counts[num] > majorityCount) {
            return num;
        }
    }

    return -1;
}
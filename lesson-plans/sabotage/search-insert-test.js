/**
 * Finds the index of the target in the sorted array nums or the index where it should be inserted.
 *
 * @param {number[]} nums - The sorted array of distinct integers.
 * @param {number} target - The target value to find or insert.
 * @returns {number} The index of the target or the index where it should be inserted.
 */

const searchInsert = (nums, target) => {
   for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
    
    if (target === undefined) {
    return 0;
    }
  }
  return nums.length; 
};

// Test cases
describe('searchInsert: finds the index where a target should be inserted', () => {
  describe('the function finds insertion index:', () => {
    it('in a sorted array with existing target', () => {
      const actual = searchInsert([1, 3, 5, 6], 5);
      expect(actual).toEqual(2);
    });
    it('in a sorted array with missing target', () => {
      const actual = searchInsert([1, 3, 5, 6], 2);
      expect(actual).toEqual(1);
    });
    it('in a sorted array with target greater than all elements', () => {
      const actual = searchInsert([1, 3, 5, 6], 7);
      expect(actual).toEqual(4);
    });
    it('in a sorted array with target smaller than all elements', () => {
      const actual = searchInsert([1, 3, 5, 6], 0);
      expect(actual).toEqual(0);
    });
    it('in a sorted array with negative numbers', () => {
      const actual = searchInsert([-5, -3, -1, 0, 2, 4], -2);
      expect(actual).toEqual(2);
    });
    it('in a sorted array with out target', () => {
      const actual = searchInsert([1, 3, 5, 6]);
      expect(actual).toEqual(0);
    });  
  });
});

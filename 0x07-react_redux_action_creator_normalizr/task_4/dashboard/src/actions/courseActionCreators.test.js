import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};
Step 3: Write tests for the action creators
In a file named courseActionCreators.test.js, write tests for both action creators:

javascript
Copy code
// courseActionCreators.test.js
import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
  it('selectCourse should return the correct action object', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      index,
    };
    expect(selectCourse(index)).toEqual(expectedAction);
  });

  it('unSelectCourse should return the correct action object', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      index,
    };
    expect(unSelectCourse(index)).toEqual(expectedAction);
  });
});

const COMPLETED = 'bookstore/categories/COMPLETED';

const initalState = [];
const categoriesReducer = (state = initalState, action) => {
  switch (action.type) {
    case COMPLETED:
      return 'Under construction';
    default:
      return state;
  }
};
export const checkStatus = () => ({
  type: COMPLETED,
});
export default categoriesReducer;

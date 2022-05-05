const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const statusReducer = (state = [], action) => {
  if (action.type === CHECK_STATUS) {
    return 'Under construction';
  }
  return state;
};

export { checkStatus };
export default statusReducer;

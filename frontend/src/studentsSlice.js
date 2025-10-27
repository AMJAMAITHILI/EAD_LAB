// studentsSlice.js->reduce+actions

const initialState = {
  students: [
    { name: 'A', marks: 50 },
    { name: 'B', marks: 90 },
    { name: 'C', marks: 70 },
    { name: 'D', marks: 85 },
  ],
};

// Action creators
export const sortAsc = () => ({ type: 'SORT_ASC' });
export const sortDesc = () => ({ type: 'SORT_DESC' });

// Reducer
export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SORT_ASC':
      return { ...state, students: [...state.students].sort((a, b) => a.marks - b.marks) };
    case 'SORT_DESC':
      return { ...state, students: [...state.students].sort((a, b) => b.marks - a.marks) };
    default:
      return state;
  }
}

// StudentsWithRedux.jsx
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { sortAsc, sortDesc } from './studentsSlice';

function StudentsView() {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Students List</h3>

      <div style={{ marginBottom: 10 }}>
        <button onClick={() => dispatch(sortAsc())} style={{ marginRight: 5 }}>
          Sort Asc
        </button>
        <button onClick={() => dispatch(sortDesc())}>
          Sort Desc
        </button>
      </div>

      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.name} — {s.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StudentsWithReduxApp() {
  return (
    <Provider store={store}>
      <StudentsView />
    </Provider>
  );
}

// StudentsWithRedux.jsx
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { sortAsc, sortDesc } from './studentsSlice';

function StudentsView() {
  const students = useSelector(state => state.students);//useSelector reads data from the Redux store
  const dispatch = useDispatch();//dispatch sends an action to the reducer.Reducer processes the action and returns new state, which automatically updates the component.
  //current state and dispatch fn automatically passed to recducer  by store
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

import { useEffect, useRef, useReducer } from "react";
import AddForm from "../components/add-form/add-form.component";
import Student from "../components/student/student.component";
import useLocalStorage from "../hooks/local-storage.hook";
import { studentsReducer, initialState, INITIALIZE, ADD_STUDENT, REMOVE_FIRST, UPDATE_ABSENT } from "../state/reducer";
import { IStudent } from "../types";

const Main = () => {
  const lastStdRef = useRef<HTMLDivElement>(null);
  const { storedData } = useLocalStorage([], 'students-list');

  const [state, dispatch] = useReducer(studentsReducer, initialState);

  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    const totalAbs = stdList.reduce((prev, cur) => prev + cur.absents, 0);
    dispatch({
      type: INITIALIZE,
      payload: { studentsList: stdList, totalAbsents: totalAbs },
    });
  }, [storedData]);

  const handleAddStudent = (newStudent: IStudent) => {
    dispatch({ type: ADD_STUDENT, payload: newStudent });
  };

  const removeFirst = () => {
    dispatch({ type: REMOVE_FIRST });
  };

  const handleAbsentChange = (id: string, change: number) => {
    dispatch({ type: UPDATE_ABSENT, payload: { id, change } });
  };

  const scrollToLast = () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className="stats">
        <button onClick={removeFirst}>POP Student</button>
        <button onClick={scrollToLast}>Scroll to Last</button>
        <b style={{ fontSize: '12px', fontWeight: 100, color: 'gray' }}>
          Total Absents {state.totalAbsents}
        </b>
      </div>
      {state.studentsList.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          absents={student.absents}
          isGraduated={student.isGraduated}
          coursesList={student.coursesList}
          onAbsentChange={handleAbsentChange}
        />
      ))}
      <div ref={lastStdRef}></div>
    </>
  );
};

export default Main;

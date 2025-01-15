import { IStudent } from "../types";

export const INITIALIZE = 'INITIALIZE';
export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_FIRST = 'REMOVE_FIRST';
export const UPDATE_ABSENT = 'UPDATE_ABSENT';

interface InitializeAction {
  type: typeof INITIALIZE;
  payload: { studentsList: IStudent[]; totalAbsents: number };
}
interface AddStudentAction {
  type: typeof ADD_STUDENT;
  payload: IStudent;
}
interface RemoveFirstAction {
  type: typeof REMOVE_FIRST;
}
interface UpdateAbsentAction {
  type: typeof UPDATE_ABSENT;
  payload: { id: string; change: number };
}
export type StudentsActions =
  | InitializeAction
  | AddStudentAction
  | RemoveFirstAction
  | UpdateAbsentAction;

export interface StudentsState {
  studentsList: IStudent[];
  totalAbsents: number;
}

export const initialState: StudentsState = {
  studentsList: [],
  totalAbsents: 0,
};

export const studentsReducer = (state: StudentsState, action: StudentsActions): StudentsState => {
  switch (action.type) {
    case INITIALIZE: {
      return {
        studentsList: action.payload.studentsList,
        totalAbsents: action.payload.totalAbsents,
      };
    }
    case ADD_STUDENT: {
      return {
        ...state,
        studentsList: [action.payload, ...state.studentsList],
      };
    }
    case REMOVE_FIRST: {
      if (state.studentsList.length === 0) return state;
      const [removedStudent, ...rest] = state.studentsList;
      return {
        studentsList: rest,
        totalAbsents: state.totalAbsents - removedStudent.absents,
      };
    }
    case UPDATE_ABSENT: {
      const updatedStudentsList = state.studentsList.map((student) =>
        student.id === action.payload.id
          ? { ...student, absents: student.absents + action.payload.change }
          : student
      );
      return {
        studentsList: updatedStudentsList,
        totalAbsents: state.totalAbsents + action.payload.change,
      };
    }
    default:
      return state;
  }
};

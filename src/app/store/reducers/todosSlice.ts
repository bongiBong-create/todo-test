import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../shared/api/service";
import { ITask } from "../../../features/task/model";

interface ITodos {
  todos: ITask[];
  filterTodos: ITask[];
  isLoading: boolean;
  error: string | unknown;
}

interface IParams {
  limit: number;
}

const initialState: ITodos = {
  todos: [],
  filterTodos: [],
  isLoading: false,
  error: "",
}

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (params: IParams, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          ...params
        }
      })

      return response.data.todos;
    } catch (e) {
      return thunkAPI.rejectWithValue(`Ошибка ${e}`)
    }
  }
)

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    addTodo: (state, { payload }) => {
      state.todos.push(payload)
    },
    toggleTodoCompleted: (state, action) => {
      const existingIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);

      if (state.todos[existingIndex].completed) {
        state.todos[existingIndex].completed = false;
      } else {
        state.todos[existingIndex].completed = true;
      }
    },
    filterAll: ((state) => {
      state.filterTodos = state.todos;
    }),
    filterCompleted: ((state) => {
      state.filterTodos = state.todos.filter((todo) => todo.completed);
    }),
    filterPlanned: ((state) => {
      state.filterTodos = state.todos.filter((todo) => !todo.completed);
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getTodos.fulfilled, (state, { payload }) => {
      state.todos = payload;
      state.isLoading = false;
    })
    builder.addCase(getTodos.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
  }
}
)

export const { deleteTodo, addTodo, toggleTodoCompleted, filterAll, filterCompleted, filterPlanned, } = todosSlice.actions;

export default todosSlice.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface task {
  _id: string;
  title: string;
  startTime: string;
  endTime: string;
  duration: string;
  createdDate: Date;
}

interface tasks {
  data: task[];
  status: string;
}

const initialState: tasks = {
  data: [],
  status: 'No Tasks Found! Add tasks to see them here.',
};

export const getTasks = createAsyncThunk('tasks/get', async () => {
  const tasks = await axios.get('http://localhost:5000/tasks/get');
  return tasks.data;
  // axios
  //   .get('http://localhost:5000/tasks/get')
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .catch((err) => {
  //     return 'Failed to fetch tasks';
  //   });
});

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  // reducers actions
  reducers: {
    addtask: (state, action: PayloadAction<object>) => {
      axios
        .post('http://localhost:5000/tasks/add', { data: action.payload })
        .then((res) => {
          console.log('res: ', res.data);
        });
    },
    updateTask: (state, action: PayloadAction<object>) => {
      axios
        .put('http://localhost:5000/tasks/update', { data: action.payload })
        .then((res) => {
          console.log('res: ', res.data);
        });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.status = 'Failed to fetch tasks';
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      if (action.payload.length > 0) {
        state.data = action.payload as any;
        state.status = 'completed';
      } else {
        state.status = 'No Tasks Found! Add tasks to see them here.';
      }
    });
  },
});

export const { addtask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;

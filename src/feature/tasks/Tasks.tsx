import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Header from '../header/Header';
import { getTasks } from './taskSlice';
import {
  TaskContainer,
  TaskContainerHeader,
  TaskContainerBody,
  TaskNotFound,
  MainTaskArea,
  TaskSideBar,
  Task,
} from './taskStyles';
import { Button } from '../../styles';
import AddTask from './sub-components/AddTask';
import Loader from '../loader/Loader';
import UpdateTask from './sub-components/UpdateTask';

interface task {
  _id: string;
  title: string;
  startTime: string;
  endTime: string;
  duration: string;
  createdDate: Date;
}

const Tasks = () => {
  const tasks = useAppSelector((state) => state.tasks.data);
  const status = useAppSelector((state) => state.tasks.status);
  const dispatch = useAppDispatch();
  const [sideBarPage, setSideBarPage] = useState<string>('add');
  const [currentTask, setCurrentTask] = useState<task>({
    _id: '',
    title: '',
    startTime: '00:00',
    endTime: '00:00',
    duration: '00:00',
    createdDate: new Date(),
  });

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div style={{ padding: '2rem' }}>
        <TaskContainer>
          <TaskContainerHeader>
            <span style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>
              Tasks
            </span>
            <Button
              onClick={() => {
                if (sideBarPage !== 'add') setSideBarPage('add');
              }}
            >
              Add Task
            </Button>
          </TaskContainerHeader>
          <hr />
          <TaskContainerBody>
            <MainTaskArea>
              {status === 'loading' ? (
                <TaskNotFound>
                  <Loader />
                </TaskNotFound>
              ) : tasks?.length < 1 && status !== 'loading' ? (
                <TaskNotFound>{status}</TaskNotFound>
              ) : (
                tasks?.map((task, index) => {
                  return (
                    <div key={index}>
                      <Task
                        onClick={() => {
                          setCurrentTask(task);
                          if (sideBarPage !== 'update')
                            setSideBarPage('update');
                        }}
                      >
                        <b>
                          {index + 1}
                          {'.  '}
                        </b>
                        <span>{task.title}</span>{' '}
                        <span>
                          {task.startTime} - {task.endTime}
                        </span>
                        {' | '}
                        <span>{task.duration}</span>
                      </Task>
                      <hr />
                    </div>
                  );
                })
              )}
            </MainTaskArea>

            <TaskSideBar>
              {sideBarPage === 'add' ? (
                <AddTask />
              ) : (
                <UpdateTask task={currentTask} />
              )}
            </TaskSideBar>
          </TaskContainerBody>
        </TaskContainer>
      </div>
    </>
  );
};

export default Tasks;

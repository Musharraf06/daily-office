import React, { FC, useState } from 'react';
import { Task } from '../taskStyles';
import moment from 'moment';

interface task {
  _id: string;
  title: string;
  startTime: string;
  endTime: string;
  duration: string;
  createdDate: Date;
  week: number;
}

type viewTaskProps = {
  tasks: task[];
  setCurrentTask: (task: task) => void;
  setSideBarPage: (sidebar: string) => void;
};

const ViewTasks: FC<viewTaskProps> = ({
  tasks,
  setCurrentTask,
  setSideBarPage,
}) => {
  const [filteredTask, setFilteredTasks] = useState(tasks);

  const getTransformedDate = (date: Date | string) => {
    return moment(date).format('ddd MMM DD YYYY');
  };

  const filterByDates = (value: string) => {
    return tasks.filter((task) => {
      return getTransformedDate(task.createdDate) === getTransformedDate(value);
    });
  };

  return (
    <>
      <div
        style={{ margin: 6, display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <input
            type='date'
            name='date_picker'
            style={{ outline: 'none', border: 'none', padding: 3 }}
            onChange={(e) => {
              setFilteredTasks(filterByDates(e.target.value));
            }}
          />
          <span
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              margin: 3,
            }}
            onClick={() => {
              setFilteredTasks(tasks);
            }}
            title='Clear date'
          >
            &#10060;
          </span>
        </div>
        <div>
          <input
            type='text'
            style={{ outline: 'none', border: 'none', padding: 6 }}
            onChange={(e) => {
              const value = e.target.value;
              const searchResult = tasks.filter((task) =>
                task.title.toLowerCase().includes(value.toLowerCase())
              );
              setFilteredTasks(searchResult);
            }}
            placeholder='Search tasks'
          />
        </div>
      </div>
      <div>
        {filteredTask?.map((task, index) => {
          return (
            <div key={index}>
              <Task
                onClick={() => {
                  setCurrentTask(task);
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
        })}
      </div>
    </>
  );
};

export default ViewTasks;

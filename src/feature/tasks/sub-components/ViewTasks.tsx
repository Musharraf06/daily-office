import React, { FC, useState } from 'react';
import { Task, DateCloseIcon, FilterInput } from '../taskStyles';
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

  const handleSearch = (value: string) => {
    const searchResult = tasks.filter((task) =>
      task.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTasks(searchResult);
  };

  return (
    <>
      <div
        style={{ margin: 6, display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <FilterInput
            type='date'
            name='date_picker'
            style={{ padding: 4 }}
            onChange={(e) => {
              setFilteredTasks(filterByDates(e.target.value));
            }}
          />
          <DateCloseIcon
            onClick={() => {
              setFilteredTasks(tasks);
            }}
            title='Clear date'
          >
            &#10060;
          </DateCloseIcon>
        </div>
        <div>
          <FilterInput
            type='text'
            onChange={(e) => {
              handleSearch(e.target.value);
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

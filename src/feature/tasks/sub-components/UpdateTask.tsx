import React, { FC, useState, useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { updateTask } from '../taskSlice';
import { AddTaskContainer, Input, Label, LabelText } from './sidebarStyles';
import { getDuration } from '../../../helpers/getDuration';
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

const UpdateTask: FC<{ task: task }> = ({ task }) => {
  const [formValues, setFormValues] = useState<task>({
    _id: '',
    title: '',
    startTime: '00:00',
    endTime: '00:00',
    duration: '00:00',
    createdDate: new Date(),
    week: 0,
  });
  const dispatch = useAppDispatch();
  const handleFormChange = (Label: string, value: string) => {
    setFormValues((prev) => {
      return { ...prev, [Label]: value };
    });
  };

  const handleUpdate = () => {
    const duration = getDuration(formValues.startTime, formValues.endTime);
    const payload = Object.assign(
      { _id: formValues._id, duration },
      formValues
    );
    dispatch(updateTask(payload));
    setTimeout(() => {
      window.location.href = '/tasks';
    }, 300);
  };

  useEffect(() => {
    setFormValues(task);
  }, [task]);

  return (
    <AddTaskContainer>
      <b>Update task</b>
      <Label>
        <LabelText>Title</LabelText>
        <Input
          type='text'
          onChange={(e) => {
            handleFormChange('title', e.target.value);
          }}
          placeholder='task name'
          value={formValues.title}
          fieldValue={formValues.title}
        />
      </Label>
      <Label>
        <LabelText>Start time</LabelText>
        <Input
          type='text'
          onChange={(e) => {
            handleFormChange('startTime', e.target.value);
          }}
          placeholder='eg: hh:mm (24hr)'
          value={formValues.startTime}
          fieldValue={formValues.startTime}
        />
      </Label>
      <Label>
        <LabelText>End time</LabelText>
        <Input
          type='text'
          onChange={(e) => {
            handleFormChange('endTime', e.target.value);
          }}
          value={formValues.endTime}
          placeholder='eg: hh:mm (24hr)'
        />
      </Label>
      <Label>
        <LabelText>Duration</LabelText>
        <Input
          type='text'
          value={formValues.duration}
          disabled
          placeholder='eg: hh:mm (24hr)'
        />
      </Label>
      <div>
        <button onClick={handleUpdate}>Update</button>
      </div>
      <div
        style={{
          fontSize: 12,
          marginTop: '5px',
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>
          <b>Created Date:</b>{' '}
          {moment(formValues.createdDate).format('ddd MMM DD YYYY')}
        </span>
        <span>
          <b>Week:</b> {formValues.week}
        </span>
      </div>
    </AddTaskContainer>
  );
};

export default UpdateTask;

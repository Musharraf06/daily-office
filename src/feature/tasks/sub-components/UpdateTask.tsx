import React, { FC, useState, useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { updateTask } from '../taskSlice';
import { AddTaskContainer, Input, Label, LabelText, RadioContainer } from './sidebarStyles';
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
  category?: string;
  project?: string;
  clientName?: string;
  billable?: string;
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
      <Label>
        <LabelText>Category</LabelText>
        <Input
          type='text'
          value={formValues.category}
          onChange={(e) => {
            handleFormChange('category', e.target.value);
          }}
          placeholder='GBU project, Internal meeting, etc'
        />
      </Label>
      <Label>
        <LabelText>Project</LabelText>
        <Input
          type='text'
          value={formValues.project}
          onChange={(e) => {
            handleFormChange('project', e.target.value);
          }}
          placeholder='MySinergy, flashcard, etc'
        />
      </Label>
      <Label>
        <LabelText>Client Name</LabelText>
        <Input
          type='text'
          value={formValues.clientName}
          onChange={(e) => {
            handleFormChange('clientName', e.target.value);
          }}
          placeholder='Internal, Sanofi, etc'
        />
      </Label>
      <div style={{ display: 'grid', gridTemplateColumns: '6.4rem 12rem' }}>
        <LabelText>Billable</LabelText>
        <RadioContainer>
          {' '}
          <label>Yes
            <input
              name='billable'
              type='radio'
              value='Billable'
              onChange={(e) => {
                handleFormChange('billable', e.target.value);
              }}
            />
          </label>
          <label>No
            <input
              name='billable'
              type='radio'
              value='Non-Billable'
              onChange={(e) => {
                handleFormChange('billable', e.target.value);
              }}
            />
          </label>
        </RadioContainer>
      </div>
      <div style={{ margin: '0.8rem' }}>
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

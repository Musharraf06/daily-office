import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { addtask } from '../taskSlice';
import {
  AddTaskContainer,
  Input,
  Button,
  Label,
  LabelText,
  RadioContainer
} from './sidebarStyles';
import { getDuration } from '../../../helpers/getDuration';
import moment from 'moment';

interface formValue {
  title: string;
  startTime: string;
  endTime: string;
}

const AddTask: FC = () => {
  const [formValues, setFormValues] = useState<formValue>({
    title: '',
    startTime: '00:00',
    endTime: '00:00',
  });
  const dispatch = useAppDispatch();

  const handleFormChange = (Label: string, value: string) => {
    setFormValues((prev) => {
      return { ...prev, [Label]: value };
    });
  };

  const handleTaskAdd = () => {
    const duration = getDuration(formValues.startTime, formValues.endTime);
    const week = moment().isoWeek();
    dispatch(addtask(Object.assign(formValues, { duration, week })));
    setTimeout(() => {
      window.location.href = '/tasks';
    }, 300);
  };

  return (
    <AddTaskContainer>
      <b>Add task</b>
      <Label>
        <LabelText>
          Title<sup style={{ color: 'red' }}>*</sup>
        </LabelText>
        <Input
          type='text'
          onChange={(e) => {
            handleFormChange('title', e.target.value);
          }}
          placeholder='task name'
          fieldValue={formValues.title}
        />
      </Label>
      <Label>
        <LabelText>
          Start time<sup style={{ color: 'red' }}>*</sup>
        </LabelText>
        <Input
          type='text'
          onChange={(e) => {
            handleFormChange('startTime', e.target.value);
          }}
          placeholder='eg: hh:mm (24hr)'
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
          placeholder='eg: hh:mm (24hr)'
        />
      </Label>
      <Label>
        <LabelText>Category</LabelText>
        <Input
          type='text'
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
      <div style={{ margin: '0.6rem' }}>
        <Button onClick={handleTaskAdd} fieldValue={formValues}>
          Add
        </Button>
      </div>
    </AddTaskContainer>
  );
};

export default AddTask;

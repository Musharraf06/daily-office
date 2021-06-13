import React, { useEffect } from 'react';
import Header from '../header/Header';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTasks } from '../tasks/taskSlice';
import { Table } from 'rsuite'
import { download, updateTimeSheet } from './generateXLSX'
const { Column, HeaderCell, Cell, } = Table;

const Timesheet = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.data);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="action-btn">
        <button onClick={() => { download(tasks) }}>Downlaod</button>
        <button onClick={() => { updateTimeSheet(tasks) }}>Update</button>
      </div>
      <div className="table"><pre>{JSON.stringify(tasks, null, 2)}</pre></div>
      {/* <div className="table">
        <Table data={tasks}>
          
        </Table>
      </div> */}
    </>
  );
};

export default Timesheet;

import XLSX from 'xlsx';
import moment from 'moment';
import { config } from './timesheetConfig';
import axios from 'axios';
import { appConfig } from '../../appConfig';

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

const structureData = (data: task[]) => {
  if (data.length > 0) {
    return data.map((d) => {
      const date = moment(d.createdDate).format('MM/DD/YYYY');
      const ret = {
        title: d.title,
        [date]: d.duration,
        category: d.category,
        project: d.project,
        clientName: d.clientName,
        billable: d.billable,
        week: d.week,
      };
      return Object.assign({}, config, ret);
    });
  } else return [];
};

export const updateTimeSheet = (data: task[]) => {
  const weekNumber: number = moment().isoWeek();
  const fileName = `Mohammed Musharaff Ameen_week24_actuals.xlsx`;
  // const fileName = `Mohammed Musharaff Ameen_week${weekNumber}_actuals.xlsx`;
  const file = `/home/musharraf/Downloads/${fileName}`;
  // const file = `../../sheet/${fileName}`;
  const sheetName = 'Actuals';
  const ret = structureData(data);
  const currWeekDt = ret.filter((c) => c.week === weekNumber);
  axios
    .post(`${appConfig.api}/timesheet/update`, {
      sheetName,
      file,
      data: currWeekDt,
    })
    .then(() => console.log('updated'))
    .catch(() => console.log('error'));
};

export const download = (data: task[]) => {
  const weekNumber: number = moment().isoWeek();
  const fileName = `Mohammed Musharaff Ameen_week${weekNumber}_actuals.xlsx`;
  const sheetName = 'Actuals';
  const ret = structureData(data);
  console.log('ret: ', ret);
  /* generate worksheet */
  const ws = XLSX.utils.json_to_sheet(ret);
  /* generate workbook and add worksheet */
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, fileName);
};

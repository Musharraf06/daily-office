import moment from 'moment';

export const getDuration = (startTime: string, endTime: string): string => {
  let startTimeSeperate = startTime.split(/:/);
  let endTimeSeperate;
  if (endTime !== '') {
    endTimeSeperate = endTime.split(/:/);
  } else {
    endTimeSeperate = ['00', '00'];
  }
  const date = moment().format('DD/MM/YYYY');
  const taskStart = `${date} ${startTimeSeperate[0]}:${startTimeSeperate[1]}`;
  const taskEnd = `${date} ${endTimeSeperate[0]}:${endTimeSeperate[1]}`;

  const duration = moment
    .utc(
      moment(taskEnd, 'DD/MM/YYYY HH:mm').diff(
        moment(taskStart, 'DD/MM/YYYY HH:mm')
      )
    )
    .format('HH:mm');

  return duration;
};

// export const getDuration1 = (startTime: string, endTime: string): string => {
//   let startTimeSeperate = startTime.split(/:/);
//   let endTimeSeperate;
//   if (endTime !== '') {
//     endTimeSeperate = endTime.split(/:/);
//   } else {
//     endTimeSeperate = ['00', '00'];
//   }
//   let hours = 0,
//     minutes = 0;
//   const transformMinute = (mm: string) => mm;
//   // const transformMinute = (mm: string) => (mm === '00' ? '60' : mm);
//   console.log(
//     parseInt(transformMinute(endTimeSeperate[1])),
//     parseInt(transformMinute(startTimeSeperate[1]))
//   );
//   minutes =
//     parseInt(transformMinute(endTimeSeperate[1])) >
//     parseInt(transformMinute(startTimeSeperate[1]))
//       ? parseInt(transformMinute(endTimeSeperate[1])) -
//         parseInt(transformMinute(startTimeSeperate[1]))
//       : parseInt(transformMinute(startTimeSeperate[1])) -
//         parseInt(transformMinute(endTimeSeperate[1]));
//   hours =
//     parseInt(endTimeSeperate[0]) > parseInt(startTimeSeperate[0])
//       ? parseInt(endTimeSeperate[0]) - parseInt(startTimeSeperate[0]) - 1
//       : parseInt(startTimeSeperate[0]) - parseInt(endTimeSeperate[0]) - 1;

//   hours = hours > 1 ? hours + 1 : hours === -1 ? 0 : hours;
//   if (minutes === 60) {
//     hours += 1;
//     minutes = 0;
//   }
//   const duration = `${hours === 0 ? '00' : hours}:${
//     minutes === 0 ? '00' : minutes
//   }`;

//   return duration;
// };

// export const getDuration0 = (startTime: string, endTime: string): string => {
//   let startTimeSeperate = startTime.split(/:/);
//   let endTimeSeperate;
//   if (endTime !== '') {
//     endTimeSeperate = endTime.split(/:/);
//   } else {
//     endTimeSeperate = ['00', '00'];
//   }
//   let hours = 0,
//     minutes = 0;

//   minutes =
//     60 - (parseInt(endTimeSeperate[1]) - parseInt(startTimeSeperate[1]));
//   hours = parseInt(endTimeSeperate[0]) - parseInt(startTimeSeperate[0]) - 1;
//   hours = hours === -1 ? 0 : hours;
//   if (minutes === 60) {
//     hours += 1;
//     minutes = 0;
//   }
//   const duration = `${hours === 0 ? '00' : hours}:${
//     minutes === 0 ? '00' : minutes
//   }`;

//   return duration;
// };

import { addHours, addMinutes } from 'date-fns';
import { AvailableAppoiment } from '../core/models/availableAppoiment';
import { ScheduleConfig } from '../core/models/scheduleConfig';

export function* appoimentsGen(date: Date, scheduleConfig: ScheduleConfig) {
  const endDate = addHours(
    date,
    scheduleConfig.endShift - scheduleConfig.startedShift
  );

  let nextAppoiment: AvailableAppoiment = new AvailableAppoiment(
    addMinutes(date, scheduleConfig.timeInterval)
  );
  do {
    nextAppoiment = new AvailableAppoiment(
      addMinutes(nextAppoiment.date, scheduleConfig.timeInterval)
    );

    yield nextAppoiment;
  } while (nextAppoiment.date < endDate);
}

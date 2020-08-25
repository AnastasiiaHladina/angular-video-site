const dateOffset = (60 * 60 * 24) * 14;

export function byDateStatus(courseCreatedAt: number) {
  const currentDate = Date.now() / 1000;
  const isFreshCourse = ((courseCreatedAt < currentDate) && (courseCreatedAt >= (currentDate - dateOffset)));
  const ifWillBeReleasedCourse = (courseCreatedAt > currentDate);
  return {isFreshCourse, ifWillBeReleasedCourse};
}


export function compareByCreatedAt(date1, date2): number {
  if (date1.date > date2.date) {
    return -1;
  } else if (date1.date < date2.date) {
    return 1;
  } else {
    return 0;
  }
}


export function getDate(date: Date) {
    date = new Date(date);
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    return [
      date.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd,
    ].join('-');
}

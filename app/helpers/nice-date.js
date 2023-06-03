import { helper } from '@ember/component/helper';

export function niceDate(data) {
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const neededParts = ['month', 'day', 'year'];
  const locale = 'en-US';
  const date = new Date(data);
  const dateTimeFormat = new Intl.DateTimeFormat(locale, options);
  const dateParts = {};
  dateTimeFormat.formatToParts(date)
    .forEach(p => {
      if (neededParts.includes(p.type)) {
        dateParts[p.type] = p.value;
      }
    });
    return `${dateParts.month} ${dateParts.day}, ${dateParts.year}`;
}

export default helper(niceDate);

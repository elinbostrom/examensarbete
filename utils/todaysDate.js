export const todaysDate = () => {
  const date = new Date();
  let today = date.getMonth().length === 1
    ? date.getFullYear().toString() + (date.getMonth() + 1).toString() + date.getDate().toString()
    : date.getFullYear().toString() + '0' + (date.getMonth() + 1).toString() + date.getDate().toString();

  return ++today;
}
import * as mockedList from '../assets/test.json';

export function apiGetListAsync(skip) {
  const fullList = Object.values(mockedList);
  const updatedList = fullList.slice(skip, skip + 25);
  return updatedList;
}

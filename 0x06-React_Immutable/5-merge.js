import { List, Map } from 'immutable';

export function concatElements(page1, page2)  {
  return(List(page1).concat(List(page2)));
}

export function mergeElement(page1, page2) {
  return(Map(page1).merge(Map(page2)));
}

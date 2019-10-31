import {ajax} from 'rxjs/ajax';
import {concat, of} from 'rxjs';
import {map, switchMap, delay} from 'rxjs/operators';
import {fecthUserSuccessAC, fecthUserStartAC, FETCH_USER} from '../actions/user';
import {ofType} from 'redux-observable';

const url = 'https://api.github.com/users/mykhailo418';

export const fetchUser = action$ => action$.pipe(
  ofType(FETCH_USER),
  switchMap(() => concat(
      of(fecthUserStartAC()),
      ajax.getJSON(url).pipe(
        delay(2000),
        map(fecthUserSuccessAC)
      )
    )
  )
);

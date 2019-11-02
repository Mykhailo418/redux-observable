import {ajax} from 'rxjs/ajax';
import {concat, of} from 'rxjs';
import {map, switchMap, delay, catchError} from 'rxjs/operators';
import {fecthUserSuccessAC, fecthUserStartAC, fecthUserErrorAC, FETCH_USER} from '../actions/user';
import {ofType} from 'redux-observable';

const url = 'https://api.gitjhub.com/users/mykhailo418';

export const fetchUser = action$ => action$.pipe(
  ofType(FETCH_USER),
  switchMap(() => concat(
      of(fecthUserStartAC()),
      ajax.getJSON(url).pipe(
        //delay(2000),
        map(fecthUserSuccessAC),
        catchError(err => of(fecthUserErrorAC()))
      )
    )
  )
);

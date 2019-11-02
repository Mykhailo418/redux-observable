import {ajax} from 'rxjs/ajax';
import {concat, of} from 'rxjs';
import {map, switchMap, catchError, delay} from 'rxjs/operators';
import {FETCH_POSTS, fecthPostsStartAC, fecthPostsErrorAC, fecthPostsSuccessAC} from '../actions/posts';
import {ofType} from 'redux-observable';

const url = 'http://jsonplaceholder.typicode.com/posts';

export const fetchPosts = action$ => action$.pipe(
  ofType(FETCH_POSTS),
  switchMap(() => concat(
      of(fecthPostsStartAC()),
      ajax.getJSON(url).pipe(
        delay(4000),
        map(fecthPostsSuccessAC),
        catchError(err => of(fecthPostsErrorAC()))
      )
    )
  )
);

import {ajax} from 'rxjs/ajax';
import {concat, of, merge, fromEvent} from 'rxjs';
import {map, switchMap, catchError, delay, filter, takeUntil} from 'rxjs/operators';
import {FETCH_POSTS, CANCEL_FETCH_POSTS, fecthPostsStartAC, fecthPostsErrorAC, fecthPostsSuccessAC} from '../actions/posts';
import {ofType} from 'redux-observable';

const url = 'http://jsonplaceholder.typicode.com/posts';

export const fetchPosts = action$ => action$.pipe(
  ofType(FETCH_POSTS),
  switchMap(() => {

    const cancel$ = merge(
      action$.pipe(ofType(CANCEL_FETCH_POSTS)),
      fromEvent(document, 'keyup').pipe(
        filter(e => e.key === 'Escape' || e.key === 'Esc')
      )
    );

    const ajax$ = ajax.getJSON(url).pipe(
      delay(4000),
      takeUntil(cancel$),
      map(fecthPostsSuccessAC),
      catchError(err => of(fecthPostsErrorAC()))
    );

    return concat(
      of(fecthPostsStartAC()),
      ajax$
    );
  })
);

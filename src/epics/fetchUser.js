import {ajax} from 'rxjs/ajax';
import {map} from 'rxjs/operators';
import {fecthUserAC} from '../actions/user';

const url = 'https://api.github.com/users/mykhailo418';

export const fetchUser = () => ajax.getJSON(url).pipe(
  map(fecthUserAC)
);

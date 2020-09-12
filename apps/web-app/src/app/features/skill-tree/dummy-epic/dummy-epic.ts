import {Epic} from 'redux-observable';
import {of} from 'rxjs';
import {first, switchMap, tap} from 'rxjs/operators';
import {appBootstrap} from '../../../platform/app-bootstrap';
import {AppState} from '../../../state/app-state';

export const dummyEpic: Epic<any, any, AppState> = (action$, state$) => action$
  .ofType(appBootstrap.type)
  .pipe(
    first(),
    tap(() => console.log('App bootstrapped')),
    switchMap(_ => of())
  );

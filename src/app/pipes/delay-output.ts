import { Observable, pipe } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading/loading.service';

export type DelayOutput = <T>(source: Observable<T>) => Observable<T>;

export function delayOutput(loadingService: LoadingService): DelayOutput {
  return pipe(
    delay(1000),
    finalize(() => {
      loadingService.setIsVisibleLoading(false);
    }),
  );
}

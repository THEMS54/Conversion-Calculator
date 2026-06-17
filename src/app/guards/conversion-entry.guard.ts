import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const conversionEntryGuard: CanActivateFn = () => {
  const router = inject(Router);

  const fromCurrentNavigation =
    router.getCurrentNavigation()?.extras.state?.["fromHome"] === true;
  const fromHistoryState = history.state?.fromHome === true;

  if (fromCurrentNavigation || fromHistoryState) {
    return true;
  }

  return router.parseUrl("/home");
};

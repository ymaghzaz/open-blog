import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs/Subject";
import { selectorAuth } from "../core/index";
import { takeUntil } from "rxjs/operators/takeUntil";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { ManageAuthService } from "../services/manage-auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();
  isAuthenticated;
  constructor(
    private store: Store<any>,
    public manageAuth: ManageAuthService,
    private router: Router
  ) {
    this.store
      .select(selectorAuth)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }

  ngOnInit() {}

  logout() {
    this.manageAuth.onLogoutClick();
    this.router.navigate(["/"]);
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

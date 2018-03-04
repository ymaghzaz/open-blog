import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { selectorAuth } from '../core/index';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();
  isAuthenticated;
  constructor(
    private store: Store<any>

  ) {
    this.store
      .select(selectorAuth)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

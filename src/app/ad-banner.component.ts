import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from './ad.directive';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroProfileAltComponent } from './hero-profile-alt.component';
import { Slot2Directive } from './slot2.directive';
@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template adHost></ng-template>

      <button (click)="loadComponent()">Load Main</button>
      <button (click)="loadAltComponent()">Load Alt</button>
      <button (click)="loadSlot2Component()">Load Slot 2</button>
      <button (click)="clearComponent()">CLEAR</button>

      <ng-template slot2></ng-template>

    </div>
  `,
})
export class AdBannerComponent implements OnInit {
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  @ViewChild(Slot2Directive, { static: true }) slot2!: AdDirective;

  ngOnInit(): void {
    // this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<HeroProfileComponent>(
        HeroProfileComponent
      );
  }

  loadAltComponent() {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<HeroProfileAltComponent>(
        HeroProfileAltComponent
      );
  }

  loadSlot2Component() {
    const viewContainerRef = this.slot2.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<HeroProfileAltComponent>(
        HeroProfileAltComponent
      );
  }

  clearComponent() {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const viewContainerRef2 = this.slot2.viewContainerRef;
    viewContainerRef2.clear();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

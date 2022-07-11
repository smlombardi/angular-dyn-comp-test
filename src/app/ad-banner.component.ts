import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from './ad.directive';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroProfileAltComponent} from './hero-profile-alt.component'

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template adHost></ng-template>

      <button (click)="loadComponent()">Load Main</button>
      <button (click)="loadAltComponent()">Load Alt</button>
      <button (click)="clearComponent()">CLEAR</button>
    </div>
  `,
})
export class AdBannerComponent implements OnInit {
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

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

  clearComponent() {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

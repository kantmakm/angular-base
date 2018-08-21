// Core Libraries
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

// Routing
import { routing } from './app.routing';

// Top Level Component
import { AppComponent } from './app.component';

// Services
import { TestService } from './services/test.service';

// Views
import { NotFoundComponent } from './views/notfound/notfound.component';
import { HomeComponent } from './views/home/home.component';
import { HelloWorldComponent } from './views/helloworld/helloworld.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HelloWorldComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    TestService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

import { NgModule } from '@angular/core';

//  IMPORT INTERNAL MODULE
import { BrowserModule } from '@angular/platform-browser';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//  ROUTING
import { AppRoutingModule } from './app-routing.module';

//  COMPONENT
import { AppComponent } from './app.component';

//  IMPORT FEATURE MODULE
import { MissionsModule } from './missions/missions.module';
import { ForumModule } from './forum/forum.module';
import { CompetencesModule } from './competences/competences.module';
import { LoginModule } from './login/login.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

// SERVICE
import { LoggerService } from './services/logger.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    AppRoutingModule,

    LoginModule,
    CompetencesModule,
    ForumModule,
    MissionsModule,
    HeaderModule,
    FooterModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    LoggerService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [],
})
export class AppModule { }

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
import { LoginModule } from './login/login.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

// SERVICE
import { LoggerService } from './login/services/logger.service';
import { MenuService } from './services/MenuService.service';
import { SideMenuComponent } from './side-menu/components/side-menu.component';
import { ErrorService } from './services/error.service';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    AppRoutingModule,
  ],
  providers: [
    LoggerService,
    MenuService,
    ErrorService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [SideMenuComponent],
})
export class AppModule { }

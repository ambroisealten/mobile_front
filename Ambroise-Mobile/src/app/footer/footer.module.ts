//  MODULES NEEDED
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  COMPONENTS
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [FooterComponent]
})
export class FooterModule { }

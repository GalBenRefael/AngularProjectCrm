import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, NotificationComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, NavbarComponent, NotificationComponent],
})
export class SharedModule {}

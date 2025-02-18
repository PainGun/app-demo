import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-item-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar-item-link.component.html',
  styleUrl: './sidebar-item-link.component.css'
})
export class SidebarItemLinkComponent {

  @Input() link: string = "";
  @Input() title: string = "";
}

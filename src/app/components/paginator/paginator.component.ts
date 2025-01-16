import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'paginator',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() url: string = '';
  @Input() paginator: any = {};

  
}

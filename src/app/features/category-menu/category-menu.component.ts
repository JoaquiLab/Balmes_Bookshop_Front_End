import { Component, Input } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryNode } from '@features/dashboard';

@Component({
  selector: 'cl-category-menu',
  templateUrl: './category-menu.component.html',
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
})
export class CategoryMenuComponent {
  @Input() dataSource: CategoryNode[] = [];

  protected childrenAccessor = (node: CategoryNode) => node.children ?? [];
  protected hasChild = (_: number, node: CategoryNode) =>
    !!node.children && node.children.length > 0;
}

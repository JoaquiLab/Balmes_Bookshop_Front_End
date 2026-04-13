import { Component, Input } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryTreeNode } from '@features/dashboard';

@Component({
  selector: 'cl-category-menu',
  templateUrl: './category-menu.component.html',
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
})
export class CategoryMenuComponent {
  @Input() dataSource: CategoryTreeNode[] = [];

  protected childrenAccessor = (node: CategoryTreeNode) => node.children ?? [];
  protected hasChild = (_: number, node: CategoryTreeNode) =>
    !!node.children && node.children.length > 0;
}

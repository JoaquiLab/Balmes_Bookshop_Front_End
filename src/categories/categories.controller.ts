import { Controller, Get } from '@nestjs/common';
import type {
  CategoryMenuResponse,
  CategoryTreeNode,
} from './interfaces/categories.interface';

@Controller('categories')
export class CategoriesController {
  MENU_CATEGORY_NODES: CategoryTreeNode[] = [
    {
      name: 'Los imprescindibles',
      children: [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Fruit loops' },
      ],
    },
    {
      name: 'Religión',
      children: [
        {
          name: 'Catequesis',
        },
        {
          name: 'Historia de la iglesia',
        },
      ],
    },
    {
      name: 'Humanidades',
      children: [
        {
          name: 'Green',
          children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
        },
        {
          name: 'Ciencias Naturales',
          children: [
            {
              name: 'Bioetica',
            },
            {
              name: 'Evolucionismo',
            },
            {
              name: 'Salud',
            },
          ],
        },
      ],
    },
  ];

  //GetCategories
  @Get() // /Categories
  findAll(): CategoryMenuResponse {
    return { categoryMenuNodes: this.MENU_CATEGORY_NODES };
  }
}

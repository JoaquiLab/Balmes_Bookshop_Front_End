import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CategoryMenuResponse } from '../../interfaces/category-node.interface';

export const categoryMenuActions = createActionGroup({
  source: 'categoryMenu',
  events: {
    'Load categoryMenu': emptyProps(),
    'Load categoryMenu Success': props<{ categoryMenuResponse: CategoryMenuResponse }>(),
    'Load categoryMenu Failure': props<{ message: string }>(),
  },
});

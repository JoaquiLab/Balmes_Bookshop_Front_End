import { createActionGroup, props } from '@ngrx/store';
import { GridProductResponse } from '../../interfaces/product-grid-response.interface';


export const gridProductActions = createActionGroup({
  source: 'gridProduct',
  events: {
    'Load gridProduct': props<{ key: string }>(),
    'Load gridProduct Success': props<{ gridProductResponse: GridProductResponse }>(),
    'Load gridProduct Failure': props<{ message: string }>(),
  },
});


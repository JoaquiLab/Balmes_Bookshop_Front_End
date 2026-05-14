import { createActionGroup, props } from '@ngrx/store';
import { GridProductResponse, SearchConfig } from '../../interfaces/product-grid-product-interfaces';


export const gridProductActions = createActionGroup({
  source: 'gridProduct',
  events: {
    'Load gridProduct': props<{ searchConfig: SearchConfig }>(),
    'Load gridProduct Success': props<{ gridProductResponse: GridProductResponse }>(),
    'Load gridProduct Failure': props<{ message: string }>(),
  },
});


import { brandsApi } from '@/entities/brands/model/api'
import { cartApi } from '@/entities/cart/model/api'
import { categoriesApi} from '@/entities/categories/model/api'
import { productsApi } from '@/entities/products/model/api'
import { baseApi } from '@/shared/baseApi/api'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
	return configureStore({
		reducer: {
			[categoriesApi.reducerPath]: categoriesApi.reducer,
			[productsApi.reducerPath]: productsApi.reducer,
			[cartApi.reducerPath]: cartApi.reducer,
			[baseApi.reducerPath]: baseApi.reducer,
			[brandsApi.reducerPath]: brandsApi.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				categoriesApi.middleware,
				productsApi.middleware,
				cartApi.middleware,
				baseApi.middleware,
				brandsApi.middleware,
			),
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

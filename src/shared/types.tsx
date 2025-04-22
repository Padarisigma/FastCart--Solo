export interface Product {
	count: any
	id: number;
	productName: string;
	image: string;
	color: string;
	price: number;
	hasDiscount: boolean;
	discountPrice: number;
	quantity: number;
	productInMyCart: boolean;
	categoryId: number;
	categoryName: string;
	productInfoFromCart: null
 }
 export interface IProduct2 {
	id: number | string
	productName: string
	image: string
	color: string
	price: number
	hasDiscount: boolean
	discountPrice: number
	originalPrice: number
	quantity: number | string
	productInMyCart: boolean
	categoryId: number
	categoryName: string
	productInfoFromCart: null
	rating: number
	reviewCount: number
}
 // Если это массив товаров:
 export type Products = Product[];
 

 export interface Categories {
  id:number ,
  categoryName: string,
  categoryImage: string
 }

 export interface IUserLogin {
	userName: string
	password: string
}


export interface IUser {
	userName: string
	phoneNumber: string
	email: string
	password: string
	confirmPassword: string
}

export interface Carts {
  productsInCart: any,
	"totalProducts": number,
      "totalPrice": number,
      "totalDiscountPrice": number
}

export interface ProductInCart {
	product: any,
	"id": number,
            "productName": string,
            "image": string,
            "color": string,
            "price": number,
            "hasDiscount": boolean,
            "discountPrice": number,
            "quantity": number,
            "productInMyCart": boolean,
            "categoryId": number,
            "categoryName": null,
            "productInfoFromCart": null
}

export interface Brands{
	 "id": number,
      "brandName": string
}


export interface IProduct2 {
	id: number | string
	productName: string
	image: string
	color: string
	price: number
	hasDiscount: boolean
	discountPrice: number
	originalPrice: number
	quantity: number | string
	productInMyCart: boolean
	categoryId: number
	categoryName: string
	productInfoFromCart: null
	rating: number
	reviewCount: number
}


export interface ProductCardProps {
	id: string
	name: string
	image: string
	price: number
	originalPrice: number
	discount?: number
	rating: number
	reviewCount: number
}

export interface IDecode {
	aud: string
	email: string
	exp: number
	iss: string
	name: string
	sid: string
	sub: string
}
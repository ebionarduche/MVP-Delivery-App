export interface IProducts {
  id: number,
  productName: string,
  restaurantId: number,
  typeId: number,
  description: string,
  price: number,
  illustration: string,
}

export interface IProductsModel {
  findAll(): Promise<IProducts[]>;
  findByProductType(typeid: number, restaurantsId: number): Promise<IProducts[]>;
}

export interface IProducts {
  id: number,
  name: string,
  restaurantId: number,
  typeId: number,
  description: string,
  price: number,
  illustration: string,
}

export interface IProductsModel {
  findAll(): Promise<IProducts[]>;
}

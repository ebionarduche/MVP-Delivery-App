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
  findByProductType(id: number): Promise<IProducts[]>;
}

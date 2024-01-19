export interface IRestaurants {
  id: number,
  restaurantName: string,
  categoryId: number,
  description: string,
  address: string,
  phone: string,
  logo: string,
}

export interface IRestaurantsModel {
  findAll(): Promise<IRestaurants[]>;
}

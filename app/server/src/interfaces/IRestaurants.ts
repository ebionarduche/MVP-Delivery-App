export interface IRestaurants {
  id: number,
  restaurantName: string,
  categoryId: number,
  resume: string,
  address: string,
  phone: string,
  logo: string,
}

export interface IRestaurantsModel {
  findAll(): Promise<IRestaurants[]>;
  findByQuery(query: string): Promise<IRestaurants[]>;
}

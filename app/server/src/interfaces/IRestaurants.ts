export interface IRestaurants {
  id: number,
  restaurantName: string,
  categoryId: number,
  resume: string,
  address: string,
  phone: string,
  logo: string,
  wallpaper: string,
}

export interface IRestaurantsModel {
  findAll(): Promise<IRestaurants[]>;
  findByQuery(query: string): Promise<IRestaurants[]>;
  findById(id: number): Promise<IRestaurants[]>;
  findByCategoryId(id: number): Promise<IRestaurants[]>;
}

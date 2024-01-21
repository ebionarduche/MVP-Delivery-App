export interface ICategories {
  id: number,
  category: string
  image: string
}

export interface ICategoriesModel {
  findAll(): Promise<ICategories[]>;
}

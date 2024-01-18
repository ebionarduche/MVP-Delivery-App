export interface ICategories {
  id: number,
  category: string
}

export interface ICategoriesModel {
  findAll(): Promise<ICategories[]>;
}

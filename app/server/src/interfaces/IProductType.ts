export interface IProductType {
  id: number,
  type: string
}

export interface IProductTypeModel {
  findAll(): Promise<IProductType[]>;
}

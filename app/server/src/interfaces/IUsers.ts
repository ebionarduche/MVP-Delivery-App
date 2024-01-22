export interface IUsers {
  id: number,
  userName: string,
  email: string,
  password: string,
  address: string,
  phone: string,
}

export interface ILogin {
  email: string,
  password: string
}

export interface IToken {
  token: string;
}



export interface IUsersModel {
  findbyEmail(email: IUsers['email']): Promise<IUsers | null>
  createNewUser(user: IUsers): Promise<IUsers | null>
}
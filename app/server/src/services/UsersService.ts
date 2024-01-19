import * as bcrypt from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import { IUsersModel, IUsers, ILogin } from '../interfaces/IUsers';
import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class UsersService {
	constructor(private usersModel: IUsersModel = new UsersModel(),) {}

	public async login(data: ILogin): Promise<ServiceResponse<IUsers>> {
		const user = await this.usersModel.findbyEmail(data.email);
		if(!user || !bcrypt.compareSync(data.password, user.password)) {
			return {status: 'UNAUTHORIZED', data: {message:'Invalid email or password'}};
		}
		return {status: 'SUCCESS', data: user};
	}
}
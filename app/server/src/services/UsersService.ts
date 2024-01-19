import * as bcrypt from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import { IUsersModel, ILogin, IToken } from '../interfaces/IUsers';
import { ServiceResponse, ServiceResponseError } from '../interfaces/ServiceResponse';
import Token from '../auth/Token';


export default class UsersService {
	constructor(
		private usersModel: IUsersModel = new UsersModel(),
		private JWT = new Token()
	) {}

	public async login(data: ILogin): Promise<ServiceResponse<IToken | ServiceResponseError>> {

		const user = await this.usersModel.findbyEmail(data.email);
		if(!user) {
			return {status: 'UNAUTHORIZED', data: {message:'Invalid email or password'}};
		}

		const { password, ...payload } = user;
		if(!bcrypt.compareSync(data.password, password)) {
			return {status: 'UNAUTHORIZED', data: {message:'Invalid email or password'}};
		}

		const token = this.JWT.generateToken(payload);

		return {status: 'SUCCESS', data: { token }};
	}
}
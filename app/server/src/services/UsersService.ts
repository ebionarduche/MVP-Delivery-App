import * as bcrypt from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import { IUsersModel, ILogin, IToken, IUsers } from '../interfaces/IUsers';
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

	public async CreateNewUser(data: IUsers): Promise<ServiceResponse<IToken | ServiceResponseError>> {
		const user = await this.usersModel.findbyEmail(data.email);
		if (user) {
			return { status: 'BAD_REQUEST', data: { message: 'Email already exists' } };
		}

		const { password, ...rest } = data;

		const hashedPassword = bcrypt.hashSync(password, 8);
		await this.usersModel.createNewUser({ ...rest, password: hashedPassword });

		// Após a criação bem-sucedida do usuário, faça o login automaticamente
		const loginData: ILogin = { email: data.email, password: data.password };
		const loginResponse = await this.login(loginData);

		if (loginResponse.status === 'SUCCESS') {
			// Se o login for bem-sucedido, retorne o token gerado
			return loginResponse;
		} else {
			// Se houver um problema no login, trate o erro adequadamente
			return { status: 'ERROR', data: { message: 'Failed to automatically log in after user creation' } };
		}
	}
}
import Users from '../database/model/Users';
import { IUsers, IUsersModel } from '../interfaces/IUsers';

export default class UsersModel implements IUsersModel {
	private model = Users;

	async findbyEmail(email: string): Promise<IUsers | null> {
		const user = await this.model.findOne({ where: { email } });

		if(!user) return null;
		return user.dataValues;
	}

	async createNewUser(user: IUsers): Promise<IUsers | null> {
		const newUser = await this.model.create(user);

		if(!user) return null;
		return newUser.dataValues;
	}
}

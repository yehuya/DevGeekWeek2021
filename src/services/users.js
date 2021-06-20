export default class UsersService {
    static async getAllUsers() {
        return await fetch('https://randomuser.me/api/?results=10');
    }
}
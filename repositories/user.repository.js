


class UserRepository {
    // Enquanto não temos uma tabela SQL, vamos simular uma com um array e usá-la semelhantemente
    users = [];

    findByUsername(username) {
        // SELECT * FROM USERS WHERE USERNAME = '' LIMIT 1
        const userExists = this.users.find((user) => user.username === username);
        return userExists;
    }

    save(user) {
        // INSERT INT USERS(USERNAME, NAME) VALUES('', '');
        const id = Math.random().toString();
        const userWithId = {
            ...user,
            id
        };
        this.users.push(userWithId);
        return userWithId;
    }

}

export default new UserRepository();

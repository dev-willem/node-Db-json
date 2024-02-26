import UserRepository from "../repositories/user.repository";

class CreateUserService {

    execute(data) {

        /*
        username
        name
        id
        */

        if (!data.username) {
            throw new Error("Username é obrigatório!")
        }

        const userRepository = UserRepository;

        // Verificar se o nome de usuario existe no banco de dados
        const existUser = UserRepository.findByUsername(data.username);

        if (existUser) {
            throw new Error("Usuário já cadastrado!")
        }

        // Salvar o usuario

        userRepository.save(data);

        // Chamar o repositorio
    }

}

export { CreateUserService };

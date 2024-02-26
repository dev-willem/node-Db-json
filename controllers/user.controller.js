

class UserController {

    handle(request, response) {
        const { body } = request;

        // Chamar a camada de seviços
        try {
        const createUserService = new CreateUserService();
        const result = createUserService.execute(body);
        return response.json(result);
        } catch (err) {
            return response.status(400).json({
                err: err.message,
            });
        }
    }

}

export { UserController };

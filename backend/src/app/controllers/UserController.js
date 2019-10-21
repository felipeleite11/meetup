import User from '../models/User'

class UserController {
    async store(req, res) {
        const { email } = req.body

        if(!email) {
            return res.status(400).json({ msg: 'E-mail não fornecido.' })
        }

        const userExists = await User.findOne({
            where: { email }
        })

        if(userExists) {
            return res.status(400).json({ msg: 'Já existe um usuário cadastrado com este e-mail.' })
        }

        const { id, name, phone } = await User.create(req.body)

        return res.json({ id, name, email, phone })
    }

    async update(req, res) {
        const { email, oldPassword } = req.body

        const user = await User.findByPk(req.userId)

        //Verifica se o usuário está editando o e-mail
        if(email && email !== user.email) {
            const userExists = await User.findOne({
                where: { email }
            })

            if(userExists) {
                return res.status(400).json({ msg: 'Já existe um usuário cadastrado com este e-mail.' })
            }
        }

        if(oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json({ msg: 'A senha atual está incorreta.' })
        }

        const { id, name } = await user.update(req.body)

        return res.json({ id, name, email })
    }
}
export default new UserController()

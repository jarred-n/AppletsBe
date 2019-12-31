const {db} = require('../../core/db');
const {Sequelize, Model} = require('Sequelize');
const {AuthFailed} = require('../../core/http-exception')
const bcrypt = require('bcryptjs');

class User extends Model {
    static async verifyEmailPassword(email, plainPassword) {
        const user = await User.findOne({
            where: {
                email
            }
        })
        if(!user) {
            throw new AuthFailed('账号不存在');
        }
        const corret = bcrypt.compareSync(plainPassword, user.password);
        if(!corret) {
            throw new AuthFailed('密码不正确');
        }
        return user;
    }
}

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nickname: Sequelize.STRING,
    email: {
       type: Sequelize.STRING,
       unique: true
    },
    password: {
        type: Sequelize.STRING,
        set(val){
            const salt = bcrypt.genSaltSync(10);
            const psw = bcrypt.hashSync(val, salt);
            this.setDataValue('password', psw)
        }
    },
    openid: {
        type: Sequelize.STRING(64),
        unique: true
    }
}, {
    sequelize: db,
    tableName: 'user'
});

module.exports = {User};
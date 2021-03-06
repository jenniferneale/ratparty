const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  isRat: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  inventory: {
    type: Sequelize.ARRAY(Sequelize.BLOB),
    defaultValue: [],
  },
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

/**
 * classMethods
 */
User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

User.getTotalRatPoints = () => {
  return User.sum('points', { where: { isRat: true }})
}

User.getTotalHumanPoints = () => {
  return User.sum('points', { where: { isRat: false }})
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

/**
 * Usuario.js
 *
 * @description :: The Usuario table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

const bcrypt = require('bcrypt-nodejs');

module.exports = {
  tableName: 'usuario',

  primaryKey: 'id',
  attributes: {
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
    },

    rol: {
      type: 'string',
    },
    idPersona: {
      unique: true,
      model: 'persona'
    },

  },
  customToJSON: function () {
    return _.omit(this, ['password'])
  },
  beforeCreate: function (user, cb) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) return cb(err);
        user.password = hash;
        return cb();
      });
    });
  }

};

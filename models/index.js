// import all models
const Purchase = require('./Purchase');
const User = require('./User');

// create associations
User.hasMany(Purchase, {
  foreignKey: 'user_id'
});

Purchase.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


module.exports = { User, Purchase };

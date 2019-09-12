const users = [{
  fullName: '',
  email: 'mail@mail.com',
  login: 'Admin',
  password: '123321',
  role: 'ADMIN',
  isActive: true,
  passwordChange: false
}]
module.exports = {
  up: queryInterface => queryInterface.bulkInsert('site_user', users, {}),
  down: queryInterface => queryInterface.bulkDelete('site_user', users, null, {})
};

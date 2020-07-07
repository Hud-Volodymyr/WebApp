'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Leads', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    createAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updateAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Leads'),
};

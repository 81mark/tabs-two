const bcrypt = require('bcryptjs');
// MAX LENGTH PASSWORD IS 18.
// Due to bcryptjs 72bytes limit, utf8 uses up to 4bytes a character!
// TODO JWT expose pass/email? tweak and (if pass not changed no re-run hash )

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			email: {
				type: DataTypes.STRING,
				unique: true
			},
			password: DataTypes.STRING
		},
		{
			// middleware
			hooks: {
				beforeCreate: async function(user) {
					user.password = await bcrypt.hash(user.password, 10);
				},
				beforeUpdate: async function(user) {
					user.password = await bcrypt.hash(user.password, 10);
				} // add beforeSave -- Also add if(!user.changed) dont update
			}
		}
	);

	User.prototype.isMatch = async function(password) {
		return await bcrypt.compare(password, hashPassword);
	};

	return User;
};

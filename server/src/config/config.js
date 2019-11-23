module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || 'tabs',
		user: process.env.DB_USER || 'tabs',
		password: process.env.DB_PASS || 'tabs',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'local',
			storage: './tabs.sqlite'
		}
	}
};

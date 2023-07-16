module.exports = {
	extends: ["eslint-config-codely/typescript"],
	// plugins: ["hexagonal-architecture"], // Agrega el plugin aquí
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: ["./tsconfig.json"],
			},
		},
		// Aquí aplicas la regla a los archivos específicos
		{
			files: ["**/src/Contexts/**/*.ts"],
			/*	rules: {
				"hexagonal-architecture/enforce": ["error"],
			},*/
		},
	],
};

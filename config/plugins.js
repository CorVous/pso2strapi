module.exports = ({ env }) => ({
	email: {
		provider: 'sendgrid',
		providerOptions: {
		      apiKey: env('SENDGRID_API_KEY'),
		},
		settings: {
			defaultFrom: 'donotreply@ngs.cor.gg',
			defaultReplyTo: 'donotreply@ngs.cor.gg',
			testAddress: 'vouscor@gmail.com',
		},
	},
});

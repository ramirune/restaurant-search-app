import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer Mxkx-a5co3rl4jLP4CkKTmT8pLcno1YHAir_CaltiaJeOUN3bemUQt5OFDIwr1clK14yyc0K-qqCIkqzxKcb5I2mNXhlG512SK1GoPZpKTxrzrskLqWvnsZyaI-DY3Yx',
	},
});

const formatCurrency = (currency) => {
	return "Rs " + Number(currency.toFixed(2)).toLocaleString() + " ";
};

export default formatCurrency;

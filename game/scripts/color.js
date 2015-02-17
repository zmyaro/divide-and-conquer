var Color = (function () {
	/**
	 * Convert a decimal number to a two-digit hexadecimal number.
	 * @param {Number} num - The decimal number to convert
	 * @returns {String} - The hexadecimal number
	 */
	function decToHex(num) {
		// Convert the number to hexadecimal.
		var hex = num.toString(16);
		// Add a preceding zero if the hexadecimal number is one digit.
		hex = hex.length === 1 ? '0' + hex : hex;
		return hex;
	}
	
	/**
	 * Initialize a new Color.
	 * @param {Number} red - The red value for the color.
	 * @param {Number} green - The green value for the color.
	 * @param {Number} blue - The blue value for the color.
	 */
	function Color(red, green, blue) {
		this.red = red;
		this.green = green;
		this.blue = blue;
	}
	
	Color.prototype = {
		/**
		 * Get the CSS hex code for the color.
		 * @returns {String}
		 */
		get hex() {
			return '#' + decToHex(this.red) + decToHex(this.green) + decToHex(this.blue);
		},
		/**
		 * Get the CSS RGB code for the color.
		 * @returns {String}
		 */
		get rgb() {
			return 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
		}
	};
	
	return Color;
})();
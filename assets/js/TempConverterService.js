var TempConverterService = {
    
    fahrenheitToCelsius: function(temp) {
        return (temp-32)*5/9;        
    },
    
    celsiusToFahrenheit: function(temp) {
        return (temp * 9/5) + 32;
    },
    
    getCelsius: function(temp, scale) {
        if(typeof(temp) === 'number' && typeof(scale) === 'string') {
            switch(scale){
                case 'F':                    
                case 'f': 
                    return TempConverterService.fahrenheitToCelsius(temp);                    
                default:
                    return null;
            }
			return weight / (height * height);
		}
		return null;
    }, 
    
    getFahrenheit: function(temp, scale) {
        if(typeof(temp) === 'number' && typeof(scale) === 'string') {
            switch(scale){
                case 'C':                                
                case 'c': 
                    return TempConverterService.celsiusToFahrenheit(temp);                    
                default:
                    return null;
            }
			return weight / (height * height);
		}
		return null;
    }, 
    
    getKelvin: function(temp, scale) {
        
    }, 
    
  
};
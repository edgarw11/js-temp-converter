describe('TempConverterService', function(){
   it('should convert to celsius given a temp and a scale. temp in F',function(){       
      expect(TempConverterService.getCelsius(14, 'F')).toBe(-10); 
   });
    it('should convert to celsius given a temp and a scale. No matter the case F or f',function(){       
      expect(TempConverterService.getCelsius(32, 'f')).toBe(0); 
   });
    it('should convert to fahrenheit given a temp and a scale. temp in C',function(){       
      expect(TempConverterService.getFahrenheit(-10, 'C')).toBe(14); 
   });
    it('should convert to fahrenheit given a temp and a scale. No matter the case C or c',function(){       
      expect(TempConverterService.getFahrenheit(0, 'c')).toBe(32); 
   });
    it('should return null for a non valid temp',function(){
       expect(TempConverterService.getCelsius('a', 'F')).toBe(null); 
   });
    it('should return null for a non valid scale',function(){
       expect(TempConverterService.getCelsius('10', 'a')).toBe(null); 
   });
});
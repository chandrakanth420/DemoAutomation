function Conversion()
{ 
  this.Convert = function (number, fromUnit)
  {
    var conversions = {
            distance : {
                meters : 1,
                cm     : 0.01,
                feet   : 0.3048,
                inches : 0.0254,
                yards  : 0.9144

            },
            volume : {

                liters : 1,
                gallons: 3.785411784,
                cups   : 0.236588236
            }
            
        },

        betweenUnit = false,
        type, unit;


    for (type in conversions) {
        if (conversions[type]) {
            if ( (unit = conversions[type][fromUnit]) ) {
                betweenUnit = number * unit * 1000;
            }
        }
    }

    return {
        to : function (toUnit) {
            if (betweenUnit) {
                for (type in conversions) {
                    if (conversions.hasOwnProperty(type)) {
                        if ( (unit = conversions[type][toUnit]) ) {
                            return fix(betweenUnit / (unit * 1000));
                        }
                    }
                }
                throw new Error("unrecognized to-unit");
            }
            if(toUnit=='fahrenheit')
            	{
            	return fix(number*1.8+32)
            	}
            if(toUnit=='celsius')
            	{
            	return fix((number-32)/1.8)
            	}
            	
            else {
                throw new Error("unrecognized from-unit");
            }
            function fix (num) {
                return parseFloat( num.toFixed(2) );
            }
        }
    };
  }
}
//Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = Conversion;
}
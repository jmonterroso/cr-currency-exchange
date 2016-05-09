# cr-currency-exchange

This module returns an object containing the current exchange rate for costarican colones.

#### Usage:
```
var currency = require('cr-currency-exchange');

currency.getCurrency(317, function (result) {
    var exchangeValue = result.exchangeValue;
    //returns { exchangeValue: 518.8888}
 });

```

#### Params

**type**: what kind of type of result do you expect for a further reference of the codes please check:

Banco Central de Costa Rica - Servicio Web:
http://www.bccr.fi.cr/indicadores_economicos_/ServicioWeb.html

Sample Codes:

```
Code          Returns
317	          Compra	Compra	Diaria
318	          Venta	Venta	Diaria
```
Enjoy :)




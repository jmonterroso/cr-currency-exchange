var http = require('http');
var moment = require('moment');
var xml2js = require('xml2js');
var Entities = require('html-entities').XmlEntities;
var entities = new Entities();
var parser = new xml2js.Parser();

var exchangeUrl = 'http://indicadoreseconomicos.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx';
var exchangeFn = 'ObtenerIndicadoresEconomicosXML';

var defaultCode = 317;

function getCurrencyType(type, callback) {
    type = type || defaultCode;
    var date = Date.now();
    var dateRange = moment(date).format('DD/MM/YYYY');
    var url = exchangeUrl + '/' + exchangeFn + '?tcIndicador=' + type + '&tcFechaInicio=' + dateRange + '&tcFechaFinal=' + dateRange + '&tcNombre=tq&tnSubNiveles=N';
    http.get(url, function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            var xml = entities.decode(data);
            parser.parseString(xml, function (err, result) {
                callback({
                    exchangeValue: result.string['Datos_de_INGC011_CAT_INDICADORECONOMIC'][0]['INGC011_CAT_INDICADORECONOMIC'][0]['NUM_VALOR'][0]
                });
            });
        });
    })
}

module.exports.getCurrency = getCurrencyType;

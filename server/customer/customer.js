


const express = require('express')
const router = express.Router();
var xml2js = require('xml2js');
var request = require('request');

var responseresults
var responseresults_Inquiry
var responseresults_Sales
var responseresults_Delivery
var responseresults_Paymentageing
var responseresults_Credit
var responseresults_Debit
var responseresults_Profile
var responseresults_InvoiceDetail
var responseresults_InquiryDetail
var responseresults_SalesDetail
var responseresults_InvoiePrint
var Sales_no
var Inquiry_no




var password;
var username;
var responseresults_Invoice;
var Invoice_no;








router.post('/login', (req, res) => {
    username = req.body.CUSTOMER_ID;
    password = req.body.PASSWORD;
    console.log("Working" + username);

    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_SUGHI&receiverParty=&receiverService=&interface=SI_CUSTOMER_LOGIN_SUGHI&interfaceNamespace=http://customer_portal_sughi.com',
        'headers': {
            'Content-Type': 'text/xml',
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyMDA3MTcFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjIwMDcxNzA2WjAjBgkqhkiG9w0BCQQxFgQUE%2Fx!7reIuPPszoAWY1%2FS%2F4O!jr4wCQYHKoZIzjgEAwQvMC0CFA1UWV9l2J0pkOtTHnNlF%2Fckba5JAhUAqUfzuQLv3SWou2QEaZyF6j1hszg%3D; JSESSIONID=ekMdOBZKt72EUkUM3_3IVlWt4_h_gQF-Y2kA_SAPOpohumiZsrC-ME07i6IL74_g; JSESSIONMARKID=r2qWYAFlbX8tOHFkEtqxA3uhT2rDZZfKkDT35jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n<soapenv:Header/>\r\n<soapenv:Body>\r\n<urn:ZBAPI_SD_LOGIN_SUGHI>\r\n<!--You may enter the following 2 items in any order-->\r\n<P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n<P_PASSWORD_IMPORT>' + password + '</P_PASSWORD_IMPORT>\r\n</urn:ZBAPI_SD_LOGIN_SUGHI>\r\n</soapenv:Body>\r\n</soapenv:Envelope>'

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);


        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_LOGIN_SUGHI.Response'][0]['RETURN'][0]['MESSAGE']

            console.log(len)
            responseresults = len



        });
        res.send(responseresults)
    });


})

router.get('/Inquiry', (req, res) => {


    var request = require("request");

    var options = {
        method: 'POST',
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet',
        qs:
        {
            senderParty: '',
            senderService: 'BC_PORTALS_ARIYA',
            receiverParty: '',
            receiverService: '',
            interface: 'SI_INQUIRYLIST_AM',
            interfaceNamespace: 'http://Customer_Portal_AM.com'
        },
        headers:
        {
            'postman-token': '97361b3e-d7af-3798-cf0f-58ff6ab714bf',
            'cache-control': 'no-cache',
            authorization: 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'content-type': 'application/xml'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_INQUIRY_LIST_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n         <IT_INQUIRY_LIST>\r\n            <!--Zero or more repetitions:-->\r\n           \r\n         </IT_INQUIRY_LIST>\r\n      </urn:ZBAPI_SD_INQUIRY_LIST_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

           
            responseresults_Inquiry = resp



        });

        console.log(xmldata);
        res.send(responseresults_Inquiry)
    });



})
router.get('/Saleslist', (req, res) => {


    var request = require("request");

    var options = {
        method: 'POST',
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet',
        qs:
        {
            senderParty: '',
            senderService: 'BC_PORTALS_ARIYA',
            receiverParty: '',
            receiverService: '',
            interface: 'SI_SALESLIST_AM',
            interfaceNamespace: 'http://Customer_Portal_AM.com'
        },
        headers:
        {
            'postman-token': 'a79d1bed-6942-1bb8-d76d-e207b2c814f2',
            'cache-control': 'no-cache',
            authorization: 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'content-type': 'application/xml'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_SALESORDER_LIST_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n         <SALES_ORDERS>\r\n            <!--Zero or more repetitions:-->\r\n          \r\n         </SALES_ORDERS>\r\n      </urn:ZBAPI_SD_SALESORDER_LIST_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_SALESORDER_LIST_AM.Response']


            responseresults_Sales = len



        });


        res.send(responseresults_Sales)


    });



})
router.get('/Deliverylist', (req, res) => {



    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_DELIVERYLIST_AM&interfaceNamespace=http://Customer_Portal_AM.com',
        'headers': {
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Content-Type': 'application/xml',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyMzA2MjkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjIzMDYyOTE2WjAjBgkqhkiG9w0BCQQxFgQUnjECypfLMIsydOACgZLIC1mAkP0wCQYHKoZIzjgEAwQvMC0CFHlIc522noHeAAAM%2FTzq2eK6O3K!AhUAuGDWcdwKxZuO!eKENyZBUSbHXGI%3D; JSESSIONID=2WJw-FQ5T5reN8mwD2WmmnmZLECPgQF-Y2kA_SAPapwdKpCVJvRFYDELhH1dFtVl; JSESSIONMARKID=va1QoAhwl8mTzZMY111JVYFCbYj_YCf3UqOH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_DELIVERY_LIST_AM>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n         <!--Optional:-->\r\n         <RESULT_DELIVERY_HEADER>\r\n            <!--Zero or more repetitions:-->\r\n           \r\n         </RESULT_DELIVERY_HEADER>\r\n         <!--Optional:-->\r\n         <RESULT_DELIVERY_ITEM>\r\n            <!--Zero or more repetitions:-->\r\n         \r\n         </RESULT_DELIVERY_ITEM>\r\n      </urn:ZBAPI_SD_DELIVERY_LIST_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_DELIVERY_LIST_AM.Response'][0]['RESULT_DELIVERY_HEADER']


            responseresults_Delivery = resp



        });


        res.send(responseresults_Delivery)

    });
})

router.get('/DeliveryDetail', (req, res) => {



    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_DELIVERYLIST_AM&interfaceNamespace=http://Customer_Portal_AM.com',
        'headers': {
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Content-Type': 'application/xml',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyMzA2MjkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjIzMDYyOTE2WjAjBgkqhkiG9w0BCQQxFgQUnjECypfLMIsydOACgZLIC1mAkP0wCQYHKoZIzjgEAwQvMC0CFHlIc522noHeAAAM%2FTzq2eK6O3K!AhUAuGDWcdwKxZuO!eKENyZBUSbHXGI%3D; JSESSIONID=2WJw-FQ5T5reN8mwD2WmmnmZLECPgQF-Y2kA_SAPapwdKpCVJvRFYDELhH1dFtVl; JSESSIONMARKID=va1QoAhwl8mTzZMY111JVYFCbYj_YCf3UqOH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_DELIVERY_LIST_AM>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n         <!--Optional:-->\r\n         <RESULT_DELIVERY_HEADER>\r\n            <!--Zero or more repetitions:-->\r\n           \r\n         </RESULT_DELIVERY_HEADER>\r\n         <!--Optional:-->\r\n         <RESULT_DELIVERY_ITEM>\r\n            <!--Zero or more repetitions:-->\r\n         \r\n         </RESULT_DELIVERY_ITEM>\r\n      </urn:ZBAPI_SD_DELIVERY_LIST_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_DELIVERY_LIST_AM.Response'][0]['RESULT_DELIVERY_ITEM']


            responseresults_Delivery = len



        });


        res.send(responseresults_Delivery)

    });
})

router.get('/Paymentageing', (req, res) => {

    var request = require("request");

    var options = {
        method: 'POST',
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet',
        qs:
        {
            senderParty: '',
            senderService: 'BC_PORTALS_ARIYA',
            receiverParty: '',
            receiverService: '',
            interface: 'SI_PAYMENT_AGING_AM',
            interfaceNamespace: 'http://Customer_Portal_AM.com'
        },
        headers:
        {
            'postman-token': 'fdd7114d-868e-3c53-9eeb-f2d080dc85df',
            'cache-control': 'no-cache',
            authorization: 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'content-type': 'application/xml'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_FI_PAYMENT_AGING_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n        \r\n      </urn:ZBAPI_FI_PAYMENT_AGING_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_FI_PAYMENT_AGING_AM.Response'][0]['IT_RESULT']


            responseresults_Paymentageing = resp



        });


        res.send(responseresults_Paymentageing)


    });

})
router.get('/Credit', (req, res) => {

    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_CREDIT_MEMO_AM&interfaceNamespace=http://Customer_Portal_AM.com',
        'headers': {
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Content-Type': 'application/xml',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyMzA2MjkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjIzMDYyOTE2WjAjBgkqhkiG9w0BCQQxFgQUnjECypfLMIsydOACgZLIC1mAkP0wCQYHKoZIzjgEAwQvMC0CFHlIc522noHeAAAM%2FTzq2eK6O3K!AhUAuGDWcdwKxZuO!eKENyZBUSbHXGI%3D; JSESSIONID=2WJw-FQ5T5reN8mwD2WmmnmZLECPgQF-Y2kA_SAPapwdKpCVJvRFYDELhH1dFtVl; JSESSIONMARKID=va1QoAhwl8mTzZMY111JVYFCbYj_YCf3UqOH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_FI_CREDIT_MEMO_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n         <!--Optional:-->\r\n         <IT_CREDIT_RESULT>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </IT_CREDIT_RESULT>\r\n      </urn:ZBAPI_FI_CREDIT_MEMO_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);

        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_FI_CREDIT_MEMO_AM.Response'][0]['IT_CREDIT_RESULT']


            responseresults_Credit = resp



        });


        res.send(responseresults_Credit)

    });


})
router.get('/Debit', (req, res) => {


    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_DEBIT_MEMO_AM&interfaceNamespace=http://Customer_Portal_AM.com',
        'headers': {
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Content-Type': 'application/xml',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyMzA2MjkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjIzMDYyOTE2WjAjBgkqhkiG9w0BCQQxFgQUnjECypfLMIsydOACgZLIC1mAkP0wCQYHKoZIzjgEAwQvMC0CFHlIc522noHeAAAM%2FTzq2eK6O3K!AhUAuGDWcdwKxZuO!eKENyZBUSbHXGI%3D; JSESSIONID=2WJw-FQ5T5reN8mwD2WmmnmZLECPgQF-Y2kA_SAPapwdKpCVJvRFYDELhH1dFtVl; JSESSIONMARKID=va1QoAhwl8mTzZMY111JVYFCbYj_YCf3UqOH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_FI_DEBIT_MEMO_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n         <!--Optional:-->\r\n         <IT_CREDIT_RESULT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n             \r\n            </item>\r\n         </IT_CREDIT_RESULT>\r\n      </urn:ZBAPI_FI_DEBIT_MEMO_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_FI_DEBIT_MEMO_AM.Response'][0]['IT_CREDIT_RESULT']


            responseresults_Debit = resp



        });


        res.send(responseresults_Debit)

    });


})
router.get('/Profile', (req, res) => {


    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_CUSTOMER_PROFILE_AM&interfaceNamespace=http://Customer_Portal_AM.com',
        'headers': {
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Content-Type': 'application/xml',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyMzA2MjkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjIzMDYyOTE2WjAjBgkqhkiG9w0BCQQxFgQUnjECypfLMIsydOACgZLIC1mAkP0wCQYHKoZIzjgEAwQvMC0CFHlIc522noHeAAAM%2FTzq2eK6O3K!AhUAuGDWcdwKxZuO!eKENyZBUSbHXGI%3D; JSESSIONID=2WJw-FQ5T5reN8mwD2WmmnmZLECPgQF-Y2kA_SAPapwdKpCVJvRFYDELhH1dFtVl; JSESSIONMARKID=va1QoAhwl8mTzZMY111JVYFCbYj_YCf3UqOH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_CUSTOMEPROFILE_AM>\r\n         <!--You may enter the following 4 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n         <!--Optional:-->\r\n         <CUSTOMERBANKDETAIL>\r\n            <!--Zero or more repetitions:-->\r\n          \r\n         </CUSTOMERBANKDETAIL>\r\n         <!--Optional:-->\r\n         <CUSTOMERIBANDETAIL>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </CUSTOMERIBANDETAIL>\r\n         <!--Optional:-->\r\n         <CUSTOMERSEPADETAIL>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </CUSTOMERSEPADETAIL>\r\n      </urn:ZBAPI_SD_CUSTOMEPROFILE_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['rfc:ZBAPI_SD_CUSTOMEPROFILE_AM.Response'][0]


            responseresults_Profile = resp



        });


        res.send(responseresults_Profile)
    });


})

router.get('/Invoicelist', (req, res) => {

    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_CUSTOMER_INVOICELIST_AM&interfaceNamespace=http://Customer_Portal_AM.com',
        'headers': {
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Content-Type': 'application/xml',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYzMDE0NDkFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjMwMTQ0OTE1WjAjBgkqhkiG9w0BCQQxFgQUZKLbU3mJTgk4ajkT0ZyLZZQs7%2FMwCQYHKoZIzjgEAwQwMC4CFQDLsFk0g3vZWKWtXlrPa7Fdr4C7fQIVANqmVo10oZ!H9IREWfUd9AwtZZ7g; JSESSIONID=YjvTcgxMFoFYv93zte2yphk4bxa1gQF-Y2kA_SAPqyd3c0w7dhrfHTvmoOIjrxcj; JSESSIONMARKID=r82ycw8duf22rVD5COJz5C6GRiS8S187t9eX5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_INVOICE_LIST_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n         <!--Optional:-->\r\n         <IT_INVOICE_LIST>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <MANDT></MANDT>\r\n               <!--Optional:-->\r\n               <VBELN></VBELN>\r\n               <!--Optional:-->\r\n               <FKART></FKART>\r\n               <!--Optional:-->\r\n               <FKTYP></FKTYP>\r\n               <!--Optional:-->\r\n               <VBTYP></VBTYP>\r\n               <!--Optional:-->\r\n               <WAERK></WAERK>\r\n               <!--Optional:-->\r\n               <VKORG></VKORG>\r\n               <!--Optional:-->\r\n               <VTWEG></VTWEG>\r\n               <!--Optional:-->\r\n               <KALSM></KALSM>\r\n               <!--Optional:-->\r\n               <KNUMV></KNUMV>\r\n               <!--Optional:-->\r\n               <VSBED></VSBED>\r\n               <!--Optional:-->\r\n               <FKDAT></FKDAT>\r\n               <!--Optional:-->\r\n               <BELNR></BELNR>\r\n               <!--Optional:-->\r\n               <GJAHR></GJAHR>\r\n               <!--Optional:-->\r\n               <POPER></POPER>\r\n               <!--Optional:-->\r\n               <KONDA></KONDA>\r\n               <!--Optional:-->\r\n               <KDGRP></KDGRP>\r\n               <!--Optional:-->\r\n               <BZIRK></BZIRK>\r\n               <!--Optional:-->\r\n               <PLTYP></PLTYP>\r\n               <!--Optional:-->\r\n               <INCO1></INCO1>\r\n               <!--Optional:-->\r\n               <INCO2></INCO2>\r\n               <!--Optional:-->\r\n               <EXPKZ></EXPKZ>\r\n               <!--Optional:-->\r\n               <RFBSK></RFBSK>\r\n               <!--Optional:-->\r\n               <MRNKZ></MRNKZ>\r\n               <!--Optional:-->\r\n               <KURRF></KURRF>\r\n               <!--Optional:-->\r\n               <CPKUR></CPKUR>\r\n               <!--Optional:-->\r\n               <VALTG></VALTG>\r\n               <!--Optional:-->\r\n               <VALDT></VALDT>\r\n               <!--Optional:-->\r\n               <ZTERM></ZTERM>\r\n               <!--Optional:-->\r\n               <ZLSCH></ZLSCH>\r\n               <!--Optional:-->\r\n               <KTGRD></KTGRD>\r\n               <!--Optional:-->\r\n               <LAND1></LAND1>\r\n               <!--Optional:-->\r\n               <REGIO></REGIO>\r\n               <!--Optional:-->\r\n               <COUNC></COUNC>\r\n               <!--Optional:-->\r\n               <CITYC></CITYC>\r\n               <!--Optional:-->\r\n               <BUKRS></BUKRS>\r\n               <!--Optional:-->\r\n               <TAXK1></TAXK1>\r\n               <!--Optional:-->\r\n               <TAXK2></TAXK2>\r\n               <!--Optional:-->\r\n               <TAXK3></TAXK3>\r\n               <!--Optional:-->\r\n               <TAXK4></TAXK4>\r\n               <!--Optional:-->\r\n               <TAXK5></TAXK5>\r\n               <!--Optional:-->\r\n               <TAXK6></TAXK6>\r\n               <!--Optional:-->\r\n               <TAXK7></TAXK7>\r\n               <!--Optional:-->\r\n               <TAXK8></TAXK8>\r\n               <!--Optional:-->\r\n               <TAXK9></TAXK9>\r\n               <!--Optional:-->\r\n               <NETWR></NETWR>\r\n               <!--Optional:-->\r\n               <ZUKRI></ZUKRI>\r\n               <!--Optional:-->\r\n               <ERNAM></ERNAM>\r\n               <!--Optional:-->\r\n               <ERZET></ERZET>\r\n               <!--Optional:-->\r\n               <ERDAT></ERDAT>\r\n               <!--Optional:-->\r\n               <STAFO></STAFO>\r\n               <!--Optional:-->\r\n               <KUNRG></KUNRG>\r\n               <!--Optional:-->\r\n               <KUNAG></KUNAG>\r\n               <!--Optional:-->\r\n               <MABER></MABER>\r\n               <!--Optional:-->\r\n               <STWAE></STWAE>\r\n               <!--Optional:-->\r\n               <EXNUM></EXNUM>\r\n               <!--Optional:-->\r\n               <STCEG></STCEG>\r\n               <!--Optional:-->\r\n               <AEDAT></AEDAT>\r\n               <!--Optional:-->\r\n               <SFAKN></SFAKN>\r\n               <!--Optional:-->\r\n               <KNUMA></KNUMA>\r\n               <!--Optional:-->\r\n               <FKART_RL></FKART_RL>\r\n               <!--Optional:-->\r\n               <FKDAT_RL></FKDAT_RL>\r\n               <!--Optional:-->\r\n               <KURST></KURST>\r\n               <!--Optional:-->\r\n               <MSCHL></MSCHL>\r\n               <!--Optional:-->\r\n               <MANSP></MANSP>\r\n               <!--Optional:-->\r\n               <SPART></SPART>\r\n               <!--Optional:-->\r\n               <KKBER></KKBER>\r\n               <!--Optional:-->\r\n               <KNKLI></KNKLI>\r\n               <!--Optional:-->\r\n               <CMWAE></CMWAE>\r\n               <!--Optional:-->\r\n               <CMKUF></CMKUF>\r\n               <!--Optional:-->\r\n               <HITYP_PR> </HITYP_PR>\r\n               <!--Optional:-->\r\n               <BSTNK_VF> </BSTNK_VF>\r\n               <!--Optional:-->\r\n               <VBUND> </VBUND>\r\n               <!--Optional:-->\r\n               <FKART_AB></FKART_AB>\r\n               <!--Optional:-->\r\n               <KAPPL></KAPPL>\r\n               <!--Optional:-->\r\n               <LANDTX></LANDTX>\r\n               <!--Optional:-->\r\n               <STCEG_H></STCEG_H>\r\n               <!--Optional:-->\r\n               <STCEG_L></STCEG_L>\r\n               <!--Optional:-->\r\n               <XBLNR></XBLNR>\r\n               <!--Optional:-->\r\n               <ZUONR></ZUONR>\r\n               <!--Optional:-->\r\n               <MWSBK></MWSBK>\r\n               <!--Optional:-->\r\n               <LOGSYS></LOGSYS>\r\n               <!--Optional:-->\r\n               <FKSTO></FKSTO>\r\n               <!--Optional:-->\r\n               <XEGDR></XEGDR>\r\n               <!--Optional:-->\r\n               <RPLNR></RPLNR>\r\n               <!--Optional:-->\r\n               <LCNUM></LCNUM>\r\n               <!--Optional:-->\r\n               <J_1AFITP></J_1AFITP>\r\n               <!--Optional:-->\r\n               <KURRF_DAT></KURRF_DAT>\r\n               <!--Optional:-->\r\n               <AKWAE></AKWAE>\r\n               <!--Optional:-->\r\n               <AKKUR></AKKUR>\r\n               <!--Optional:-->\r\n               <KIDNO></KIDNO>\r\n               <!--Optional:-->\r\n               <BVTYP></BVTYP>\r\n               <!--Optional:-->\r\n               <NUMPG></NUMPG>\r\n               <!--Optional:-->\r\n               <BUPLA></BUPLA>\r\n               <!--Optional:-->\r\n               <VKONT></VKONT>\r\n               <!--Optional:-->\r\n               <FKK_DOCSTAT></FKK_DOCSTAT>\r\n               <!--Optional:-->\r\n               <NRZAS></NRZAS>\r\n               <!--Optional:-->\r\n               <SPE_BILLING_IND> </SPE_BILLING_IND>\r\n               <!--Optional:-->\r\n               <VTREF></VTREF>\r\n               <!--Optional:-->\r\n               <FK_SOURCE_SYS></FK_SOURCE_SYS>\r\n               <!--Optional:-->\r\n               <FKTYP_CRM></FKTYP_CRM>\r\n               <!--Optional:-->\r\n               <STGRD></STGRD>\r\n               <!--Optional:-->\r\n               <VBTYP_EXT></VBTYP_EXT>\r\n               <!--Optional:-->\r\n               <J_1TPBUPL></J_1TPBUPL>\r\n               <!--Optional:-->\r\n               <INCOV></INCOV>\r\n               <!--Optional:-->\r\n               <INCO2_L></INCO2_L>\r\n               <!--Optional:-->\r\n               <INCO3_L></INCO3_L>\r\n               <!--Optional:-->\r\n               <DPC_REL></DPC_REL>\r\n               <!--Optional:-->\r\n               <MNDID></MNDID>\r\n               <!--Optional:-->\r\n               <PAY_TYPE></PAY_TYPE>\r\n               <!--Optional:-->\r\n               <SEPON></SEPON>\r\n               <!--Optional:-->\r\n               <MNDVG></MNDVG>\r\n               <!--Optional:-->\r\n               <SPPAYM></SPPAYM>\r\n               <!--Optional:-->\r\n               <SPPORD></SPPORD>\r\n            </item>\r\n         </IT_INVOICE_LIST>\r\n      </urn:ZBAPI_SD_INVOICE_LIST_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);

        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_INVOICE_LIST_AM.Response'][0]['IT_INVOICE_LIST']


            responseresults_Invoice = resp



        });


        res.send(responseresults_Invoice)
    });


})

router.get('/InvoiceDetail', (req, res) => {

    var request = require("request");

    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_CUSTOMER_INVOICEDETAIL_AM&interfaceNamespace=http://Customer_Portal_AM.com',
        'headers': {
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Content-Type': 'application/xml',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYzMDE0NDkFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjMwMTQ0OTE1WjAjBgkqhkiG9w0BCQQxFgQUZKLbU3mJTgk4ajkT0ZyLZZQs7%2FMwCQYHKoZIzjgEAwQwMC4CFQDLsFk0g3vZWKWtXlrPa7Fdr4C7fQIVANqmVo10oZ!H9IREWfUd9AwtZZ7g; JSESSIONID=YjvTcgxMFoFYv93zte2yphk4bxa1gQF-Y2kA_SAPqyd3c0w7dhrfHTvmoOIjrxcj; JSESSIONMARKID=a5I5mw6cuUhTvSmgdbOtT-P9k-6IrTolLFe35jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_INVOICE_DETAILS_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_SALES_NUMBER_IMPORT>' + Invoice_no + '</P_SALES_NUMBER_IMPORT>\r\n         <!--Optional:-->\r\n         <IT_INVOICE_DETAIL>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <MANDT></MANDT>\r\n               <!--Optional:-->\r\n               <VBELN></VBELN>\r\n               <!--Optional:-->\r\n               <POSNR></POSNR>\r\n               <!--Optional:-->\r\n               <UEPOS></UEPOS>\r\n               <!--Optional:-->\r\n               <FKIMG></FKIMG>\r\n               <!--Optional:-->\r\n               <VRKME></VRKME>\r\n               <!--Optional:-->\r\n               <UMVKZ></UMVKZ>\r\n               <!--Optional:-->\r\n               <UMVKN></UMVKN>\r\n               <!--Optional:-->\r\n               <MEINS></MEINS>\r\n               <!--Optional:-->\r\n               <SMENG></SMENG>\r\n               <!--Optional:-->\r\n               <FKLMG></FKLMG>\r\n               <!--Optional:-->\r\n               <LMENG></LMENG>\r\n               <!--Optional:-->\r\n               <NTGEW></NTGEW>\r\n               <!--Optional:-->\r\n               <BRGEW></BRGEW>\r\n               <!--Optional:-->\r\n               <GEWEI></GEWEI>\r\n               <!--Optional:-->\r\n               <VOLUM></VOLUM>\r\n               <!--Optional:-->\r\n               <VOLEH></VOLEH>\r\n               <!--Optional:-->\r\n               <GSBER></GSBER>\r\n               <!--Optional:-->\r\n               <PRSDT></PRSDT>\r\n               <!--Optional:-->\r\n               <FBUDA></FBUDA>\r\n               <!--Optional:-->\r\n               <KURSK></KURSK>\r\n               <!--Optional:-->\r\n               <NETWR></NETWR>\r\n               <!--Optional:-->\r\n               <VBELV></VBELV>\r\n               <!--Optional:-->\r\n               <POSNV></POSNV>\r\n               <!--Optional:-->\r\n               <VGBEL></VGBEL>\r\n               <!--Optional:-->\r\n               <VGPOS></VGPOS>\r\n               <!--Optional:-->\r\n               <VGTYP></VGTYP>\r\n               <!--Optional:-->\r\n               <AUBEL></AUBEL>\r\n               <!--Optional:-->\r\n               <AUPOS></AUPOS>\r\n               <!--Optional:-->\r\n               <AUREF></AUREF>\r\n               <!--Optional:-->\r\n               <MATNR></MATNR>\r\n               <!--Optional:-->\r\n               <ARKTX></ARKTX>\r\n               <!--Optional:-->\r\n               <PMATN></PMATN>\r\n               <!--Optional:-->\r\n               <CHARG></CHARG>\r\n               <!--Optional:-->\r\n               <MATKL></MATKL>\r\n               <!--Optional:-->\r\n               <PSTYV></PSTYV>\r\n               <!--Optional:-->\r\n               <POSAR></POSAR>\r\n               <!--Optional:-->\r\n               <PRODH></PRODH>\r\n               <!--Optional:-->\r\n               <VSTEL></VSTEL>\r\n               <!--Optional:-->\r\n               <ATPKZ></ATPKZ>\r\n               <!--Optional:-->\r\n               <SPART></SPART>\r\n               <!--Optional:-->\r\n               <POSPA></POSPA>\r\n               <!--Optional:-->\r\n               <WERKS></WERKS>\r\n               <!--Optional:-->\r\n               <ALAND></ALAND>\r\n               <!--Optional:-->\r\n               <WKREG></WKREG>\r\n               <!--Optional:-->\r\n               <WKCOU></WKCOU>\r\n               <!--Optional:-->\r\n               <WKCTY></WKCTY>\r\n               <!--Optional:-->\r\n               <TAXM1></TAXM1>\r\n               <!--Optional:-->\r\n               <TAXM2></TAXM2>\r\n               <!--Optional:-->\r\n               <TAXM3></TAXM3>\r\n               <!--Optional:-->\r\n               <TAXM4></TAXM4>\r\n               <!--Optional:-->\r\n               <TAXM5></TAXM5>\r\n               <!--Optional:-->\r\n               <TAXM6></TAXM6>\r\n               <!--Optional:-->\r\n               <TAXM7></TAXM7>\r\n               <!--Optional:-->\r\n               <TAXM8></TAXM8>\r\n               <!--Optional:-->\r\n               <TAXM9></TAXM9>\r\n               <!--Optional:-->\r\n               <KOWRR></KOWRR>\r\n               <!--Optional:-->\r\n               <PRSFD></PRSFD>\r\n               <!--Optional:-->\r\n               <SKTOF></SKTOF>\r\n               <!--Optional:-->\r\n               <SKFBP></SKFBP>\r\n               <!--Optional:-->\r\n               <KONDM></KONDM>\r\n               <!--Optional:-->\r\n               <KTGRM></KTGRM>\r\n               <!--Optional:-->\r\n               <KOSTL></KOSTL>\r\n               <!--Optional:-->\r\n               <BONUS></BONUS>\r\n               <!--Optional:-->\r\n               <PROVG></PROVG>\r\n               <!--Optional:-->\r\n               <EANNR></EANNR>\r\n               <!--Optional:-->\r\n               <VKGRP></VKGRP>\r\n               <!--Optional:-->\r\n               <VKBUR></VKBUR>\r\n               <!--Optional:-->\r\n               <SPARA></SPARA>\r\n               <!--Optional:-->\r\n               <SHKZG></SHKZG>\r\n               <!--Optional:-->\r\n               <ERNAM></ERNAM>\r\n               <!--Optional:-->\r\n               <ERDAT></ERDAT>\r\n               <!--Optional:-->\r\n               <ERZET></ERZET>\r\n               <!--Optional:-->\r\n               <BWTAR></BWTAR>\r\n               <!--Optional:-->\r\n               <LGORT></LGORT>\r\n               <!--Optional:-->\r\n               <STAFO></STAFO>\r\n               <!--Optional:-->\r\n               <WAVWR></WAVWR>\r\n               <!--Optional:-->\r\n               <KZWI1></KZWI1>\r\n               <!--Optional:-->\r\n               <KZWI2></KZWI2>\r\n               <!--Optional:-->\r\n               <KZWI3></KZWI3>\r\n               <!--Optional:-->\r\n               <KZWI4></KZWI4>\r\n               <!--Optional:-->\r\n               <KZWI5></KZWI5>\r\n               <!--Optional:-->\r\n               <KZWI6></KZWI6>\r\n               <!--Optional:-->\r\n               <STCUR></STCUR>\r\n               <!--Optional:-->\r\n               <UVPRS></UVPRS>\r\n               <!--Optional:-->\r\n               <UVALL></UVALL>\r\n               <!--Optional:-->\r\n               <EAN11></EAN11>\r\n               <!--Optional:-->\r\n               <PRCTR></PRCTR>\r\n               <!--Optional:-->\r\n               <KVGR1></KVGR1>\r\n               <!--Optional:-->\r\n               <KVGR2></KVGR2>\r\n               <!--Optional:-->\r\n               <KVGR3></KVGR3>\r\n               <!--Optional:-->\r\n               <KVGR4></KVGR4>\r\n               <!--Optional:-->\r\n               <KVGR5></KVGR5>\r\n               <!--Optional:-->\r\n               <MVGR1></MVGR1>\r\n               <!--Optional:-->\r\n               <MVGR2></MVGR2>\r\n               <!--Optional:-->\r\n               <MVGR3></MVGR3>\r\n               <!--Optional:-->\r\n               <MVGR4></MVGR4>\r\n               <!--Optional:-->\r\n               <MVGR5></MVGR5>\r\n               <!--Optional:-->\r\n               <MATWA></MATWA>\r\n               <!--Optional:-->\r\n               <BONBA></BONBA>\r\n               <!--Optional:-->\r\n               <KOKRS></KOKRS>\r\n               <!--Optional:-->\r\n               <PAOBJNR></PAOBJNR>\r\n               <!--Optional:-->\r\n               <PS_PSP_PNR></PS_PSP_PNR>\r\n               <!--Optional:-->\r\n               <AUFNR></AUFNR>\r\n               <!--Optional:-->\r\n               <TXJCD></TXJCD>\r\n               <!--Optional:-->\r\n               <CMPRE></CMPRE>\r\n               <!--Optional:-->\r\n               <CMPNT></CMPNT>\r\n               <!--Optional:-->\r\n               <CUOBJ></CUOBJ>\r\n               <!--Optional:-->\r\n               <CUOBJ_CH></CUOBJ_CH>\r\n               <!--Optional:-->\r\n               <KOUPD></KOUPD>\r\n               <!--Optional:-->\r\n               <UECHA></UECHA>\r\n               <!--Optional:-->\r\n               <XCHAR></XCHAR>\r\n               <!--Optional:-->\r\n               <ABRVW></ABRVW>\r\n               <!--Optional:-->\r\n               <SERNR></SERNR>\r\n               <!--Optional:-->\r\n               <BZIRK_AUFT></BZIRK_AUFT>\r\n               <!--Optional:-->\r\n               <KDGRP_AUFT></KDGRP_AUFT>\r\n               <!--Optional:-->\r\n               <KONDA_AUFT></KONDA_AUFT>\r\n               <!--Optional:-->\r\n               <LLAND_AUFT></LLAND_AUFT>\r\n               <!--Optional:-->\r\n               <MPROK></MPROK>\r\n               <!--Optional:-->\r\n               <PLTYP_AUFT></PLTYP_AUFT>\r\n               <!--Optional:-->\r\n               <REGIO_AUFT></REGIO_AUFT>\r\n               <!--Optional:-->\r\n               <VKORG_AUFT></VKORG_AUFT>\r\n               <!--Optional:-->\r\n               <VTWEG_AUFT></VTWEG_AUFT>\r\n               <!--Optional:-->\r\n               <ABRBG></ABRBG>\r\n               <!--Optional:-->\r\n               <PROSA></PROSA>\r\n               <!--Optional:-->\r\n               <UEPVW></UEPVW>\r\n               <!--Optional:-->\r\n               <AUTYP></AUTYP>\r\n               <!--Optional:-->\r\n               <STADAT></STADAT>\r\n               <!--Optional:-->\r\n               <FPLNR></FPLNR>\r\n               <!--Optional:-->\r\n               <FPLTR></FPLTR>\r\n               <!--Optional:-->\r\n               <AKTNR></AKTNR>\r\n               <!--Optional:-->\r\n               <KNUMA_PI></KNUMA_PI>\r\n               <!--Optional:-->\r\n               <KNUMA_AG></KNUMA_AG>\r\n               <!--Optional:-->\r\n               <PREFE></PREFE>\r\n               <!--Optional:-->\r\n               <MWSBP></MWSBP>\r\n               <!--Optional:-->\r\n               <AUGRU_AUFT></AUGRU_AUFT>\r\n               <!--Optional:-->\r\n               <FAREG></FAREG>\r\n               <!--Optional:-->\r\n               <UPMAT></UPMAT>\r\n               <!--Optional:-->\r\n               <UKONM></UKONM>\r\n               <!--Optional:-->\r\n               <CMPRE_FLT></CMPRE_FLT>\r\n               <!--Optional:-->\r\n               <ABFOR></ABFOR>\r\n               <!--Optional:-->\r\n               <ABGES></ABGES>\r\n               <!--Optional:-->\r\n               <J_1ARFZ></J_1ARFZ>\r\n               <!--Optional:-->\r\n               <J_1AREGIO></J_1AREGIO>\r\n               <!--Optional:-->\r\n               <J_1AGICD></J_1AGICD>\r\n               <!--Optional:-->\r\n               <J_1ADTYP></J_1ADTYP>\r\n               <!--Optional:-->\r\n               <J_1ATXREL></J_1ATXREL>\r\n               <!--Optional:-->\r\n               <J_1BCFOP></J_1BCFOP>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW1></J_1BTAXLW1>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW2></J_1BTAXLW2>\r\n               <!--Optional:-->\r\n               <J_1BTXSDC></J_1BTXSDC>\r\n               <!--Optional:-->\r\n               <BRTWR></BRTWR>\r\n               <!--Optional:-->\r\n               <WKTNR></WKTNR>\r\n               <!--Optional:-->\r\n               <WKTPS></WKTPS>\r\n               <!--Optional:-->\r\n               <RPLNR></RPLNR>\r\n               <!--Optional:-->\r\n               <KURSK_DAT></KURSK_DAT>\r\n               <!--Optional:-->\r\n               <WGRU1></WGRU1>\r\n               <!--Optional:-->\r\n               <WGRU2></WGRU2>\r\n               <!--Optional:-->\r\n               <KDKG1></KDKG1>\r\n               <!--Optional:-->\r\n               <KDKG2></KDKG2>\r\n               <!--Optional:-->\r\n               <KDKG3></KDKG3>\r\n               <!--Optional:-->\r\n               <KDKG4></KDKG4>\r\n               <!--Optional:-->\r\n               <KDKG5></KDKG5>\r\n               <!--Optional:-->\r\n               <VKAUS></VKAUS>\r\n               <!--Optional:-->\r\n               <J_1AINDXP></J_1AINDXP>\r\n               <!--Optional:-->\r\n               <J_1AIDATEP></J_1AIDATEP>\r\n               <!--Optional:-->\r\n               <KZFME></KZFME>\r\n               <!--Optional:-->\r\n               <MWSKZ></MWSKZ>\r\n               <!--Optional:-->\r\n               <VERTT></VERTT>\r\n               <!--Optional:-->\r\n               <VERTN></VERTN>\r\n               <!--Optional:-->\r\n               <SGTXT></SGTXT>\r\n               <!--Optional:-->\r\n               <DELCO></DELCO>\r\n               <!--Optional:-->\r\n               <BEMOT></BEMOT>\r\n               <!--Optional:-->\r\n               <RRREL></RRREL>\r\n               <!--Optional:-->\r\n               <AKKUR></AKKUR>\r\n               <!--Optional:-->\r\n               <WMINR></WMINR>\r\n               <!--Optional:-->\r\n               <VGBEL_EX></VGBEL_EX>\r\n               <!--Optional:-->\r\n               <VGPOS_EX></VGPOS_EX>\r\n               <!--Optional:-->\r\n               <LOGSYS></LOGSYS>\r\n               <!--Optional:-->\r\n               <VGTYP_EX></VGTYP_EX>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW3></J_1BTAXLW3>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW4></J_1BTAXLW4>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW5></J_1BTAXLW5>\r\n               <!--Optional:-->\r\n               <MSR_ID></MSR_ID>\r\n               <!--Optional:-->\r\n               <MSR_REFUND_CODE></MSR_REFUND_CODE>\r\n               <!--Optional:-->\r\n               <MSR_RET_REASON></MSR_RET_REASON>\r\n               <!--Optional:-->\r\n               <NRAB_KNUMH></NRAB_KNUMH>\r\n               <!--Optional:-->\r\n               <NRAB_VALUE></NRAB_VALUE>\r\n               <!--Optional:-->\r\n               <DISPUTE_CASE>cid:692616247927</DISPUTE_CASE>\r\n               <!--Optional:-->\r\n               <FUND_USAGE_ITEM>cid:1266779858400</FUND_USAGE_ITEM>\r\n               <!--Optional:-->\r\n               <FARR_RELTYPE></FARR_RELTYPE>\r\n               <!--Optional:-->\r\n               <CLAIMS_TAXATION></CLAIMS_TAXATION>\r\n               <!--Optional:-->\r\n               <KURRF_DAT_ORIG></KURRF_DAT_ORIG>\r\n               <!--Optional:-->\r\n               <VGTYP_EXT></VGTYP_EXT>\r\n               <!--Optional:-->\r\n               <SGT_RCAT></SGT_RCAT>\r\n               <!--Optional:-->\r\n               <SGT_SCAT></SGT_SCAT>\r\n               <!--Optional:-->\r\n               <AUFPL></AUFPL>\r\n               <!--Optional:-->\r\n               <APLZL></APLZL>\r\n               <!--Optional:-->\r\n               <DPCNR></DPCNR>\r\n               <!--Optional:-->\r\n               <DCPNR></DCPNR>\r\n               <!--Optional:-->\r\n               <DPNRB></DPNRB>\r\n               <!--Optional:-->\r\n               <PEROP_BEG></PEROP_BEG>\r\n               <!--Optional:-->\r\n               <PEROP_END></PEROP_END>\r\n               <!--Optional:-->\r\n               <FMFGUS_KEY></FMFGUS_KEY>\r\n               <!--Optional:-->\r\n               <FSH_SEASON_YEAR></FSH_SEASON_YEAR>\r\n               <!--Optional:-->\r\n               <FSH_SEASON></FSH_SEASON>\r\n               <!--Optional:-->\r\n               <FSH_COLLECTION></FSH_COLLECTION>\r\n               <!--Optional:-->\r\n               <FSH_THEME></FSH_THEME>\r\n               <!--Optional:-->\r\n               <FONDS></FONDS>\r\n               <!--Optional:-->\r\n               <FISTL></FISTL>\r\n               <!--Optional:-->\r\n               <FKBER></FKBER>\r\n               <!--Optional:-->\r\n               <GRANT_NBR></GRANT_NBR>\r\n               <!--Optional:-->\r\n               <BUDGET_PD></BUDGET_PD>\r\n               <!--Optional:-->\r\n               <PRS_WORK_PERIOD></PRS_WORK_PERIOD>\r\n               <!--Optional:-->\r\n               <PPRCTR></PPRCTR>\r\n               <!--Optional:-->\r\n               <PARGB></PARGB>\r\n               <!--Optional:-->\r\n               <AUFPL_OAA></AUFPL_OAA>\r\n               <!--Optional:-->\r\n               <APLZL_OAA></APLZL_OAA>\r\n               <!--Optional:-->\r\n               <CAMPAIGN>cid:1517723028363</CAMPAIGN>\r\n               <!--Optional:-->\r\n               <COMPREAS></COMPREAS>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC1></WRF_CHARSTC1>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC2></WRF_CHARSTC2>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC3></WRF_CHARSTC3>\r\n            </item>\r\n         </IT_INVOICE_DETAIL>\r\n      </urn:ZBAPI_SD_INVOICE_DETAILS_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);

        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_INVOICE_DETAILS_AM.Response'][0]['IT_INVOICE_DETAIL']


            responseresults_InvoiceDetail = resp



        });


        res.send(responseresults_InvoiceDetail)
    });

})
router.get('/InquiryDetail', (req, res) => {

    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_INQUIRYDETAILS_AM&interfaceNamespace=http://Customer_Portal_AM.com',
        'headers': {
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Content-Type': 'application/xml',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyMzA2MjkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjIzMDYyOTE2WjAjBgkqhkiG9w0BCQQxFgQUnjECypfLMIsydOACgZLIC1mAkP0wCQYHKoZIzjgEAwQvMC0CFHlIc522noHeAAAM%2FTzq2eK6O3K!AhUAuGDWcdwKxZuO!eKENyZBUSbHXGI%3D; JSESSIONID=2WJw-FQ5T5reN8mwD2WmmnmZLECPgQF-Y2kA_SAPapwdKpCVJvRFYDELhH1dFtVl; JSESSIONMARKID=va1QoAhwl8mTzZMY111JVYFCbYj_YCf3UqOH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_INQUIRY_DETAILS_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_INQUIRY_NUMBER>' + Inquiry_no + '</P_INQUIRY_NUMBER>\r\n         <IT_INQUIRY_DETAILS>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <MANDT></MANDT>\r\n               <!--Optional:-->\r\n               <VBELN></VBELN>\r\n               <!--Optional:-->\r\n               <POSNR></POSNR>\r\n               <!--Optional:-->\r\n               <MATNR></MATNR>\r\n               <!--Optional:-->\r\n               <MATWA></MATWA>\r\n               <!--Optional:-->\r\n               <PMATN></PMATN>\r\n               <!--Optional:-->\r\n               <CHARG></CHARG>\r\n               <!--Optional:-->\r\n               <MATKL></MATKL>\r\n               <!--Optional:-->\r\n               <ARKTX></ARKTX>\r\n               <!--Optional:-->\r\n               <PSTYV></PSTYV>\r\n               <!--Optional:-->\r\n               <POSAR></POSAR>\r\n               <!--Optional:-->\r\n               <LFREL></LFREL>\r\n               <!--Optional:-->\r\n               <FKREL></FKREL>\r\n               <!--Optional:-->\r\n               <UEPOS></UEPOS>\r\n               <!--Optional:-->\r\n               <GRPOS></GRPOS>\r\n               <!--Optional:-->\r\n               <ABGRU></ABGRU>\r\n               <!--Optional:-->\r\n               <PRODH></PRODH>\r\n               <!--Optional:-->\r\n               <ZWERT></ZWERT>\r\n               <!--Optional:-->\r\n               <ZMENG></ZMENG>\r\n               <!--Optional:-->\r\n               <ZIEME></ZIEME>\r\n               <!--Optional:-->\r\n               <UMZIZ></UMZIZ>\r\n               <!--Optional:-->\r\n               <UMZIN></UMZIN>\r\n               <!--Optional:-->\r\n               <MEINS></MEINS>\r\n               <!--Optional:-->\r\n               <SMENG></SMENG>\r\n               <!--Optional:-->\r\n               <ABLFZ></ABLFZ>\r\n               <!--Optional:-->\r\n               <ABDAT></ABDAT>\r\n               <!--Optional:-->\r\n               <ABSFZ></ABSFZ>\r\n               <!--Optional:-->\r\n               <POSEX></POSEX>\r\n               <!--Optional:-->\r\n               <KDMAT></KDMAT>\r\n               <!--Optional:-->\r\n               <KBVER></KBVER>\r\n               <!--Optional:-->\r\n               <KEVER></KEVER>\r\n               <!--Optional:-->\r\n               <VKGRU></VKGRU>\r\n               <!--Optional:-->\r\n               <VKAUS></VKAUS>\r\n               <!--Optional:-->\r\n               <GRKOR></GRKOR>\r\n               <!--Optional:-->\r\n               <FMENG></FMENG>\r\n               <!--Optional:-->\r\n               <UEBTK></UEBTK>\r\n               <!--Optional:-->\r\n               <UEBTO></UEBTO>\r\n               <!--Optional:-->\r\n               <UNTTO></UNTTO>\r\n               <!--Optional:-->\r\n               <FAKSP></FAKSP>\r\n               <!--Optional:-->\r\n               <ATPKZ></ATPKZ>\r\n               <!--Optional:-->\r\n               <RKFKF></RKFKF>\r\n               <!--Optional:-->\r\n               <SPART></SPART>\r\n               <!--Optional:-->\r\n               <GSBER></GSBER>\r\n               <!--Optional:-->\r\n               <NETWR></NETWR>\r\n               <!--Optional:-->\r\n               <WAERK></WAERK>\r\n               <!--Optional:-->\r\n               <ANTLF></ANTLF>\r\n               <!--Optional:-->\r\n               <KZTLF></KZTLF>\r\n               <!--Optional:-->\r\n               <CHSPL></CHSPL>\r\n               <!--Optional:-->\r\n               <KWMENG></KWMENG>\r\n               <!--Optional:-->\r\n               <LSMENG></LSMENG>\r\n               <!--Optional:-->\r\n               <KBMENG></KBMENG>\r\n               <!--Optional:-->\r\n               <KLMENG></KLMENG>\r\n               <!--Optional:-->\r\n               <VRKME></VRKME>\r\n               <!--Optional:-->\r\n               <UMVKZ></UMVKZ>\r\n               <!--Optional:-->\r\n               <UMVKN></UMVKN>\r\n               <!--Optional:-->\r\n               <BRGEW></BRGEW>\r\n               <!--Optional:-->\r\n               <NTGEW></NTGEW>\r\n               <!--Optional:-->\r\n               <GEWEI></GEWEI>\r\n               <!--Optional:-->\r\n               <VOLUM></VOLUM>\r\n               <!--Optional:-->\r\n               <VOLEH></VOLEH>\r\n               <!--Optional:-->\r\n               <VBELV></VBELV>\r\n               <!--Optional:-->\r\n               <POSNV></POSNV>\r\n               <!--Optional:-->\r\n               <VGBEL></VGBEL>\r\n               <!--Optional:-->\r\n               <VGPOS></VGPOS>\r\n               <!--Optional:-->\r\n               <VOREF></VOREF>\r\n               <!--Optional:-->\r\n               <UPFLU></UPFLU>\r\n               <!--Optional:-->\r\n               <ERLRE></ERLRE>\r\n               <!--Optional:-->\r\n               <LPRIO></LPRIO>\r\n               <!--Optional:-->\r\n               <WERKS></WERKS>\r\n               <!--Optional:-->\r\n               <LGORT></LGORT>\r\n               <!--Optional:-->\r\n               <VSTEL></VSTEL>\r\n               <!--Optional:-->\r\n               <ROUTE></ROUTE>\r\n               <!--Optional:-->\r\n               <STKEY></STKEY>\r\n               <!--Optional:-->\r\n               <STDAT></STDAT>\r\n               <!--Optional:-->\r\n               <STLNR></STLNR>\r\n               <!--Optional:-->\r\n               <STPOS></STPOS>\r\n               <!--Optional:-->\r\n               <AWAHR></AWAHR>\r\n               <!--Optional:-->\r\n               <ERDAT></ERDAT>\r\n               <!--Optional:-->\r\n               <ERNAM></ERNAM>\r\n               <!--Optional:-->\r\n               <ERZET></ERZET>\r\n               <!--Optional:-->\r\n               <TAXM1></TAXM1>\r\n               <!--Optional:-->\r\n               <TAXM2></TAXM2>\r\n               <!--Optional:-->\r\n               <TAXM3></TAXM3>\r\n               <!--Optional:-->\r\n               <TAXM4></TAXM4>\r\n               <!--Optional:-->\r\n               <TAXM5></TAXM5>\r\n               <!--Optional:-->\r\n               <TAXM6></TAXM6>\r\n               <!--Optional:-->\r\n               <TAXM7></TAXM7>\r\n               <!--Optional:-->\r\n               <TAXM8></TAXM8>\r\n               <!--Optional:-->\r\n               <TAXM9></TAXM9>\r\n               <!--Optional:-->\r\n               <VBEAF></VBEAF>\r\n               <!--Optional:-->\r\n               <VBEAV></VBEAV>\r\n               <!--Optional:-->\r\n               <VGREF></VGREF>\r\n               <!--Optional:-->\r\n               <NETPR></NETPR>\r\n               <!--Optional:-->\r\n               <KPEIN></KPEIN>\r\n               <!--Optional:-->\r\n               <KMEIN></KMEIN>\r\n               <!--Optional:-->\r\n               <SHKZG></SHKZG>\r\n               <!--Optional:-->\r\n               <SKTOF></SKTOF>\r\n               <!--Optional:-->\r\n               <MTVFP></MTVFP>\r\n               <!--Optional:-->\r\n               <SUMBD></SUMBD>\r\n               <!--Optional:-->\r\n               <KONDM></KONDM>\r\n               <!--Optional:-->\r\n               <KTGRM></KTGRM>\r\n               <!--Optional:-->\r\n               <BONUS></BONUS>\r\n               <!--Optional:-->\r\n               <PROVG></PROVG>\r\n               <!--Optional:-->\r\n               <EANNR></EANNR>\r\n               <!--Optional:-->\r\n               <PRSOK></PRSOK>\r\n               <!--Optional:-->\r\n               <BWTAR></BWTAR>\r\n               <!--Optional:-->\r\n               <BWTEX></BWTEX>\r\n               <!--Optional:-->\r\n               <XCHPF></XCHPF>\r\n               <!--Optional:-->\r\n               <XCHAR></XCHAR>\r\n               <!--Optional:-->\r\n               <LFMNG></LFMNG>\r\n               <!--Optional:-->\r\n               <STAFO></STAFO>\r\n               <!--Optional:-->\r\n               <WAVWR></WAVWR>\r\n               <!--Optional:-->\r\n               <KZWI1></KZWI1>\r\n               <!--Optional:-->\r\n               <KZWI2></KZWI2>\r\n               <!--Optional:-->\r\n               <KZWI3></KZWI3>\r\n               <!--Optional:-->\r\n               <KZWI4></KZWI4>\r\n               <!--Optional:-->\r\n               <KZWI5></KZWI5>\r\n               <!--Optional:-->\r\n               <KZWI6></KZWI6>\r\n               <!--Optional:-->\r\n               <STCUR></STCUR>\r\n               <!--Optional:-->\r\n               <AEDAT></AEDAT>\r\n               <!--Optional:-->\r\n               <EAN11></EAN11>\r\n               <!--Optional:-->\r\n               <FIXMG></FIXMG>\r\n               <!--Optional:-->\r\n               <PRCTR></PRCTR>\r\n               <!--Optional:-->\r\n               <MVGR1></MVGR1>\r\n               <!--Optional:-->\r\n               <MVGR2></MVGR2>\r\n               <!--Optional:-->\r\n               <MVGR3></MVGR3>\r\n               <!--Optional:-->\r\n               <MVGR4></MVGR4>\r\n               <!--Optional:-->\r\n               <MVGR5></MVGR5>\r\n               <!--Optional:-->\r\n               <KMPMG></KMPMG>\r\n               <!--Optional:-->\r\n               <SUGRD></SUGRD>\r\n               <!--Optional:-->\r\n               <SOBKZ></SOBKZ>\r\n               <!--Optional:-->\r\n               <VPZUO></VPZUO>\r\n               <!--Optional:-->\r\n               <PAOBJNR></PAOBJNR>\r\n               <!--Optional:-->\r\n               <PS_PSP_PNR></PS_PSP_PNR>\r\n               <!--Optional:-->\r\n               <AUFNR></AUFNR>\r\n               <!--Optional:-->\r\n               <VPMAT></VPMAT>\r\n               <!--Optional:-->\r\n               <VPWRK></VPWRK>\r\n               <!--Optional:-->\r\n               <PRBME></PRBME>\r\n               <!--Optional:-->\r\n               <UMREF></UMREF>\r\n               <!--Optional:-->\r\n               <KNTTP></KNTTP>\r\n               <!--Optional:-->\r\n               <KZVBR></KZVBR>\r\n               <!--Optional:-->\r\n               <SERNR></SERNR>\r\n               <!--Optional:-->\r\n               <OBJNR></OBJNR>\r\n               <!--Optional:-->\r\n               <ABGRS></ABGRS>\r\n               <!--Optional:-->\r\n               <BEDAE></BEDAE>\r\n               <!--Optional:-->\r\n               <CMPRE></CMPRE>\r\n               <!--Optional:-->\r\n               <CMTFG></CMTFG>\r\n               <!--Optional:-->\r\n               <CMPNT></CMPNT>\r\n               <!--Optional:-->\r\n               <CMKUA></CMKUA>\r\n               <!--Optional:-->\r\n               <CUOBJ></CUOBJ>\r\n               <!--Optional:-->\r\n               <CUOBJ_CH></CUOBJ_CH>\r\n               <!--Optional:-->\r\n               <CEPOK></CEPOK>\r\n               <!--Optional:-->\r\n               <KOUPD></KOUPD>\r\n               <!--Optional:-->\r\n               <SERAIL></SERAIL>\r\n               <!--Optional:-->\r\n               <ANZSN></ANZSN>\r\n               <!--Optional:-->\r\n               <NACHL></NACHL>\r\n               <!--Optional:-->\r\n               <MAGRV></MAGRV>\r\n               <!--Optional:-->\r\n               <MPROK></MPROK>\r\n               <!--Optional:-->\r\n               <VGTYP></VGTYP>\r\n               <!--Optional:-->\r\n               <PROSA></PROSA>\r\n               <!--Optional:-->\r\n               <UEPVW></UEPVW>\r\n               <!--Optional:-->\r\n               <KALNR></KALNR>\r\n               <!--Optional:-->\r\n               <KLVAR></KLVAR>\r\n               <!--Optional:-->\r\n               <SPOSN></SPOSN>\r\n               <!--Optional:-->\r\n               <KOWRR></KOWRR>\r\n               <!--Optional:-->\r\n               <STADAT></STADAT>\r\n               <!--Optional:-->\r\n               <EXART></EXART>\r\n               <!--Optional:-->\r\n               <PREFE></PREFE>\r\n               <!--Optional:-->\r\n               <KNUMH></KNUMH>\r\n               <!--Optional:-->\r\n               <CLINT></CLINT>\r\n               <!--Optional:-->\r\n               <CHMVS></CHMVS>\r\n               <!--Optional:-->\r\n               <STLTY></STLTY>\r\n               <!--Optional:-->\r\n               <STLKN></STLKN>\r\n               <!--Optional:-->\r\n               <STPOZ></STPOZ>\r\n               <!--Optional:-->\r\n               <STMAN></STMAN>\r\n               <!--Optional:-->\r\n               <ZSCHL_K></ZSCHL_K>\r\n               <!--Optional:-->\r\n               <KALSM_K></KALSM_K>\r\n               <!--Optional:-->\r\n               <KALVAR></KALVAR>\r\n               <!--Optional:-->\r\n               <KOSCH></KOSCH>\r\n               <!--Optional:-->\r\n               <UPMAT></UPMAT>\r\n               <!--Optional:-->\r\n               <UKONM></UKONM>\r\n               <!--Optional:-->\r\n               <MFRGR></MFRGR>\r\n               <!--Optional:-->\r\n               <PLAVO></PLAVO>\r\n               <!--Optional:-->\r\n               <KANNR></KANNR>\r\n               <!--Optional:-->\r\n               <CMPRE_FLT></CMPRE_FLT>\r\n               <!--Optional:-->\r\n               <ABFOR></ABFOR>\r\n               <!--Optional:-->\r\n               <ABGES></ABGES>\r\n               <!--Optional:-->\r\n               <J_1BCFOP></J_1BCFOP>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW1></J_1BTAXLW1>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW2></J_1BTAXLW2>\r\n               <!--Optional:-->\r\n               <J_1BTXSDC></J_1BTXSDC>\r\n               <!--Optional:-->\r\n               <WKTNR></WKTNR>\r\n               <!--Optional:-->\r\n               <WKTPS></WKTPS>\r\n               <!--Optional:-->\r\n               <SKOPF></SKOPF>\r\n               <!--Optional:-->\r\n               <KZBWS></KZBWS>\r\n               <!--Optional:-->\r\n               <WGRU1></WGRU1>\r\n               <!--Optional:-->\r\n               <WGRU2></WGRU2>\r\n               <!--Optional:-->\r\n               <KNUMA_PI></KNUMA_PI>\r\n               <!--Optional:-->\r\n               <KNUMA_AG></KNUMA_AG>\r\n               <!--Optional:-->\r\n               <KZFME></KZFME>\r\n               <!--Optional:-->\r\n               <LSTANR></LSTANR>\r\n               <!--Optional:-->\r\n               <TECHS></TECHS>\r\n               <!--Optional:-->\r\n               <MWSBP></MWSBP>\r\n               <!--Optional:-->\r\n               <BERID></BERID>\r\n               <!--Optional:-->\r\n               <PCTRF></PCTRF>\r\n               <!--Optional:-->\r\n               <LOGSYS_EXT></LOGSYS_EXT>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW3></J_1BTAXLW3>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW4></J_1BTAXLW4>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW5></J_1BTAXLW5>\r\n               <!--Optional:-->\r\n               <STOCKLOC></STOCKLOC>\r\n               <!--Optional:-->\r\n               <SLOCTYPE></SLOCTYPE>\r\n               <!--Optional:-->\r\n               <MSR_RET_REASON></MSR_RET_REASON>\r\n               <!--Optional:-->\r\n               <MSR_REFUND_CODE></MSR_REFUND_CODE>\r\n               <!--Optional:-->\r\n               <MSR_APPROV_BLOCK></MSR_APPROV_BLOCK>\r\n               <!--Optional:-->\r\n               <NRAB_KNUMH></NRAB_KNUMH>\r\n               <!--Optional:-->\r\n               <TRMRISK_RELEVANT></TRMRISK_RELEVANT>\r\n               <!--Optional:-->\r\n               <SGT_RCAT></SGT_RCAT>\r\n               <!--Optional:-->\r\n               <HANDOVERLOC></HANDOVERLOC>\r\n               <!--Optional:-->\r\n               <HANDOVERDATE></HANDOVERDATE>\r\n               <!--Optional:-->\r\n               <HANDOVERTIME></HANDOVERTIME>\r\n               <!--Optional:-->\r\n               <TC_AUT_DET></TC_AUT_DET>\r\n               <!--Optional:-->\r\n               <MANUAL_TC_REASON></MANUAL_TC_REASON>\r\n               <!--Optional:-->\r\n               <FISCAL_INCENTIVE></FISCAL_INCENTIVE>\r\n               <!--Optional:-->\r\n               <TAX_SUBJECT_ST></TAX_SUBJECT_ST>\r\n               <!--Optional:-->\r\n               <FISCAL_INCENTIVE_ID></FISCAL_INCENTIVE_ID>\r\n               <!--Optional:-->\r\n               <SPCSTO></SPCSTO>\r\n               <!--Optional:-->\r\n               <_DATAAGING></_DATAAGING>\r\n               <!--Optional:-->\r\n               <REVACC_REFID></REVACC_REFID>\r\n               <!--Optional:-->\r\n               <REVACC_REFTYPE></REVACC_REFTYPE>\r\n               <!--Optional:-->\r\n               <_-BEV1_-SRFUND></_-BEV1_-SRFUND>\r\n               <!--Optional:-->\r\n               <AUFPL_OLC></AUFPL_OLC>\r\n               <!--Optional:-->\r\n               <APLZL_OLC></APLZL_OLC>\r\n               <!--Optional:-->\r\n               <FERC_IND></FERC_IND>\r\n               <!--Optional:-->\r\n               <FSH_SEASON_YEAR></FSH_SEASON_YEAR>\r\n               <!--Optional:-->\r\n               <FSH_SEASON></FSH_SEASON>\r\n               <!--Optional:-->\r\n               <FSH_COLLECTION></FSH_COLLECTION>\r\n               <!--Optional:-->\r\n               <FSH_THEME></FSH_THEME>\r\n               <!--Optional:-->\r\n               <FSH_CRSD></FSH_CRSD>\r\n               <!--Optional:-->\r\n               <FSH_SEAREF></FSH_SEAREF>\r\n               <!--Optional:-->\r\n               <FSH_CANDATE></FSH_CANDATE>\r\n               <!--Optional:-->\r\n               <FSH_PSM_PFM_SPLIT></FSH_PSM_PFM_SPLIT>\r\n               <!--Optional:-->\r\n               <FSH_VAS_REL></FSH_VAS_REL>\r\n               <!--Optional:-->\r\n               <FSH_VAS_PRNT_ID></FSH_VAS_PRNT_ID>\r\n               <!--Optional:-->\r\n               <FSH_TRANSACTION></FSH_TRANSACTION>\r\n               <!--Optional:-->\r\n               <FSH_ITEM_GROUP></FSH_ITEM_GROUP>\r\n               <!--Optional:-->\r\n               <FSH_ITEM></FSH_ITEM>\r\n               <!--Optional:-->\r\n               <FSH_VASREF></FSH_VASREF>\r\n               <!--Optional:-->\r\n               <FSH_GRID_COND_REC></FSH_GRID_COND_REC>\r\n               <!--Optional:-->\r\n               <KOSTL></KOSTL>\r\n               <!--Optional:-->\r\n               <FONDS></FONDS>\r\n               <!--Optional:-->\r\n               <FISTL></FISTL>\r\n               <!--Optional:-->\r\n               <FKBER></FKBER>\r\n               <!--Optional:-->\r\n               <GRANT_NBR></GRANT_NBR>\r\n               <!--Optional:-->\r\n               <BUDGET_PD></BUDGET_PD>\r\n               <!--Optional:-->\r\n               <IUID_RELEVANT></IUID_RELEVANT>\r\n               <!--Optional:-->\r\n               <MILL_SE_GPOSN></MILL_SE_GPOSN>\r\n               <!--Optional:-->\r\n               <PRS_OBJNR></PRS_OBJNR>\r\n               <!--Optional:-->\r\n               <PRS_SD_SPSNR></PRS_SD_SPSNR>\r\n               <!--Optional:-->\r\n               <PRS_WORK_PERIOD></PRS_WORK_PERIOD>\r\n               <!--Optional:-->\r\n               <TAS></TAS>\r\n               <!--Optional:-->\r\n               <BETC></BETC>\r\n               <!--Optional:-->\r\n               <MOD_ALLOW></MOD_ALLOW>\r\n               <!--Optional:-->\r\n               <CANCEL_ALLOW></CANCEL_ALLOW>\r\n               <!--Optional:-->\r\n               <PAY_METHOD></PAY_METHOD>\r\n               <!--Optional:-->\r\n               <BPN></BPN>\r\n               <!--Optional:-->\r\n               <REP_FREQ></REP_FREQ>\r\n               <!--Optional:-->\r\n               <FMFGUS_KEY></FMFGUS_KEY>\r\n               <!--Optional:-->\r\n               <PARGB></PARGB>\r\n               <!--Optional:-->\r\n               <AUFPL_OAA></AUFPL_OAA>\r\n               <!--Optional:-->\r\n               <APLZL_OAA></APLZL_OAA>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC1></WRF_CHARSTC1>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC2></WRF_CHARSTC2>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC3></WRF_CHARSTC3>\r\n               <!--Optional:-->\r\n               <ARSNUM></ARSNUM>\r\n               <!--Optional:-->\r\n               <ARSPOS></ARSPOS>\r\n               <!--Optional:-->\r\n               <WTYSC_CLMITEM></WTYSC_CLMITEM>\r\n            </item>\r\n         </IT_INQUIRY_DETAILS>\r\n      </urn:ZBAPI_SD_INQUIRY_DETAILS_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_INQUIRY_DETAILS_AM.Response'][0]['IT_INQUIRY_DETAILS']


            responseresults_InquiryDetail = resp



        });


        res.send(responseresults_InquiryDetail)
    });


})
router.get('/SalesDetail', (req, res) => {


    var request = require("request");

    var options = {
        method: 'POST',
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet',
        qs:
        {
            senderParty: '',
            senderService: 'BC_PORTALS_ARIYA',
            receiverParty: '',
            receiverService: '',
            interface: 'SI_SALESSTATUS_AM',
            interfaceNamespace: 'http://Customer_Portal_AM.com'
        },
        headers:
        {
            'postman-token': '5775a339-5ea9-2be5-f625-a1ba6269073e',
            'cache-control': 'no-cache',
            authorization: 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'content-type': 'application/xml'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_SALES_STATUS_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_SALES_DOC_NUMBER_IMPORT>' + Sales_no + '</P_SALES_DOC_NUMBER_IMPORT>\r\n         <IT_SALES_STATUS>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </IT_SALES_STATUS>\r\n      </urn:ZBAPI_SD_SALES_STATUS_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_SALES_STATUS_AM.Response'][0]['IT_SALES_STATUS']


            responseresults_SalesDetail = resp



        });


        res.send(responseresults_SalesDetail)
    });

})
router.post('/InvoiceDetail', (req, res) => {
    Invoice_no = req.body.Invoice_no;

    var request = require("request");

    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_CUSTOMER_INVOICEDETAIL_AM&interfaceNamespace=http://Customer_Portal_AM.com',
        'headers': {
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Content-Type': 'application/xml',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYzMDE0NDkFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjMwMTQ0OTE1WjAjBgkqhkiG9w0BCQQxFgQUZKLbU3mJTgk4ajkT0ZyLZZQs7%2FMwCQYHKoZIzjgEAwQwMC4CFQDLsFk0g3vZWKWtXlrPa7Fdr4C7fQIVANqmVo10oZ!H9IREWfUd9AwtZZ7g; JSESSIONID=YjvTcgxMFoFYv93zte2yphk4bxa1gQF-Y2kA_SAPqyd3c0w7dhrfHTvmoOIjrxcj; JSESSIONMARKID=a5I5mw6cuUhTvSmgdbOtT-P9k-6IrTolLFe35jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_INVOICE_DETAILS_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_SALES_NUMBER_IMPORT>' + Invoice_no + '</P_SALES_NUMBER_IMPORT>\r\n         <!--Optional:-->\r\n         <IT_INVOICE_DETAIL>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <MANDT></MANDT>\r\n               <!--Optional:-->\r\n               <VBELN></VBELN>\r\n               <!--Optional:-->\r\n               <POSNR></POSNR>\r\n               <!--Optional:-->\r\n               <UEPOS></UEPOS>\r\n               <!--Optional:-->\r\n               <FKIMG></FKIMG>\r\n               <!--Optional:-->\r\n               <VRKME></VRKME>\r\n               <!--Optional:-->\r\n               <UMVKZ></UMVKZ>\r\n               <!--Optional:-->\r\n               <UMVKN></UMVKN>\r\n               <!--Optional:-->\r\n               <MEINS></MEINS>\r\n               <!--Optional:-->\r\n               <SMENG></SMENG>\r\n               <!--Optional:-->\r\n               <FKLMG></FKLMG>\r\n               <!--Optional:-->\r\n               <LMENG></LMENG>\r\n               <!--Optional:-->\r\n               <NTGEW></NTGEW>\r\n               <!--Optional:-->\r\n               <BRGEW></BRGEW>\r\n               <!--Optional:-->\r\n               <GEWEI></GEWEI>\r\n               <!--Optional:-->\r\n               <VOLUM></VOLUM>\r\n               <!--Optional:-->\r\n               <VOLEH></VOLEH>\r\n               <!--Optional:-->\r\n               <GSBER></GSBER>\r\n               <!--Optional:-->\r\n               <PRSDT></PRSDT>\r\n               <!--Optional:-->\r\n               <FBUDA></FBUDA>\r\n               <!--Optional:-->\r\n               <KURSK></KURSK>\r\n               <!--Optional:-->\r\n               <NETWR></NETWR>\r\n               <!--Optional:-->\r\n               <VBELV></VBELV>\r\n               <!--Optional:-->\r\n               <POSNV></POSNV>\r\n               <!--Optional:-->\r\n               <VGBEL></VGBEL>\r\n               <!--Optional:-->\r\n               <VGPOS></VGPOS>\r\n               <!--Optional:-->\r\n               <VGTYP></VGTYP>\r\n               <!--Optional:-->\r\n               <AUBEL></AUBEL>\r\n               <!--Optional:-->\r\n               <AUPOS></AUPOS>\r\n               <!--Optional:-->\r\n               <AUREF></AUREF>\r\n               <!--Optional:-->\r\n               <MATNR></MATNR>\r\n               <!--Optional:-->\r\n               <ARKTX></ARKTX>\r\n               <!--Optional:-->\r\n               <PMATN></PMATN>\r\n               <!--Optional:-->\r\n               <CHARG></CHARG>\r\n               <!--Optional:-->\r\n               <MATKL></MATKL>\r\n               <!--Optional:-->\r\n               <PSTYV></PSTYV>\r\n               <!--Optional:-->\r\n               <POSAR></POSAR>\r\n               <!--Optional:-->\r\n               <PRODH></PRODH>\r\n               <!--Optional:-->\r\n               <VSTEL></VSTEL>\r\n               <!--Optional:-->\r\n               <ATPKZ></ATPKZ>\r\n               <!--Optional:-->\r\n               <SPART></SPART>\r\n               <!--Optional:-->\r\n               <POSPA></POSPA>\r\n               <!--Optional:-->\r\n               <WERKS></WERKS>\r\n               <!--Optional:-->\r\n               <ALAND></ALAND>\r\n               <!--Optional:-->\r\n               <WKREG></WKREG>\r\n               <!--Optional:-->\r\n               <WKCOU></WKCOU>\r\n               <!--Optional:-->\r\n               <WKCTY></WKCTY>\r\n               <!--Optional:-->\r\n               <TAXM1></TAXM1>\r\n               <!--Optional:-->\r\n               <TAXM2></TAXM2>\r\n               <!--Optional:-->\r\n               <TAXM3></TAXM3>\r\n               <!--Optional:-->\r\n               <TAXM4></TAXM4>\r\n               <!--Optional:-->\r\n               <TAXM5></TAXM5>\r\n               <!--Optional:-->\r\n               <TAXM6></TAXM6>\r\n               <!--Optional:-->\r\n               <TAXM7></TAXM7>\r\n               <!--Optional:-->\r\n               <TAXM8></TAXM8>\r\n               <!--Optional:-->\r\n               <TAXM9></TAXM9>\r\n               <!--Optional:-->\r\n               <KOWRR></KOWRR>\r\n               <!--Optional:-->\r\n               <PRSFD></PRSFD>\r\n               <!--Optional:-->\r\n               <SKTOF></SKTOF>\r\n               <!--Optional:-->\r\n               <SKFBP></SKFBP>\r\n               <!--Optional:-->\r\n               <KONDM></KONDM>\r\n               <!--Optional:-->\r\n               <KTGRM></KTGRM>\r\n               <!--Optional:-->\r\n               <KOSTL></KOSTL>\r\n               <!--Optional:-->\r\n               <BONUS></BONUS>\r\n               <!--Optional:-->\r\n               <PROVG></PROVG>\r\n               <!--Optional:-->\r\n               <EANNR></EANNR>\r\n               <!--Optional:-->\r\n               <VKGRP></VKGRP>\r\n               <!--Optional:-->\r\n               <VKBUR></VKBUR>\r\n               <!--Optional:-->\r\n               <SPARA></SPARA>\r\n               <!--Optional:-->\r\n               <SHKZG></SHKZG>\r\n               <!--Optional:-->\r\n               <ERNAM></ERNAM>\r\n               <!--Optional:-->\r\n               <ERDAT></ERDAT>\r\n               <!--Optional:-->\r\n               <ERZET></ERZET>\r\n               <!--Optional:-->\r\n               <BWTAR></BWTAR>\r\n               <!--Optional:-->\r\n               <LGORT></LGORT>\r\n               <!--Optional:-->\r\n               <STAFO></STAFO>\r\n               <!--Optional:-->\r\n               <WAVWR></WAVWR>\r\n               <!--Optional:-->\r\n               <KZWI1></KZWI1>\r\n               <!--Optional:-->\r\n               <KZWI2></KZWI2>\r\n               <!--Optional:-->\r\n               <KZWI3></KZWI3>\r\n               <!--Optional:-->\r\n               <KZWI4></KZWI4>\r\n               <!--Optional:-->\r\n               <KZWI5></KZWI5>\r\n               <!--Optional:-->\r\n               <KZWI6></KZWI6>\r\n               <!--Optional:-->\r\n               <STCUR></STCUR>\r\n               <!--Optional:-->\r\n               <UVPRS></UVPRS>\r\n               <!--Optional:-->\r\n               <UVALL></UVALL>\r\n               <!--Optional:-->\r\n               <EAN11></EAN11>\r\n               <!--Optional:-->\r\n               <PRCTR></PRCTR>\r\n               <!--Optional:-->\r\n               <KVGR1></KVGR1>\r\n               <!--Optional:-->\r\n               <KVGR2></KVGR2>\r\n               <!--Optional:-->\r\n               <KVGR3></KVGR3>\r\n               <!--Optional:-->\r\n               <KVGR4></KVGR4>\r\n               <!--Optional:-->\r\n               <KVGR5></KVGR5>\r\n               <!--Optional:-->\r\n               <MVGR1></MVGR1>\r\n               <!--Optional:-->\r\n               <MVGR2></MVGR2>\r\n               <!--Optional:-->\r\n               <MVGR3></MVGR3>\r\n               <!--Optional:-->\r\n               <MVGR4></MVGR4>\r\n               <!--Optional:-->\r\n               <MVGR5></MVGR5>\r\n               <!--Optional:-->\r\n               <MATWA></MATWA>\r\n               <!--Optional:-->\r\n               <BONBA></BONBA>\r\n               <!--Optional:-->\r\n               <KOKRS></KOKRS>\r\n               <!--Optional:-->\r\n               <PAOBJNR></PAOBJNR>\r\n               <!--Optional:-->\r\n               <PS_PSP_PNR></PS_PSP_PNR>\r\n               <!--Optional:-->\r\n               <AUFNR></AUFNR>\r\n               <!--Optional:-->\r\n               <TXJCD></TXJCD>\r\n               <!--Optional:-->\r\n               <CMPRE></CMPRE>\r\n               <!--Optional:-->\r\n               <CMPNT></CMPNT>\r\n               <!--Optional:-->\r\n               <CUOBJ></CUOBJ>\r\n               <!--Optional:-->\r\n               <CUOBJ_CH></CUOBJ_CH>\r\n               <!--Optional:-->\r\n               <KOUPD></KOUPD>\r\n               <!--Optional:-->\r\n               <UECHA></UECHA>\r\n               <!--Optional:-->\r\n               <XCHAR></XCHAR>\r\n               <!--Optional:-->\r\n               <ABRVW></ABRVW>\r\n               <!--Optional:-->\r\n               <SERNR></SERNR>\r\n               <!--Optional:-->\r\n               <BZIRK_AUFT></BZIRK_AUFT>\r\n               <!--Optional:-->\r\n               <KDGRP_AUFT></KDGRP_AUFT>\r\n               <!--Optional:-->\r\n               <KONDA_AUFT></KONDA_AUFT>\r\n               <!--Optional:-->\r\n               <LLAND_AUFT></LLAND_AUFT>\r\n               <!--Optional:-->\r\n               <MPROK></MPROK>\r\n               <!--Optional:-->\r\n               <PLTYP_AUFT></PLTYP_AUFT>\r\n               <!--Optional:-->\r\n               <REGIO_AUFT></REGIO_AUFT>\r\n               <!--Optional:-->\r\n               <VKORG_AUFT></VKORG_AUFT>\r\n               <!--Optional:-->\r\n               <VTWEG_AUFT></VTWEG_AUFT>\r\n               <!--Optional:-->\r\n               <ABRBG></ABRBG>\r\n               <!--Optional:-->\r\n               <PROSA></PROSA>\r\n               <!--Optional:-->\r\n               <UEPVW></UEPVW>\r\n               <!--Optional:-->\r\n               <AUTYP></AUTYP>\r\n               <!--Optional:-->\r\n               <STADAT></STADAT>\r\n               <!--Optional:-->\r\n               <FPLNR></FPLNR>\r\n               <!--Optional:-->\r\n               <FPLTR></FPLTR>\r\n               <!--Optional:-->\r\n               <AKTNR></AKTNR>\r\n               <!--Optional:-->\r\n               <KNUMA_PI></KNUMA_PI>\r\n               <!--Optional:-->\r\n               <KNUMA_AG></KNUMA_AG>\r\n               <!--Optional:-->\r\n               <PREFE></PREFE>\r\n               <!--Optional:-->\r\n               <MWSBP></MWSBP>\r\n               <!--Optional:-->\r\n               <AUGRU_AUFT></AUGRU_AUFT>\r\n               <!--Optional:-->\r\n               <FAREG></FAREG>\r\n               <!--Optional:-->\r\n               <UPMAT></UPMAT>\r\n               <!--Optional:-->\r\n               <UKONM></UKONM>\r\n               <!--Optional:-->\r\n               <CMPRE_FLT></CMPRE_FLT>\r\n               <!--Optional:-->\r\n               <ABFOR></ABFOR>\r\n               <!--Optional:-->\r\n               <ABGES></ABGES>\r\n               <!--Optional:-->\r\n               <J_1ARFZ></J_1ARFZ>\r\n               <!--Optional:-->\r\n               <J_1AREGIO></J_1AREGIO>\r\n               <!--Optional:-->\r\n               <J_1AGICD></J_1AGICD>\r\n               <!--Optional:-->\r\n               <J_1ADTYP></J_1ADTYP>\r\n               <!--Optional:-->\r\n               <J_1ATXREL></J_1ATXREL>\r\n               <!--Optional:-->\r\n               <J_1BCFOP></J_1BCFOP>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW1></J_1BTAXLW1>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW2></J_1BTAXLW2>\r\n               <!--Optional:-->\r\n               <J_1BTXSDC></J_1BTXSDC>\r\n               <!--Optional:-->\r\n               <BRTWR></BRTWR>\r\n               <!--Optional:-->\r\n               <WKTNR></WKTNR>\r\n               <!--Optional:-->\r\n               <WKTPS></WKTPS>\r\n               <!--Optional:-->\r\n               <RPLNR></RPLNR>\r\n               <!--Optional:-->\r\n               <KURSK_DAT></KURSK_DAT>\r\n               <!--Optional:-->\r\n               <WGRU1></WGRU1>\r\n               <!--Optional:-->\r\n               <WGRU2></WGRU2>\r\n               <!--Optional:-->\r\n               <KDKG1></KDKG1>\r\n               <!--Optional:-->\r\n               <KDKG2></KDKG2>\r\n               <!--Optional:-->\r\n               <KDKG3></KDKG3>\r\n               <!--Optional:-->\r\n               <KDKG4></KDKG4>\r\n               <!--Optional:-->\r\n               <KDKG5></KDKG5>\r\n               <!--Optional:-->\r\n               <VKAUS></VKAUS>\r\n               <!--Optional:-->\r\n               <J_1AINDXP></J_1AINDXP>\r\n               <!--Optional:-->\r\n               <J_1AIDATEP></J_1AIDATEP>\r\n               <!--Optional:-->\r\n               <KZFME></KZFME>\r\n               <!--Optional:-->\r\n               <MWSKZ></MWSKZ>\r\n               <!--Optional:-->\r\n               <VERTT></VERTT>\r\n               <!--Optional:-->\r\n               <VERTN></VERTN>\r\n               <!--Optional:-->\r\n               <SGTXT></SGTXT>\r\n               <!--Optional:-->\r\n               <DELCO></DELCO>\r\n               <!--Optional:-->\r\n               <BEMOT></BEMOT>\r\n               <!--Optional:-->\r\n               <RRREL></RRREL>\r\n               <!--Optional:-->\r\n               <AKKUR></AKKUR>\r\n               <!--Optional:-->\r\n               <WMINR></WMINR>\r\n               <!--Optional:-->\r\n               <VGBEL_EX></VGBEL_EX>\r\n               <!--Optional:-->\r\n               <VGPOS_EX></VGPOS_EX>\r\n               <!--Optional:-->\r\n               <LOGSYS></LOGSYS>\r\n               <!--Optional:-->\r\n               <VGTYP_EX></VGTYP_EX>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW3></J_1BTAXLW3>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW4></J_1BTAXLW4>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW5></J_1BTAXLW5>\r\n               <!--Optional:-->\r\n               <MSR_ID></MSR_ID>\r\n               <!--Optional:-->\r\n               <MSR_REFUND_CODE></MSR_REFUND_CODE>\r\n               <!--Optional:-->\r\n               <MSR_RET_REASON></MSR_RET_REASON>\r\n               <!--Optional:-->\r\n               <NRAB_KNUMH></NRAB_KNUMH>\r\n               <!--Optional:-->\r\n               <NRAB_VALUE></NRAB_VALUE>\r\n               <!--Optional:-->\r\n               <DISPUTE_CASE>cid:692616247927</DISPUTE_CASE>\r\n               <!--Optional:-->\r\n               <FUND_USAGE_ITEM>cid:1266779858400</FUND_USAGE_ITEM>\r\n               <!--Optional:-->\r\n               <FARR_RELTYPE></FARR_RELTYPE>\r\n               <!--Optional:-->\r\n               <CLAIMS_TAXATION></CLAIMS_TAXATION>\r\n               <!--Optional:-->\r\n               <KURRF_DAT_ORIG></KURRF_DAT_ORIG>\r\n               <!--Optional:-->\r\n               <VGTYP_EXT></VGTYP_EXT>\r\n               <!--Optional:-->\r\n               <SGT_RCAT></SGT_RCAT>\r\n               <!--Optional:-->\r\n               <SGT_SCAT></SGT_SCAT>\r\n               <!--Optional:-->\r\n               <AUFPL></AUFPL>\r\n               <!--Optional:-->\r\n               <APLZL></APLZL>\r\n               <!--Optional:-->\r\n               <DPCNR></DPCNR>\r\n               <!--Optional:-->\r\n               <DCPNR></DCPNR>\r\n               <!--Optional:-->\r\n               <DPNRB></DPNRB>\r\n               <!--Optional:-->\r\n               <PEROP_BEG></PEROP_BEG>\r\n               <!--Optional:-->\r\n               <PEROP_END></PEROP_END>\r\n               <!--Optional:-->\r\n               <FMFGUS_KEY></FMFGUS_KEY>\r\n               <!--Optional:-->\r\n               <FSH_SEASON_YEAR></FSH_SEASON_YEAR>\r\n               <!--Optional:-->\r\n               <FSH_SEASON></FSH_SEASON>\r\n               <!--Optional:-->\r\n               <FSH_COLLECTION></FSH_COLLECTION>\r\n               <!--Optional:-->\r\n               <FSH_THEME></FSH_THEME>\r\n               <!--Optional:-->\r\n               <FONDS></FONDS>\r\n               <!--Optional:-->\r\n               <FISTL></FISTL>\r\n               <!--Optional:-->\r\n               <FKBER></FKBER>\r\n               <!--Optional:-->\r\n               <GRANT_NBR></GRANT_NBR>\r\n               <!--Optional:-->\r\n               <BUDGET_PD></BUDGET_PD>\r\n               <!--Optional:-->\r\n               <PRS_WORK_PERIOD></PRS_WORK_PERIOD>\r\n               <!--Optional:-->\r\n               <PPRCTR></PPRCTR>\r\n               <!--Optional:-->\r\n               <PARGB></PARGB>\r\n               <!--Optional:-->\r\n               <AUFPL_OAA></AUFPL_OAA>\r\n               <!--Optional:-->\r\n               <APLZL_OAA></APLZL_OAA>\r\n               <!--Optional:-->\r\n               <CAMPAIGN>cid:1517723028363</CAMPAIGN>\r\n               <!--Optional:-->\r\n               <COMPREAS></COMPREAS>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC1></WRF_CHARSTC1>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC2></WRF_CHARSTC2>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC3></WRF_CHARSTC3>\r\n            </item>\r\n         </IT_INVOICE_DETAIL>\r\n      </urn:ZBAPI_SD_INVOICE_DETAILS_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);

        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_INVOICE_DETAILS_AM.Response'][0]['IT_INVOICE_DETAIL']


            responseresults_InvoiceDetail = resp



        });


        res.send(responseresults_InvoiceDetail)
    });

})

router.post('/SalesDetail', (req, res) => {

    Sales_no = req.body.Sales_no;
    var request = require("request");

    var options = {
        method: 'POST',
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet',
        qs:
        {
            senderParty: '',
            senderService: 'BC_PORTALS_ARIYA',
            receiverParty: '',
            receiverService: '',
            interface: 'SI_SALESSTATUS_AM',
            interfaceNamespace: 'http://Customer_Portal_AM.com'
        },
        headers:
        {
            'postman-token': '5775a339-5ea9-2be5-f625-a1ba6269073e',
            'cache-control': 'no-cache',
            authorization: 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'content-type': 'application/xml'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_SALES_STATUS_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_SALES_DOC_NUMBER_IMPORT>' + Sales_no + '</P_SALES_DOC_NUMBER_IMPORT>\r\n         <IT_SALES_STATUS>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </IT_SALES_STATUS>\r\n      </urn:ZBAPI_SD_SALES_STATUS_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_SALES_STATUS_AM.Response'][0]['IT_SALES_STATUS']


            responseresults_SalesDetail = resp



        });


        res.send(responseresults_SalesDetail)
    });

})

router.post('/InquiryDetail', (req, res) => {

    Inquiry_no = req.body.Inquiry_no;

    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_INQUIRYDETAILS_AM&interfaceNamespace=http://Customer_Portal_AM.com',
        'headers': {
            'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
            'Content-Type': 'application/xml',
            'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyMzA2MjkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjIzMDYyOTE2WjAjBgkqhkiG9w0BCQQxFgQUnjECypfLMIsydOACgZLIC1mAkP0wCQYHKoZIzjgEAwQvMC0CFHlIc522noHeAAAM%2FTzq2eK6O3K!AhUAuGDWcdwKxZuO!eKENyZBUSbHXGI%3D; JSESSIONID=2WJw-FQ5T5reN8mwD2WmmnmZLECPgQF-Y2kA_SAPapwdKpCVJvRFYDELhH1dFtVl; JSESSIONMARKID=va1QoAhwl8mTzZMY111JVYFCbYj_YCf3UqOH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_INQUIRY_DETAILS_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_INQUIRY_NUMBER>' + Inquiry_no + '</P_INQUIRY_NUMBER>\r\n         <IT_INQUIRY_DETAILS>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <MANDT></MANDT>\r\n               <!--Optional:-->\r\n               <VBELN></VBELN>\r\n               <!--Optional:-->\r\n               <POSNR></POSNR>\r\n               <!--Optional:-->\r\n               <MATNR></MATNR>\r\n               <!--Optional:-->\r\n               <MATWA></MATWA>\r\n               <!--Optional:-->\r\n               <PMATN></PMATN>\r\n               <!--Optional:-->\r\n               <CHARG></CHARG>\r\n               <!--Optional:-->\r\n               <MATKL></MATKL>\r\n               <!--Optional:-->\r\n               <ARKTX></ARKTX>\r\n               <!--Optional:-->\r\n               <PSTYV></PSTYV>\r\n               <!--Optional:-->\r\n               <POSAR></POSAR>\r\n               <!--Optional:-->\r\n               <LFREL></LFREL>\r\n               <!--Optional:-->\r\n               <FKREL></FKREL>\r\n               <!--Optional:-->\r\n               <UEPOS></UEPOS>\r\n               <!--Optional:-->\r\n               <GRPOS></GRPOS>\r\n               <!--Optional:-->\r\n               <ABGRU></ABGRU>\r\n               <!--Optional:-->\r\n               <PRODH></PRODH>\r\n               <!--Optional:-->\r\n               <ZWERT></ZWERT>\r\n               <!--Optional:-->\r\n               <ZMENG></ZMENG>\r\n               <!--Optional:-->\r\n               <ZIEME></ZIEME>\r\n               <!--Optional:-->\r\n               <UMZIZ></UMZIZ>\r\n               <!--Optional:-->\r\n               <UMZIN></UMZIN>\r\n               <!--Optional:-->\r\n               <MEINS></MEINS>\r\n               <!--Optional:-->\r\n               <SMENG></SMENG>\r\n               <!--Optional:-->\r\n               <ABLFZ></ABLFZ>\r\n               <!--Optional:-->\r\n               <ABDAT></ABDAT>\r\n               <!--Optional:-->\r\n               <ABSFZ></ABSFZ>\r\n               <!--Optional:-->\r\n               <POSEX></POSEX>\r\n               <!--Optional:-->\r\n               <KDMAT></KDMAT>\r\n               <!--Optional:-->\r\n               <KBVER></KBVER>\r\n               <!--Optional:-->\r\n               <KEVER></KEVER>\r\n               <!--Optional:-->\r\n               <VKGRU></VKGRU>\r\n               <!--Optional:-->\r\n               <VKAUS></VKAUS>\r\n               <!--Optional:-->\r\n               <GRKOR></GRKOR>\r\n               <!--Optional:-->\r\n               <FMENG></FMENG>\r\n               <!--Optional:-->\r\n               <UEBTK></UEBTK>\r\n               <!--Optional:-->\r\n               <UEBTO></UEBTO>\r\n               <!--Optional:-->\r\n               <UNTTO></UNTTO>\r\n               <!--Optional:-->\r\n               <FAKSP></FAKSP>\r\n               <!--Optional:-->\r\n               <ATPKZ></ATPKZ>\r\n               <!--Optional:-->\r\n               <RKFKF></RKFKF>\r\n               <!--Optional:-->\r\n               <SPART></SPART>\r\n               <!--Optional:-->\r\n               <GSBER></GSBER>\r\n               <!--Optional:-->\r\n               <NETWR></NETWR>\r\n               <!--Optional:-->\r\n               <WAERK></WAERK>\r\n               <!--Optional:-->\r\n               <ANTLF></ANTLF>\r\n               <!--Optional:-->\r\n               <KZTLF></KZTLF>\r\n               <!--Optional:-->\r\n               <CHSPL></CHSPL>\r\n               <!--Optional:-->\r\n               <KWMENG></KWMENG>\r\n               <!--Optional:-->\r\n               <LSMENG></LSMENG>\r\n               <!--Optional:-->\r\n               <KBMENG></KBMENG>\r\n               <!--Optional:-->\r\n               <KLMENG></KLMENG>\r\n               <!--Optional:-->\r\n               <VRKME></VRKME>\r\n               <!--Optional:-->\r\n               <UMVKZ></UMVKZ>\r\n               <!--Optional:-->\r\n               <UMVKN></UMVKN>\r\n               <!--Optional:-->\r\n               <BRGEW></BRGEW>\r\n               <!--Optional:-->\r\n               <NTGEW></NTGEW>\r\n               <!--Optional:-->\r\n               <GEWEI></GEWEI>\r\n               <!--Optional:-->\r\n               <VOLUM></VOLUM>\r\n               <!--Optional:-->\r\n               <VOLEH></VOLEH>\r\n               <!--Optional:-->\r\n               <VBELV></VBELV>\r\n               <!--Optional:-->\r\n               <POSNV></POSNV>\r\n               <!--Optional:-->\r\n               <VGBEL></VGBEL>\r\n               <!--Optional:-->\r\n               <VGPOS></VGPOS>\r\n               <!--Optional:-->\r\n               <VOREF></VOREF>\r\n               <!--Optional:-->\r\n               <UPFLU></UPFLU>\r\n               <!--Optional:-->\r\n               <ERLRE></ERLRE>\r\n               <!--Optional:-->\r\n               <LPRIO></LPRIO>\r\n               <!--Optional:-->\r\n               <WERKS></WERKS>\r\n               <!--Optional:-->\r\n               <LGORT></LGORT>\r\n               <!--Optional:-->\r\n               <VSTEL></VSTEL>\r\n               <!--Optional:-->\r\n               <ROUTE></ROUTE>\r\n               <!--Optional:-->\r\n               <STKEY></STKEY>\r\n               <!--Optional:-->\r\n               <STDAT></STDAT>\r\n               <!--Optional:-->\r\n               <STLNR></STLNR>\r\n               <!--Optional:-->\r\n               <STPOS></STPOS>\r\n               <!--Optional:-->\r\n               <AWAHR></AWAHR>\r\n               <!--Optional:-->\r\n               <ERDAT></ERDAT>\r\n               <!--Optional:-->\r\n               <ERNAM></ERNAM>\r\n               <!--Optional:-->\r\n               <ERZET></ERZET>\r\n               <!--Optional:-->\r\n               <TAXM1></TAXM1>\r\n               <!--Optional:-->\r\n               <TAXM2></TAXM2>\r\n               <!--Optional:-->\r\n               <TAXM3></TAXM3>\r\n               <!--Optional:-->\r\n               <TAXM4></TAXM4>\r\n               <!--Optional:-->\r\n               <TAXM5></TAXM5>\r\n               <!--Optional:-->\r\n               <TAXM6></TAXM6>\r\n               <!--Optional:-->\r\n               <TAXM7></TAXM7>\r\n               <!--Optional:-->\r\n               <TAXM8></TAXM8>\r\n               <!--Optional:-->\r\n               <TAXM9></TAXM9>\r\n               <!--Optional:-->\r\n               <VBEAF></VBEAF>\r\n               <!--Optional:-->\r\n               <VBEAV></VBEAV>\r\n               <!--Optional:-->\r\n               <VGREF></VGREF>\r\n               <!--Optional:-->\r\n               <NETPR></NETPR>\r\n               <!--Optional:-->\r\n               <KPEIN></KPEIN>\r\n               <!--Optional:-->\r\n               <KMEIN></KMEIN>\r\n               <!--Optional:-->\r\n               <SHKZG></SHKZG>\r\n               <!--Optional:-->\r\n               <SKTOF></SKTOF>\r\n               <!--Optional:-->\r\n               <MTVFP></MTVFP>\r\n               <!--Optional:-->\r\n               <SUMBD></SUMBD>\r\n               <!--Optional:-->\r\n               <KONDM></KONDM>\r\n               <!--Optional:-->\r\n               <KTGRM></KTGRM>\r\n               <!--Optional:-->\r\n               <BONUS></BONUS>\r\n               <!--Optional:-->\r\n               <PROVG></PROVG>\r\n               <!--Optional:-->\r\n               <EANNR></EANNR>\r\n               <!--Optional:-->\r\n               <PRSOK></PRSOK>\r\n               <!--Optional:-->\r\n               <BWTAR></BWTAR>\r\n               <!--Optional:-->\r\n               <BWTEX></BWTEX>\r\n               <!--Optional:-->\r\n               <XCHPF></XCHPF>\r\n               <!--Optional:-->\r\n               <XCHAR></XCHAR>\r\n               <!--Optional:-->\r\n               <LFMNG></LFMNG>\r\n               <!--Optional:-->\r\n               <STAFO></STAFO>\r\n               <!--Optional:-->\r\n               <WAVWR></WAVWR>\r\n               <!--Optional:-->\r\n               <KZWI1></KZWI1>\r\n               <!--Optional:-->\r\n               <KZWI2></KZWI2>\r\n               <!--Optional:-->\r\n               <KZWI3></KZWI3>\r\n               <!--Optional:-->\r\n               <KZWI4></KZWI4>\r\n               <!--Optional:-->\r\n               <KZWI5></KZWI5>\r\n               <!--Optional:-->\r\n               <KZWI6></KZWI6>\r\n               <!--Optional:-->\r\n               <STCUR></STCUR>\r\n               <!--Optional:-->\r\n               <AEDAT></AEDAT>\r\n               <!--Optional:-->\r\n               <EAN11></EAN11>\r\n               <!--Optional:-->\r\n               <FIXMG></FIXMG>\r\n               <!--Optional:-->\r\n               <PRCTR></PRCTR>\r\n               <!--Optional:-->\r\n               <MVGR1></MVGR1>\r\n               <!--Optional:-->\r\n               <MVGR2></MVGR2>\r\n               <!--Optional:-->\r\n               <MVGR3></MVGR3>\r\n               <!--Optional:-->\r\n               <MVGR4></MVGR4>\r\n               <!--Optional:-->\r\n               <MVGR5></MVGR5>\r\n               <!--Optional:-->\r\n               <KMPMG></KMPMG>\r\n               <!--Optional:-->\r\n               <SUGRD></SUGRD>\r\n               <!--Optional:-->\r\n               <SOBKZ></SOBKZ>\r\n               <!--Optional:-->\r\n               <VPZUO></VPZUO>\r\n               <!--Optional:-->\r\n               <PAOBJNR></PAOBJNR>\r\n               <!--Optional:-->\r\n               <PS_PSP_PNR></PS_PSP_PNR>\r\n               <!--Optional:-->\r\n               <AUFNR></AUFNR>\r\n               <!--Optional:-->\r\n               <VPMAT></VPMAT>\r\n               <!--Optional:-->\r\n               <VPWRK></VPWRK>\r\n               <!--Optional:-->\r\n               <PRBME></PRBME>\r\n               <!--Optional:-->\r\n               <UMREF></UMREF>\r\n               <!--Optional:-->\r\n               <KNTTP></KNTTP>\r\n               <!--Optional:-->\r\n               <KZVBR></KZVBR>\r\n               <!--Optional:-->\r\n               <SERNR></SERNR>\r\n               <!--Optional:-->\r\n               <OBJNR></OBJNR>\r\n               <!--Optional:-->\r\n               <ABGRS></ABGRS>\r\n               <!--Optional:-->\r\n               <BEDAE></BEDAE>\r\n               <!--Optional:-->\r\n               <CMPRE></CMPRE>\r\n               <!--Optional:-->\r\n               <CMTFG></CMTFG>\r\n               <!--Optional:-->\r\n               <CMPNT></CMPNT>\r\n               <!--Optional:-->\r\n               <CMKUA></CMKUA>\r\n               <!--Optional:-->\r\n               <CUOBJ></CUOBJ>\r\n               <!--Optional:-->\r\n               <CUOBJ_CH></CUOBJ_CH>\r\n               <!--Optional:-->\r\n               <CEPOK></CEPOK>\r\n               <!--Optional:-->\r\n               <KOUPD></KOUPD>\r\n               <!--Optional:-->\r\n               <SERAIL></SERAIL>\r\n               <!--Optional:-->\r\n               <ANZSN></ANZSN>\r\n               <!--Optional:-->\r\n               <NACHL></NACHL>\r\n               <!--Optional:-->\r\n               <MAGRV></MAGRV>\r\n               <!--Optional:-->\r\n               <MPROK></MPROK>\r\n               <!--Optional:-->\r\n               <VGTYP></VGTYP>\r\n               <!--Optional:-->\r\n               <PROSA></PROSA>\r\n               <!--Optional:-->\r\n               <UEPVW></UEPVW>\r\n               <!--Optional:-->\r\n               <KALNR></KALNR>\r\n               <!--Optional:-->\r\n               <KLVAR></KLVAR>\r\n               <!--Optional:-->\r\n               <SPOSN></SPOSN>\r\n               <!--Optional:-->\r\n               <KOWRR></KOWRR>\r\n               <!--Optional:-->\r\n               <STADAT></STADAT>\r\n               <!--Optional:-->\r\n               <EXART></EXART>\r\n               <!--Optional:-->\r\n               <PREFE></PREFE>\r\n               <!--Optional:-->\r\n               <KNUMH></KNUMH>\r\n               <!--Optional:-->\r\n               <CLINT></CLINT>\r\n               <!--Optional:-->\r\n               <CHMVS></CHMVS>\r\n               <!--Optional:-->\r\n               <STLTY></STLTY>\r\n               <!--Optional:-->\r\n               <STLKN></STLKN>\r\n               <!--Optional:-->\r\n               <STPOZ></STPOZ>\r\n               <!--Optional:-->\r\n               <STMAN></STMAN>\r\n               <!--Optional:-->\r\n               <ZSCHL_K></ZSCHL_K>\r\n               <!--Optional:-->\r\n               <KALSM_K></KALSM_K>\r\n               <!--Optional:-->\r\n               <KALVAR></KALVAR>\r\n               <!--Optional:-->\r\n               <KOSCH></KOSCH>\r\n               <!--Optional:-->\r\n               <UPMAT></UPMAT>\r\n               <!--Optional:-->\r\n               <UKONM></UKONM>\r\n               <!--Optional:-->\r\n               <MFRGR></MFRGR>\r\n               <!--Optional:-->\r\n               <PLAVO></PLAVO>\r\n               <!--Optional:-->\r\n               <KANNR></KANNR>\r\n               <!--Optional:-->\r\n               <CMPRE_FLT></CMPRE_FLT>\r\n               <!--Optional:-->\r\n               <ABFOR></ABFOR>\r\n               <!--Optional:-->\r\n               <ABGES></ABGES>\r\n               <!--Optional:-->\r\n               <J_1BCFOP></J_1BCFOP>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW1></J_1BTAXLW1>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW2></J_1BTAXLW2>\r\n               <!--Optional:-->\r\n               <J_1BTXSDC></J_1BTXSDC>\r\n               <!--Optional:-->\r\n               <WKTNR></WKTNR>\r\n               <!--Optional:-->\r\n               <WKTPS></WKTPS>\r\n               <!--Optional:-->\r\n               <SKOPF></SKOPF>\r\n               <!--Optional:-->\r\n               <KZBWS></KZBWS>\r\n               <!--Optional:-->\r\n               <WGRU1></WGRU1>\r\n               <!--Optional:-->\r\n               <WGRU2></WGRU2>\r\n               <!--Optional:-->\r\n               <KNUMA_PI></KNUMA_PI>\r\n               <!--Optional:-->\r\n               <KNUMA_AG></KNUMA_AG>\r\n               <!--Optional:-->\r\n               <KZFME></KZFME>\r\n               <!--Optional:-->\r\n               <LSTANR></LSTANR>\r\n               <!--Optional:-->\r\n               <TECHS></TECHS>\r\n               <!--Optional:-->\r\n               <MWSBP></MWSBP>\r\n               <!--Optional:-->\r\n               <BERID></BERID>\r\n               <!--Optional:-->\r\n               <PCTRF></PCTRF>\r\n               <!--Optional:-->\r\n               <LOGSYS_EXT></LOGSYS_EXT>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW3></J_1BTAXLW3>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW4></J_1BTAXLW4>\r\n               <!--Optional:-->\r\n               <J_1BTAXLW5></J_1BTAXLW5>\r\n               <!--Optional:-->\r\n               <STOCKLOC></STOCKLOC>\r\n               <!--Optional:-->\r\n               <SLOCTYPE></SLOCTYPE>\r\n               <!--Optional:-->\r\n               <MSR_RET_REASON></MSR_RET_REASON>\r\n               <!--Optional:-->\r\n               <MSR_REFUND_CODE></MSR_REFUND_CODE>\r\n               <!--Optional:-->\r\n               <MSR_APPROV_BLOCK></MSR_APPROV_BLOCK>\r\n               <!--Optional:-->\r\n               <NRAB_KNUMH></NRAB_KNUMH>\r\n               <!--Optional:-->\r\n               <TRMRISK_RELEVANT></TRMRISK_RELEVANT>\r\n               <!--Optional:-->\r\n               <SGT_RCAT></SGT_RCAT>\r\n               <!--Optional:-->\r\n               <HANDOVERLOC></HANDOVERLOC>\r\n               <!--Optional:-->\r\n               <HANDOVERDATE></HANDOVERDATE>\r\n               <!--Optional:-->\r\n               <HANDOVERTIME></HANDOVERTIME>\r\n               <!--Optional:-->\r\n               <TC_AUT_DET></TC_AUT_DET>\r\n               <!--Optional:-->\r\n               <MANUAL_TC_REASON></MANUAL_TC_REASON>\r\n               <!--Optional:-->\r\n               <FISCAL_INCENTIVE></FISCAL_INCENTIVE>\r\n               <!--Optional:-->\r\n               <TAX_SUBJECT_ST></TAX_SUBJECT_ST>\r\n               <!--Optional:-->\r\n               <FISCAL_INCENTIVE_ID></FISCAL_INCENTIVE_ID>\r\n               <!--Optional:-->\r\n               <SPCSTO></SPCSTO>\r\n               <!--Optional:-->\r\n               <_DATAAGING></_DATAAGING>\r\n               <!--Optional:-->\r\n               <REVACC_REFID></REVACC_REFID>\r\n               <!--Optional:-->\r\n               <REVACC_REFTYPE></REVACC_REFTYPE>\r\n               <!--Optional:-->\r\n               <_-BEV1_-SRFUND></_-BEV1_-SRFUND>\r\n               <!--Optional:-->\r\n               <AUFPL_OLC></AUFPL_OLC>\r\n               <!--Optional:-->\r\n               <APLZL_OLC></APLZL_OLC>\r\n               <!--Optional:-->\r\n               <FERC_IND></FERC_IND>\r\n               <!--Optional:-->\r\n               <FSH_SEASON_YEAR></FSH_SEASON_YEAR>\r\n               <!--Optional:-->\r\n               <FSH_SEASON></FSH_SEASON>\r\n               <!--Optional:-->\r\n               <FSH_COLLECTION></FSH_COLLECTION>\r\n               <!--Optional:-->\r\n               <FSH_THEME></FSH_THEME>\r\n               <!--Optional:-->\r\n               <FSH_CRSD></FSH_CRSD>\r\n               <!--Optional:-->\r\n               <FSH_SEAREF></FSH_SEAREF>\r\n               <!--Optional:-->\r\n               <FSH_CANDATE></FSH_CANDATE>\r\n               <!--Optional:-->\r\n               <FSH_PSM_PFM_SPLIT></FSH_PSM_PFM_SPLIT>\r\n               <!--Optional:-->\r\n               <FSH_VAS_REL></FSH_VAS_REL>\r\n               <!--Optional:-->\r\n               <FSH_VAS_PRNT_ID></FSH_VAS_PRNT_ID>\r\n               <!--Optional:-->\r\n               <FSH_TRANSACTION></FSH_TRANSACTION>\r\n               <!--Optional:-->\r\n               <FSH_ITEM_GROUP></FSH_ITEM_GROUP>\r\n               <!--Optional:-->\r\n               <FSH_ITEM></FSH_ITEM>\r\n               <!--Optional:-->\r\n               <FSH_VASREF></FSH_VASREF>\r\n               <!--Optional:-->\r\n               <FSH_GRID_COND_REC></FSH_GRID_COND_REC>\r\n               <!--Optional:-->\r\n               <KOSTL></KOSTL>\r\n               <!--Optional:-->\r\n               <FONDS></FONDS>\r\n               <!--Optional:-->\r\n               <FISTL></FISTL>\r\n               <!--Optional:-->\r\n               <FKBER></FKBER>\r\n               <!--Optional:-->\r\n               <GRANT_NBR></GRANT_NBR>\r\n               <!--Optional:-->\r\n               <BUDGET_PD></BUDGET_PD>\r\n               <!--Optional:-->\r\n               <IUID_RELEVANT></IUID_RELEVANT>\r\n               <!--Optional:-->\r\n               <MILL_SE_GPOSN></MILL_SE_GPOSN>\r\n               <!--Optional:-->\r\n               <PRS_OBJNR></PRS_OBJNR>\r\n               <!--Optional:-->\r\n               <PRS_SD_SPSNR></PRS_SD_SPSNR>\r\n               <!--Optional:-->\r\n               <PRS_WORK_PERIOD></PRS_WORK_PERIOD>\r\n               <!--Optional:-->\r\n               <TAS></TAS>\r\n               <!--Optional:-->\r\n               <BETC></BETC>\r\n               <!--Optional:-->\r\n               <MOD_ALLOW></MOD_ALLOW>\r\n               <!--Optional:-->\r\n               <CANCEL_ALLOW></CANCEL_ALLOW>\r\n               <!--Optional:-->\r\n               <PAY_METHOD></PAY_METHOD>\r\n               <!--Optional:-->\r\n               <BPN></BPN>\r\n               <!--Optional:-->\r\n               <REP_FREQ></REP_FREQ>\r\n               <!--Optional:-->\r\n               <FMFGUS_KEY></FMFGUS_KEY>\r\n               <!--Optional:-->\r\n               <PARGB></PARGB>\r\n               <!--Optional:-->\r\n               <AUFPL_OAA></AUFPL_OAA>\r\n               <!--Optional:-->\r\n               <APLZL_OAA></APLZL_OAA>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC1></WRF_CHARSTC1>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC2></WRF_CHARSTC2>\r\n               <!--Optional:-->\r\n               <WRF_CHARSTC3></WRF_CHARSTC3>\r\n               <!--Optional:-->\r\n               <ARSNUM></ARSNUM>\r\n               <!--Optional:-->\r\n               <ARSPOS></ARSPOS>\r\n               <!--Optional:-->\r\n               <WTYSC_CLMITEM></WTYSC_CLMITEM>\r\n            </item>\r\n         </IT_INQUIRY_DETAILS>\r\n      </urn:ZBAPI_SD_INQUIRY_DETAILS_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_INQUIRY_DETAILS_AM.Response'][0]['IT_INQUIRY_DETAILS']


            responseresults_InquiryDetail = resp



        });


        res.send(responseresults_InquiryDetail)
    });


})
router.get('/InvoicePrint', (req, res) => {


    var request = require("request");

    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_SUGHI&receiverParty=&receiverService=&interface=SI_CUSTOMER_INVOICE_DETAIL_PRINT_SUGHI&interfaceNamespace=http://customer_portal_sughi.com',
        'headers': {
          'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
          'Content-Type': 'application/xml',
          'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcxOTE3MDYFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzE5MTcwNjAyWjAjBgkqhkiG9w0BCQQxFgQU4%2FPcwK%2Fu%2FV8Zi48Rz3pjDzLL3zEwCQYHKoZIzjgEAwQwMC4CFQDL%2Ff0lmGRdMmAae3!z0DrrqX3waQIVANpFtT5Lv8Q8F480IUAG!HMGiQaN; JSESSIONID=KtVOEaUe3D3r67KkcANMHiTQfWwXggF-Y2kA_SAPny0YaRbRo5enSTQovhLkyLCp; JSESSIONMARKID=JyrxJglOIHlYTP_ixU7zHaz2WkTBy7Klz7VX5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_SD_INVOICE_EXPORT_SUGHI>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>' + username + '</P_CUSTOMER_ID_IMPORT>\r\n         <P_SALES_NUMBER_IMPORT>' + Invoice_no + '</P_SALES_NUMBER_IMPORT>\r\n      </urn:ZBAPI_SD_INVOICE_EXPORT_SUGHI>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
      
      };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_INVOICE_EXPORT_SUGHI.Response']


            responseresults_Sales = len



        });


        res.send(responseresults_Sales)


    });



})





module.exports = router;




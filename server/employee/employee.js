const express = require('express')
const router = express.Router();
var xml2js = require('xml2js');
var request = require('request');
var password;
var username;
var responseresults;
var responseresults_leave;
var responseresults_profile;
var responseresults_payroll;
var responseresults_payslip;
var Payslip_no;

router.post('/login', (req, res) => {

    username = req.body.EMPLOYEE_ID;
    password = req.body.PASSWORD;
    console.log("Working" + username);

    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_EMPLOYEE_LOGIN_AM&interfaceNamespace=http://Employee_Portal_AM.com',
        'headers': {
          'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
          'Content-Type': 'application/xml',
          'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMTEzMTIFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAxMTMxMjE3WjAjBgkqhkiG9w0BCQQxFgQUbRs26Kfc29XIm1hO3pQI7P0031QwCQYHKoZIzjgEAwQuMCwCFFQtSmWueB%2FuCE%2FdE9Qx0drpG6FAAhRS2vYkRep0kGjW97g3F3SVz47TNw%3D%3D; JSESSIONID=6cop0FAc4qv74J4tkfx_4zIUBuS5gQF-Y2kA_SAPKa5X8k-2E29IhMiDxwDjqQ-a; JSESSIONMARKID=zO-jigkLrmCYJKbEbJQEvKMqSiv21MK8fHwn5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_HR_LOGIN_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_CUSTOMER_ID_IMPORT>'+username+'</P_CUSTOMER_ID_IMPORT>\r\n         <P_PASSWORD_IMPORT>'+password+'</P_PASSWORD_IMPORT>\r\n      </urn:ZBAPI_HR_LOGIN_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
      
      };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_HR_LOGIN_AM.Response'][0]['RETURN_MESSAGE_EXPORT']

            console.log(len)
            responseresults = len



        });
        res.send(responseresults)
    
    });
    
    
    

})

router.get('/leave', (req, res) => {

   

    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_EMPLOYEE_LEAVE_AM&interfaceNamespace=http://Employee_Portal_AM.com',
        'headers': {
          'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
          'Content-Type': 'application/xml',
          'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMTEzMTIFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAxMTMxMjE3WjAjBgkqhkiG9w0BCQQxFgQUbRs26Kfc29XIm1hO3pQI7P0031QwCQYHKoZIzjgEAwQuMCwCFFQtSmWueB%2FuCE%2FdE9Qx0drpG6FAAhRS2vYkRep0kGjW97g3F3SVz47TNw%3D%3D; JSESSIONID=6cop0FAc4qv74J4tkfx_4zIUBuS5gQF-Y2kA_SAPKa5X8k-2E29IhMiDxwDjqQ-a; JSESSIONMARKID=qz7nyA9fMkbmdq7yAXmILfUnvGjodC6Uv8xH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_HR_EMP_LEAVE_DATA_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_PER_NO_IMPORT>'+username+'</P_PER_NO_IMPORT>\r\n         <IT_RESULT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <EMPLOYEENO></EMPLOYEENO>\r\n               <!--Optional:-->\r\n               <SUBTYPE></SUBTYPE>\r\n               <!--Optional:-->\r\n               <OBJECTID></OBJECTID>\r\n               <!--Optional:-->\r\n               <LOCKINDIC></LOCKINDIC>\r\n               <!--Optional:-->\r\n               <VALIDEND></VALIDEND>\r\n               <!--Optional:-->\r\n               <VALIDBEGIN></VALIDBEGIN>\r\n               <!--Optional:-->\r\n               <RECORDNR></RECORDNR>\r\n               <!--Optional:-->\r\n               <START></START>\r\n               <!--Optional:-->\r\n               <END></END>\r\n               <!--Optional:-->\r\n               <ABSENCETYPE></ABSENCETYPE>\r\n               <!--Optional:-->\r\n               <NAMEOFABSENCETYPE></NAMEOFABSENCETYPE>\r\n               <!--Optional:-->\r\n               <ABSENCEDAYS></ABSENCEDAYS>\r\n               <!--Optional:-->\r\n               <ABSENCEHOURS></ABSENCEHOURS>\r\n            </item>\r\n         </IT_RESULT>\r\n      </urn:ZBAPI_HR_EMP_LEAVE_DATA_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
      
      };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_HR_EMP_LEAVE_DATA_AM.Response'][0]['IT_RESULT']

            
            responseresults_leave = resp



        });
        res.send(responseresults_leave)
    
    });
    
    
    

})
router.get('/profile', (req, res) => {

   

    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_EMPLOYEE_PROFILE_AM&interfaceNamespace=http://Employee_Portal_AM.com',
        'headers': {
          'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
          'Content-Type': 'application/xml',
          'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMTEzMTIFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAxMTMxMjE3WjAjBgkqhkiG9w0BCQQxFgQUbRs26Kfc29XIm1hO3pQI7P0031QwCQYHKoZIzjgEAwQuMCwCFFQtSmWueB%2FuCE%2FdE9Qx0drpG6FAAhRS2vYkRep0kGjW97g3F3SVz47TNw%3D%3D; JSESSIONID=6cop0FAc4qv74J4tkfx_4zIUBuS5gQF-Y2kA_SAPKa5X8k-2E29IhMiDxwDjqQ-a; JSESSIONMARKID=qz7nyA9fMkbmdq7yAXmILfUnvGjodC6Uv8xH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_HR_EMPLOY_PROFILE_AM>\r\n         <P_PER_NO_IMPORT>'+username+'</P_PER_NO_IMPORT>\r\n      </urn:ZBAPI_HR_EMPLOY_PROFILE_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
      
      };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_HR_EMPLOY_PROFILE_AM.Response'][0]['P_RESULT_EXPORT']

            // console.log(len)
            responseresults_profile = resp



        });
        res.send(responseresults_profile)
    
    });
    
    
    

})
router.get('/payroll', (req, res) => {

   

    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_EMPLOYEE_PAYROLL_AM&interfaceNamespace=http://Employee_Portal_AM.com',
        'headers': {
          'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
          'Content-Type': 'application/xml',
          'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMTEzMTIFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAxMTMxMjE3WjAjBgkqhkiG9w0BCQQxFgQUbRs26Kfc29XIm1hO3pQI7P0031QwCQYHKoZIzjgEAwQuMCwCFFQtSmWueB%2FuCE%2FdE9Qx0drpG6FAAhRS2vYkRep0kGjW97g3F3SVz47TNw%3D%3D; JSESSIONID=6cop0FAc4qv74J4tkfx_4zIUBuS5gQF-Y2kA_SAPKa5X8k-2E29IhMiDxwDjqQ-a; JSESSIONMARKID=qz7nyA9fMkbmdq7yAXmILfUnvGjodC6Uv8xH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_FI_PAYROLL_AM>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <P_PERSONNEL_NUMBER_IMPORT>'+username+'</P_PERSONNEL_NUMBER_IMPORT>\r\n         <!--Optional:-->\r\n         <IT_PAYROL_RESULT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <SEQUENCENUMBER></SEQUENCENUMBER>\r\n               <!--Optional:-->\r\n               <FPPERIOD></FPPERIOD>\r\n               <!--Optional:-->\r\n               <FPBEGIN></FPBEGIN>\r\n               <!--Optional:-->\r\n               <FPEND></FPEND>\r\n               <!--Optional:-->\r\n               <BONUSDATE></BONUSDATE>\r\n               <!--Optional:-->\r\n               <PAYDATE></PAYDATE>\r\n               <!--Optional:-->\r\n               <PAYTYPE></PAYTYPE>\r\n               <!--Optional:-->\r\n               <PAYID></PAYID>\r\n               <!--Optional:-->\r\n               <OCREASON></OCREASON>\r\n               <!--Optional:-->\r\n               <PAYTYPE_TEXT></PAYTYPE_TEXT>\r\n               <!--Optional:-->\r\n               <OCREASON_TEXT></OCREASON_TEXT>\r\n            </item>\r\n         </IT_PAYROL_RESULT>\r\n      </urn:ZBAPI_FI_PAYROLL_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
      
      };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_FI_PAYROLL_AM.Response'][0]['IT_PAYROL_RESULT']

          
            responseresults_payroll = len



        });
        res.send(responseresults_payroll)
    
    });
    
    
    

})

router.get('/payslip', (req, res) => {

   

    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_EMPLOYEE_PAYSLIP_AM&interfaceNamespace=http://Employee_Portal_AM.com',
        'headers': {
          'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
          'Content-Type': 'application/xml',
          'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMTEzMTIFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAxMTMxMjE3WjAjBgkqhkiG9w0BCQQxFgQUbRs26Kfc29XIm1hO3pQI7P0031QwCQYHKoZIzjgEAwQuMCwCFFQtSmWueB%2FuCE%2FdE9Qx0drpG6FAAhRS2vYkRep0kGjW97g3F3SVz47TNw%3D%3D; JSESSIONID=6cop0FAc4qv74J4tkfx_4zIUBuS5gQF-Y2kA_SAPKa5X8k-2E29IhMiDxwDjqQ-a; JSESSIONMARKID=qz7nyA9fMkbmdq7yAXmILfUnvGjodC6Uv8xH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_FI_EMP_PAYSLIP_AM>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <!--Optional:-->\r\n         <P_PAYSLIPVARIENT_IMPORT></P_PAYSLIPVARIENT_IMPORT>\r\n         <P_PER_NO_IMPORT>'+username+'</P_PER_NO_IMPORT>\r\n         <P_SEQ_NO_IMPORT>'+Payslip_no+'</P_SEQ_NO_IMPORT>\r\n      </urn:ZBAPI_FI_EMP_PAYSLIP_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
      
      };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_FI_EMP_PAYSLIP_AM.Response'][0]['P_PAYSLIP_DOC']

           
            responseresults_payslip = resp



        });
        res.send(responseresults_payslip)
    
    });
    
    
    

})

router.post('/payslip', (req, res) => {

   
    Payslip_no = req.body.Payslip_no;
    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTALS_ARIYA&receiverParty=&receiverService=&interface=SI_EMPLOYEE_PAYSLIP_AM&interfaceNamespace=http://Employee_Portal_AM.com',
        'headers': {
          'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
          'Content-Type': 'application/xml',
          'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMTEzMTIFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAxMTMxMjE3WjAjBgkqhkiG9w0BCQQxFgQUbRs26Kfc29XIm1hO3pQI7P0031QwCQYHKoZIzjgEAwQuMCwCFFQtSmWueB%2FuCE%2FdE9Qx0drpG6FAAhRS2vYkRep0kGjW97g3F3SVz47TNw%3D%3D; JSESSIONID=6cop0FAc4qv74J4tkfx_4zIUBuS5gQF-Y2kA_SAPKa5X8k-2E29IhMiDxwDjqQ-a; JSESSIONMARKID=qz7nyA9fMkbmdq7yAXmILfUnvGjodC6Uv8xH5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_FI_EMP_PAYSLIP_AM>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <!--Optional:-->\r\n         <P_PAYSLIPVARIENT_IMPORT></P_PAYSLIPVARIENT_IMPORT>\r\n         <P_PER_NO_IMPORT>'+username+'</P_PER_NO_IMPORT>\r\n         <P_SEQ_NO_IMPORT>'+Payslip_no+'</P_SEQ_NO_IMPORT>\r\n      </urn:ZBAPI_FI_EMP_PAYSLIP_AM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
      
      };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      var xmldata = response.body;


        xml2js.parseString(xmldata, function (err, resp) {

            // len = resp['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_FI_EMP_PAYSLIP_AM.Response'][0]['P_PAYSLIP_DOC']

            
            responseresults_payslip = resp



        });
        res.send(responseresults_payslip)
    
    });
    
    
    

})







module.exports = router;
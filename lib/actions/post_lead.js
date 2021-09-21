/**
 * Auto-generated action file for "weclapp api" API.
 *
 * Generated at: 2021-09-21T10:21:27.261Z
 * Mass generator version: 1.0.0
 *
 * : weclapp-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/lead'
 * Method: 'post'
 *
 */



 // how to pass the transformation function... no need
 // pass the meta data 
 // create a new Object 
 // emit the message with the new emit function 

 // securities and auth methods   
 // check how to make the new ferryman and its transform functions functional // no need

const Swagger = require('swagger-client');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports = {process: processAction};

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "version": "version",
    "addresses": "addresses",
    "annualRevenue": "annualRevenue",
    "birthDate": "birthDate",
    "commercialLanguageId": "commercialLanguageId",
    "company": "company",
    "company2": "company2",
    "companySizeId": "companySizeId",
    "companySizeName": "companySizeName",
    "contacts": "contacts",
    "createdDate": "createdDate",
    "currencyId": "currencyId",
    "currencyName": "currencyName",
    "customAttributes": "customAttributes",
    "customerCategoryId": "customerCategoryId",
    "customerCategoryName": "customerCategoryName",
    "deliveryAddressId": "deliveryAddressId",
    "description": "description",
    "email": "email",
    "fax": "fax",
    "firstName": "firstName",
    "invoiceAddressId": "invoiceAddressId",
    "lastModifiedDate": "lastModifiedDate",
    "lastName": "lastName",
    "leadNumber": "leadNumber",
    "leadRatingId": "leadRatingId",
    "leadRatingName": "leadRatingName",
    "leadSourceId": "leadSourceId",
    "leadSourceName": "leadSourceName",
    "leadStatus": "leadStatus",
    "leadTopics": "leadTopics",
    "lossDescription": "lossDescription",
    "lossReasonId": "lossReasonId",
    "lossReasonName": "lossReasonName",
    "middleName": "middleName",
    "mobilePhone1": "mobilePhone1",
    "oldLeadNumber": "oldLeadNumber",
    "onlineAccounts": "onlineAccounts",
    "optIn": "optIn",
    "optInLetter": "optInLetter",
    "optInPhone": "optInPhone",
    "optInSms": "optInSms",
    "parentPartyId": "parentPartyId",
    "partyType": "partyType",
    "paymentMethodId": "paymentMethodId",
    "paymentMethodName": "paymentMethodName",
    "personCompany": "personCompany",
    "personDepartment": "personDepartment",
    "personRole": "personRole",
    "phone": "phone",
    "primaryAddressId": "primaryAddressId",
    "primaryContactId": "primaryContactId",
    "responsibleUserFixed": "responsibleUserFixed",
    "responsibleUserId": "responsibleUserId",
    "responsibleUserUsername": "responsibleUserUsername",
    "salesChannel": "salesChannel",
    "salesStageId": "salesStageId",
    "salesStageName": "salesStageName",
    "salutation": "salutation",
    "sectorId": "sectorId",
    "sectorName": "sectorName",
    "shipmentMethodId": "shipmentMethodId",
    "shipmentMethodName": "shipmentMethodName",
    "tags": "tags",
    "termOfPaymentId": "termOfPaymentId",
    "termOfPaymentName": "termOfPaymentName",
    "title": "title",
    "titleId": "titleId",
    "vatRegistrationNumber": "vatRegistrationNumber",
    "website": "website",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    console.log("msg:",msg);
    console.log("cfg:",cfg)

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.data;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    const oihUid = msg.metadata !== undefined && msg.metadata.oihUid !== undefined
    ? msg.metadata.oihUid
    : 'oihUid not set yet';
  const recordUid = msg.metadata !== undefined && msg.metadata.recordUid !== undefined
    ? msg.metadata.recordUid
    : undefined;
  const applicationUid = msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
    ? msg.metadata.applicationUid
    : undefined;

    const newElement = {};
    const oihMeta = {
      applicationUid,
      oihUid,
      recordUid,
    };
    
    // credentials for this operation
    let securities = {};
    securities['API_token'] = cfg['auth_API_token'];

    if(cfg.otherServer){
        if(!spec.servers){
            spec.servers = [];
        }
        spec.servers.push({"url":cfg.otherServer})
    }
    
    
    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/lead',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };
        if(callParams.method === 'get'){
            delete callParams.requestBody;
        }
    

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        // console.log("swagger data:",data);
        delete data.uid;
        newElement.metadata = oihMeta;
        newElement.data = data.data
        this.emit("data",newElement);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}
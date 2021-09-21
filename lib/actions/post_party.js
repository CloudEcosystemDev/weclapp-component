/**
 * Auto-generated action file for "weclapp api" API.
 *
 * Generated at: 2021-09-21T10:21:27.459Z
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
 * Endpoint Path: '/party'
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
    "bankAccounts": "bankAccounts",
    "birthDate": "birthDate",
    "commercialLanguageId": "commercialLanguageId",
    "commissionSalesPartners": "commissionSalesPartners",
    "company": "company",
    "company2": "company2",
    "companySizeId": "companySizeId",
    "companySizeName": "companySizeName",
    "competitor": "competitor",
    "contacts": "contacts",
    "createdDate": "createdDate",
    "currencyId": "currencyId",
    "currencyName": "currencyName",
    "customAttributes": "customAttributes",
    "customer": "customer",
    "customerAmountInsured": "customerAmountInsured",
    "customerAnnualRevenue": "customerAnnualRevenue",
    "customerBlockNotice": "customerBlockNotice",
    "customerBlocked": "customerBlocked",
    "customerBusinessType": "customerBusinessType",
    "customerCategoryId": "customerCategoryId",
    "customerCategoryName": "customerCategoryName",
    "customerCreditLimit": "customerCreditLimit",
    "customerCurrentSalesStageId": "customerCurrentSalesStageId",
    "customerCurrentSalesStageName": "customerCurrentSalesStageName",
    "customerDebtorAccountId": "customerDebtorAccountId",
    "customerDebtorAccountNumber": "customerDebtorAccountNumber",
    "customerDefaultHeaderDiscount": "customerDefaultHeaderDiscount",
    "customerDefaultHeaderSurcharge": "customerDefaultHeaderSurcharge",
    "customerDeliveryBlock": "customerDeliveryBlock",
    "customerInsolvent": "customerInsolvent",
    "customerInsured": "customerInsured",
    "customerLossDescription": "customerLossDescription",
    "customerLossReasonId": "customerLossReasonId",
    "customerLossReasonName": "customerLossReasonName",
    "customerNumber": "customerNumber",
    "customerNumberOld": "customerNumberOld",
    "customerPaymentMethodId": "customerPaymentMethodId",
    "customerPaymentMethodName": "customerPaymentMethodName",
    "customerSalesChannel": "customerSalesChannel",
    "customerSalesPartner": "customerSalesPartner",
    "customerSalesPartnerDefaultCommissionFix": "customerSalesPartnerDefaultCommissionFix",
    "customerSalesPartnerDefaultCommissionPercentage": "customerSalesPartnerDefaultCommissionPercentage",
    "customerSalesPartnerDefaultCommissionType": "customerSalesPartnerDefaultCommissionType",
    "customerSalesProbability": "customerSalesProbability",
    "customerSalesStageHistory": "customerSalesStageHistory",
    "customerSatisfaction": "customerSatisfaction",
    "customerShipmentMethodId": "customerShipmentMethodId",
    "customerShipmentMethodName": "customerShipmentMethodName",
    "customerSupplierNumber": "customerSupplierNumber",
    "customerTermOfPaymentId": "customerTermOfPaymentId",
    "customerTermOfPaymentName": "customerTermOfPaymentName",
    "customerUseCustomsTariffNumber": "customerUseCustomsTariffNumber",
    "deliveryAddressId": "deliveryAddressId",
    "deliveryEmailAddressesId": "deliveryEmailAddressesId",
    "description": "description",
    "dunningAddressId": "dunningAddressId",
    "dunningEmailAddressesId": "dunningEmailAddressesId",
    "email": "email",
    "eoriNumber": "eoriNumber",
    "fax": "fax",
    "firstName": "firstName",
    "fixPhone2": "fixPhone2",
    "fixedResponsibleUser": "fixedResponsibleUser",
    "imageId": "imageId",
    "invoiceAddressId": "invoiceAddressId",
    "invoiceRecipientId": "invoiceRecipientId",
    "lastModifiedDate": "lastModifiedDate",
    "lastName": "lastName",
    "leadRatingId": "leadRatingId",
    "leadRatingName": "leadRatingName",
    "leadSourceId": "leadSourceId",
    "leadSourceName": "leadSourceName",
    "leadStatus": "leadStatus",
    "legalFormId": "legalFormId",
    "legalFormName": "legalFormName",
    "middleName": "middleName",
    "mobilePhone1": "mobilePhone1",
    "mobilePhone2": "mobilePhone2",
    "onlineAccounts": "onlineAccounts",
    "optInEmail": "optInEmail",
    "optInLetter": "optInLetter",
    "optInPhone": "optInPhone",
    "optInSms": "optInSms",
    "parentPartyId": "parentPartyId",
    "partyEmailAddresses": "partyEmailAddresses",
    "partyType": "partyType",
    "personCompany": "personCompany",
    "personDepartment": "personDepartment",
    "personRole": "personRole",
    "phone": "phone",
    "phoneHome": "phoneHome",
    "primaryAddressId": "primaryAddressId",
    "primaryContactId": "primaryContactId",
    "purchaseEmailAddressesId": "purchaseEmailAddressesId",
    "quotationEmailAddressesId": "quotationEmailAddressesId",
    "ratingId": "ratingId",
    "ratingName": "ratingName",
    "referenceNumber": "referenceNumber",
    "responsibleUserId": "responsibleUserId",
    "responsibleUserUsername": "responsibleUserUsername",
    "salesInvoiceEmailAddressesId": "salesInvoiceEmailAddressesId",
    "salesOrderEmailAddressesId": "salesOrderEmailAddressesId",
    "salutation": "salutation",
    "sectorId": "sectorId",
    "sectorName": "sectorName",
    "supplier": "supplier",
    "supplierCreditorAccountId": "supplierCreditorAccountId",
    "supplierCreditorAccountNumber": "supplierCreditorAccountNumber",
    "supplierCustomerNumberAtSupplier": "supplierCustomerNumberAtSupplier",
    "supplierNumber": "supplierNumber",
    "supplierNumberOld": "supplierNumberOld",
    "supplierOrderBlock": "supplierOrderBlock",
    "supplierPaymentMethodId": "supplierPaymentMethodId",
    "supplierPaymentMethodName": "supplierPaymentMethodName",
    "supplierShipmentMethodId": "supplierShipmentMethodId",
    "supplierShipmentMethodName": "supplierShipmentMethodName",
    "supplierTermOfPaymentId": "supplierTermOfPaymentId",
    "supplierTermOfPaymentName": "supplierTermOfPaymentName",
    "tags": "tags",
    "taxId": "taxId",
    "title": "title",
    "titleId": "titleId",
    "topics": "topics",
    "vatIdentificationNumber": "vatIdentificationNumber",
    "website": "website",
    "xRechnungLeitwegId": "xRechnungLeitwegId",
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
        pathName: '/party',
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
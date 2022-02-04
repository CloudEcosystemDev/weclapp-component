/**
 * Auto-generated action file for "weclapp api" API.
 *
 * Generated at: 2022-02-04T13:59:16.811Z
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
 * Endpoint Path: '/salesInvoice/id/{id}'
 * Method: 'put'
 *
 */

// how to pass the transformation function... no need
// pass the meta data
// create a new Object
// emit the message with the new emit function

// securities and auth methods
// check how to make the new ferryman and its transform functions functional // no need

const Swagger = require("swagger-client");
const spec = require("../spec.json");
const { mapFieldNames } = require("../utils/helpers");

// parameter names for this call
const PARAMETERS = [
    "id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "version": "version",
    "cancellationDate": "cancellationDate",
    "commercialLanguage": "commercialLanguage",
    "commission": "commission",
    "commissionSalesPartners": "commissionSalesPartners",
    "createdDate": "createdDate",
    "customAttributes": "customAttributes",
    "customerId": "customerId",
    "customerNumber": "customerNumber",
    "city": "city",
    "company": "company",
    "company2": "company2",
    "countryCode": "countryCode",
    "firstName": "firstName",
    "globalLocationNumber": "globalLocationNumber",
    "lastName": "lastName",
    "middleName": "middleName",
    "phoneNumber": "phoneNumber",
    "postOfficeBoxCity": "postOfficeBoxCity",
    "postOfficeBoxNumber": "postOfficeBoxNumber",
    "postOfficeBoxZipCode": "postOfficeBoxZipCode",
    "salutation": "salutation",
    "state": "state",
    "street1": "street1",
    "street2": "street2",
    "title": "title",
    "titleId": "titleId",
    "zipcode": "zipcode",
    "deliveryAddress": "deliveryAddress",
    "deliveryDate": "deliveryDate",
    "description": "description",
    "dispatchCountryCode": "dispatchCountryCode",
    "dueDate": "dueDate",
    "fatturaElettronicaXmlDocumentType": "fatturaElettronicaXmlDocumentType",
    "grossAmount": "grossAmount",
    "grossAmountInCompanyCurrency": "grossAmountInCompanyCurrency",
    "headerDiscount": "headerDiscount",
    "headerSurcharge": "headerSurcharge",
    "invoiceDate": "invoiceDate",
    "invoiceNumber": "invoiceNumber",
    "lastModifiedDate": "lastModifiedDate",
    "netAmount": "netAmount",
    "netAmountInCompanyCurrency": "netAmountInCompanyCurrency",
    "nonStandardTaxId": "nonStandardTaxId",
    "nonStandardTaxName": "nonStandardTaxName",
    "orderNumberAtCustomer": "orderNumberAtCustomer",
    "paid": "paid",
    "paymentMethodId": "paymentMethodId",
    "paymentMethodName": "paymentMethodName",
    "paymentStatus": "paymentStatus",
    "pricingDate": "pricingDate",
    "recordAddress": "recordAddress",
    "recordComment": "recordComment",
    "recordCurrencyId": "recordCurrencyId",
    "recordCurrencyName": "recordCurrencyName",
    "bccAddresses": "bccAddresses",
    "ccAddresses": "ccAddresses",
    "toAddresses": "toAddresses",
    "recordEmailAddresses": "recordEmailAddresses",
    "recordFreeText": "recordFreeText",
    "recordOpening": "recordOpening",
    "responsibleUserId": "responsibleUserId",
    "responsibleUserUsername": "responsibleUserUsername",
    "salesChannel": "salesChannel",
    "salesInvoiceItems": "salesInvoiceItems",
    "salesInvoiceType": "salesInvoiceType",
    "salesOrderId": "salesOrderId",
    "salesOrderNumber": "salesOrderNumber",
    "salesOrders": "salesOrders",
    "sentToRecipient": "sentToRecipient",
    "servicePeriodFrom": "servicePeriodFrom",
    "servicePeriodTo": "servicePeriodTo",
    "shipmentMethodId": "shipmentMethodId",
    "shipmentMethodName": "shipmentMethodName",
    "shippingCostItems": "shippingCostItems",
    "shippingDate": "shippingDate",
    "status": "status",
    "statusHistory": "statusHistory",
    "tags": "tags",
    "termOfPaymentId": "termOfPaymentId",
    "termOfPaymentName": "termOfPaymentName",
    "vatRegistrationNumber": "vatRegistrationNumber",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
  var isVerbose = process.env.debug || cfg.verbose;

  console.log("msg:", msg);
  console.log("cfg:", cfg);

  if (isVerbose) {
    console.log(`---MSG: ${JSON.stringify(msg)}`);
    console.log(`---CFG: ${JSON.stringify(cfg)}`);
    console.log(`---ENV: ${JSON.stringify(process.env)}`);
  }

  const contentType = 'application/json';

  const body = msg.data;
  mapFieldNames(body);

  let parameters = {};
  for (let param of PARAMETERS) {
    parameters[param] = body[param];
  }

  const oihUid =
    msg.metadata !== undefined && msg.metadata.oihUid !== undefined
      ? msg.metadata.oihUid
      : "oihUid not set yet";
  const recordUid =
    msg.metadata !== undefined && msg.metadata.recordUid !== undefined
      ? msg.metadata.recordUid
      : undefined;
  const applicationUid =
    msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
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
    securities['API_token'] = cfg['key'];

  if (cfg.otherServer) {
    if (!spec.servers) {
      spec.servers = [];
    }
    spec.servers.push({ "url": cfg.otherServer });
  }

  let callParams = {
    spec: spec,
    operationId: undefined,
    pathName: '/salesInvoice/id/{id}',
    method: 'put',
    parameters: parameters,
    requestContentType: contentType,
    requestBody: body,
    securities: { authorized: securities },
    server: spec.servers[cfg.server] || cfg.otherServer,
  };
  if (callParams.method === "get") {
    delete callParams.requestBody;
  }

  if (isVerbose) {
    let out = Object.assign({}, callParams);
    out.spec = "[omitted]";
    console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
  }

  // Call operation via Swagger client
  return Swagger.execute(callParams).then((data) => {
    // emit a single message with data
    // console.log("swagger data:",data);
    delete data.uid;
    newElement.metadata = oihMeta;
    newElement.data = data.data;
    this.emit("data", newElement);

    // if the response contains an array of entities, you can emit them one by one:

    // data.obj.someItems.forEach((item) => {
    //     this.emitData(item);
    // }
  });
}

// this wrapers offers a simplified emitData(data) function
module.exports = { process: processAction };

jQuery.sap.declare("util.Connectivity");
 //Service Root URL
//"https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
//Extract the relative URL to use this application for deployment on any Web Server
var serviceUrl = "proxy/gateway/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV";


function getServiceURL(){
	//Get the service URL from the SAP NetWeaver Gateway Catalog service.
	jQuery.sap.require("util.ServiceNegotiation");
	return useNegotiation ? getNegotiationService() : serviceUrl;
}


function setupModel( oModel ) {
	 oModel.setCountSupported(false);
		// set global models
	
	    
		oModel.attachRequestCompleted(function(oEvent) {
		    sap.ui.getCore().getEventBus().publish("busyDialog","close");
		});

		oModel.attachRequestSent(function(oEvent) {
		    sap.ui.getCore().getEventBus().publish("busyDialog","open");
		});

		oModel.attachParseError(function(oEvent) {
		    displayError({
			message : oEvent.getParameter("message"),
			responseText : oEvent.getParameter("responseText"),
			statusCode : oEvent.getParameter("statusCode"),
			statusText : oEvent.getParameter("statusText")
		    });
		});

		oModel.attachRequestFailed(function(oEvent) {
		    displayError({
			message : oEvent.getParameter("message"),
			responseText : oEvent.getParameter("responseText"),
			statusCode : oEvent.getParameter("statusCode"),
			statusText : oEvent.getParameter("statusText")
		    });
		});

		return oModel
}
function createModel(){  

	var oModel = new sap.ui.model.odata.ODataModel(getServiceURL(), false, "", "", null,null, null, true);
//	var oSharepointModel = new sap.ui.model.odata.ODataModel(getSharepointURL(), false, "", "", null,null, null, true);
	
	oModel = setupModel(oModel);
//	oSharepointModel = setupModel( oModel );
	sap.ui.getCore().setModel( oModel );
}

	

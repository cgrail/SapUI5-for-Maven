sap.ui.jsview("app.details.Product", {

    getControllerName : function() {
		return "app.details.Product";
    },
	/**
	 * Handler to onBeforeShow event that fires by the NavContainer.<BR>
	 * Note: If the view is already loaded and the bindingContext was changed, this method also called by the App.contoller
	 * @param oEvent
	 */
    onBeforeShow : function(oEvent) {
		this.getController().onBeforeShow(oEvent.data);
    },

    createContent : function(oController) {
		this.oList = new sap.m.List({
	    	inset: true,
	    	items : [
				  	  new sap.m.DisplayListItem({ label : oBundle.getText("PRODUCT_NAME"), value : "{Name}"}),
					  new sap.m.DisplayListItem({ label : oBundle.getText("PRODUCT_SUPPLIER_NAME"), value : "{SupplierName}"}),
					  new sap.m.DisplayListItem({ label : oBundle.getText("PRODUCT_PRICE"), value : "{ProductID}"}),
			
 				  	
                  	]
		});


		this.page = new sap.m.Page({
	    	title : oBundle.getText("TITLE__PRODUCTLIST"),
	    	//set back button on details pages only on smartphones
	    	showNavButton : jQuery.device.is.phone,
	    	navButtonTap : [ oController.onNavButtonTap, oController ],
	    	content : [ this.oList, this.oNavList ]
		});

		// done
		return this.page;
    }
});
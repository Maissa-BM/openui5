sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ], function (Controller, MessageToast) {
        "user strict";

        return Controller.extend("ns.html5module.controller.App", {

            onShowHello : function () {
                // Unit 3 MessageToast.show("Hello openSAP");
                
                // UNIT 5

                // read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);

                // Show message
                MessageToast.show(sMsg);
            }
        });
});

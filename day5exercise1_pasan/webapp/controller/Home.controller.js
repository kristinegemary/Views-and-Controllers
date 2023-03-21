sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1pasan.controller.Home", {
            onInit: function () {
                this.router = sap.ui.core.UIComponent.getRouterFor(this);
            },
            onSend: function(oEvent) {
              var oView = this.getView();
			    var sName = oView.byId("NameInput").getValue();
                var sStreet = oView.byId("StreetInput").getValue();
                var sAge = oView.byId("AgeInput").getValue();
                var sTech = oView.byId("TechInput").getSelectedKey();

               /* console.log(oView);
                  console.log(sName);
                  console.log(sStreet);
                  console.log(sAge);
                  console.log(sTech);
                  this.getRouter().navTo("Detail", {
                  sNamePt: sName
                });*/
                MessageToast.show("Your name is " + sName + ", your street is " + sStreet + ", your age is " + sAge + "." + " Your tech is " + sTech + ".");             
                /*MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("ResName") + " " + sName + ", " + 
                this.getView().getModel("i18n").getResourceBundle().getText("ResStreet") + " " + sStreet + 
                ", " + this.getView().getModel("i18n").getResourceBundle().getText("ResAge") + " " + sAge + ". " + 
                this.getView().getModel("i18n").getResourceBundle().getText("ResTech") + " " + sTech + ".");          
                */
            }

            /*onSend: function(){
                this.router.navTo("Detail");
              },
            getRouter: function() {
                return sap.ui.core.UIComponent.getRouterFor(this);;
            }*/
        });
    });

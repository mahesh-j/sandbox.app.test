jQuery.sap.declare("org.test.student.ui5.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("org.test.student.ui5.Component", {
	metadata: {
		"manifest": "json"
	}
});
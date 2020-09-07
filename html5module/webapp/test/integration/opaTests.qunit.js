/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/html5module/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
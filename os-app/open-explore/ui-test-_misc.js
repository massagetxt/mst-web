import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWExplore_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoute.OLSKRoutePath)
	});

	context('MSWExplore', function () {
		
		it('sets class', function () {
			browser.assert.hasClass(MSWExplore, 'OLSKCommon')
		});
	
	});

});
import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWVitrine_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoute.OLSKRoutePath)
	});

	context('MSWVitrine', function () {
		
		it('sets class', function () {
			browser.assert.hasClass(MSWVitrine, 'OLSKCommon')
		});
	
	});

	context('MSWVitrineIdentityLogo', function () {
		
		it('sets role', function () {
			browser.assert.attribute(MSWVitrineIdentityLogo, 'role', 'image')
		});
	
	});

});

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWPrompt_Misc', function () {

describe('MSWPromptPermalink', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptRaw: 'alfa bravo',
			MSWPromptMassage: '$input.prepend( charlie)',
		});
	});

	it('sets href', function () {
		return browser.assert.attribute(MSWPromptPermalink, 'href', OLSKTestingCanonical(kDefaultRoute, {
			raw: require('./ui-logic.js').MSWPermalinkEncode('alfa bravo'),
			massage: require('./ui-logic.js').MSWPermalinkEncode('$input.prepend( charlie)'),
		}));
	});

	it('sets target', function () {
		return browser.assert.attribute(MSWPromptPermalink, 'target', '_blank');
	});

});
	
describe('MSWPromptRaw', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptRaw: 'alfa',
		});
	});

	it('initializes to MSWPromptRaw', function () {
		return browser.assert.input(`${ MSWPromptRaw } .MSWEditorFieldDebug`, 'alfa')
	});
	
});
	
describe('MSWPromptMassage', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptMassage: '$input',
		});
	});

	it('initializes to MSWPromptMassage', function () {
		return browser.assert.input(`${ MSWPromptMassage } .MSWEditorFieldDebug`, '$input')
	});
	
});
	
describe('MSWPromptTrace', function() {

	context('syntax error', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				MSWPromptRaw: 'alfa',
				MSWPromptMassage: '$input.prepend(',
			});
		});

		it('sets text', function () {
			return browser.assert.text(MSWPromptSyntaxError, 'MSTErrorIdentifierNotValid')
		});
	
	});
	
});
	
describe('MSWPromptTraceItem', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptRaw: 'alfa',
			MSWPromptMassage: '$input.lines',
		});
	});

	it('initializes to result', function () {
		return browser.assert.elements(MSWPromptTraceItem, 1)
	});

	it('sets MSWPromptTraceItemOperation', function () {
		return browser.assert.text(MSWPromptTraceItemOperation, 'lines')
	});

	it('sets MSWPromptTraceItemInputValue', function () {
		return browser.assert.text(MSWPromptTraceItemInputValue, '\'alfa\'')
	});

	context('update MSWPromptMassage', function () {

		before(function () {
			browser.fill(`${ MSWPromptMassage } .MSWEditorFieldDebug`, '$input.lines.join( )');
		});

		it('updates elements', function () {
			return browser.assert.elements(MSWPromptTraceItem, 2)
		});
	
	});

	context('arguments', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				MSWPromptRaw: 'alfa',
				MSWPromptMassage: '$input.lines.prepend(bravo)',
			});
		});

		it('sets MSWPromptTraceItemArgumentsValue', function () {
			return browser.assert.text(MSWPromptTraceItemArgumentsValue, '\'bravo\'')
		});

	});

});
	
describe('MSWPromptOutput', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptRaw: 'alfa',
			MSWPromptMassage: '$input',
		});
	});

	it('initializes to result', function () {
		return browser.assert.text(MSWPromptOutput, 'alfa')
	});

	context('update MSWPromptRaw', function () {

		before(function () {
			browser.fill(`${ MSWPromptRaw } .MSWEditorFieldDebug`, 'bravo');
		});
		
		it('sets value', function () {
			return browser.assert.text(MSWPromptOutput, 'bravo')
		});
	
	});

	context('update MSWPromptMassage', function () {

		before(function () {
			browser.fill(`${ MSWPromptMassage } .MSWEditorFieldDebug`, '$input.prepend(alfa )');
		});
		
		it('sets value', function () {
			return browser.assert.text(MSWPromptOutput, 'alfa bravo')
		});
	
	});
	
});
	
});

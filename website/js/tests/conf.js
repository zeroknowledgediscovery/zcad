exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: function() {
        browser.resetUrl = 'file://';
    },
    specs: ['test_questions.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['allow-file-access-from-files']
        }
    }

}
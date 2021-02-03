let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config={
    // directConnect: true,  // can execute without starting starting selenium server
    // seleniumAddress: 'http://localhost:9515',  // setup for Edge browser
    capabilities:{
        'browserName':'chrome', //firefox //MicrosoftEdge
         // 'shardTestFiles': true, // parallel execution
        //'maxInstances': 2,
        // 'chromeOptions':{
        //     // args:['--headless', '--window-size=1920x1280']
        //    }
    },

    // params:
    // {
    //     env:""  // protractor conf.js --params.env="https://letcode.in/"
    // }, // npm run update // npm run test 
    // for Running in 2 browsers ata a time
    // multiCapabilities:[     
    //     {
    //         'browserName':'chrome'
    //     },
    //     {
    //         'browserName':'firefox'
    //     }],


    framework: 'jasmine',

    
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['./Test_Spec-ts/Login.spec.ts'], 
    //specs: ['spec12_readFromJSON.js','spec11_ExpectedCondition.js'], // for parallel execution
    // specs: ['*.spec.js'], // for following sequential execution 
    // SELENIUM_PROMISE_MANAGER: false,

    /*suites: {

			smoke: ['./smoke/!*.spec.js'],
			regression: ['./regression/!*.spec.js'],
			functional: ['./functional/!*.spec.js'],
			all: ['./!*!/!*.spec.js'],
			selected: ['./functional/addcustomer.spec.js','./regression/openaccount.spec.js'],

    },*/   
    //use command protractor conf.js --suite=smoke,regression


    // Options to be passed to Jasmine 
    jasmineNodeOpts:{
        defaultTimeoutInterval: 60000
    },
    onPrepare: function () {
      require("ts-node").register({
        project: require("path").join(__dirname, "./tsconfig.json"), // Relative path of tsconfig.json file
    });

        jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
            displayStacktrace: true
          }
        }));

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
    jasmine.getEnv().beforeEach(function(done){
      browser.takeScreenshot().then(function (png) {
      allure.createAttachment('Screenshot', function () {
        return new Buffer(png, 'base64')
      }, 'image/png')();
      done();
    })
  });

      }
    


}
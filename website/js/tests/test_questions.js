/* To run tests:

Need to change:
    browser site

NOTE:
    ptsd_diagnosis displays different questions every refresh.
    To "seed" the randomness, we choose 0.js as the testing extraTrees.
*/

var website = 'http://0.0.0.0:8000/ptsd_diagnosis.html';
/* 
    test_inputN: input to the question number
    test_questionsN: expected question number to be asked
    test_resultN: diagnosis result
*/
var test_input1 = [null, 5,5,5,5,5,5];
var test_questions1 = [null, 131, 191, 98, 152, 170, 129];
var test_result1 = 1;

var test_input2 = [null, 1,1,1,1,1,1];
var test_questions2 = [null, 131, 143, 140, 152, 194, 69];
var test_result2 = 0;

var test_input3 = [null, 0,0,0,0,0,0];
var test_questions3 = [null, 131, 143, 140, 152, 194, 69];
var test_result3 = 0;

var test_input4 = [null, 3,2,5,0,1,4];
var test_questions4 = [null, 131, 191, 82, 152, 194, 69];
var test_result4 = 0;

var test_input5 = [null, 6,6,6,6,6,6];
var test_input6 = [null, -6,-6,-6,-6,-6,-6];
var test_input7 = [null, -1.5, 2.5,3.5,4.6,2.1,4.21312];


/* NOTE: Uncomment this to slow down inputs for protractor. 
*/
// var origFn = browser.driver.controlFlow().execute;
// browser.driver.controlFlow().execute = function() {
//   var args = arguments;

//   // queue 100ms wait
//   origFn.call(browser.driver.controlFlow(), function() {
//     return protractor.promise.delayed(100);
//   });

//   return origFn.apply(browser.driver.controlFlow(), args);
// };




describe('PTSD Questions', function() {

    
    var FIRST_Q = 1;
    var LAST_Q = 6;
    var question_numbers = [];
    var submit_buttons = [];
    var input_array = [];
    var output_diagnosis = element(by.id('result'));
    var finish_button = element(by.id('finish_button'));

    input_array.push(null);
    submit_buttons.push(null);
    question_numbers.push(null);
    
    for (var i=FIRST_Q; i <= LAST_Q; i++) {
        input_array.push(element(by.id('q' + i.toString())));
        submit_buttons.push(element(by.id('q' + i.toString() + '_btn')));
        question_numbers.push(element(by.id('q' + i.toString() + '_number')));
    }

    /* Input a number into the question and submit it. */
    function inputAndSubmit(input_element, submit_button, q_input) {
        input_element.sendKeys(q_input);
        submit_button.click();
    }
    
    browser.waitForAngularEnabled(false);
    beforeEach(function() {
        browser.get(website);
    });
  
    /* Fills in each question one by one, then submit. 
       The inputs are correct. This is to check if the output 
       is correct.
    */
    function runSimpleTest(testName, testInput, testQuestions, testResult) {
        it(testName, function() {
            for (var i=FIRST_Q; i <= LAST_Q; i++) {
                inputAndSubmit(
                    input_array[i], 
                    submit_buttons[i], 
                    testInput[i]);
    
                expect(
                    question_numbers[i].getText()).toEqual(
                        testQuestions[i].toString());
            }
            finish_button.click();
            expect(
                output_diagnosis.getText()).toEqual(
                    testResult.toString());
        });
    }

    /* Check if the wrong inputs produce alerts. */
    function testWrongInputs(testName, testInput) {

        const INPUT_ALERT = "Input must be integers between 0 and 5 inclusively.";

        it(testName, function() {
            for (var i=FIRST_Q; i <= LAST_Q; i++) {
                inputAndSubmit(
                    input_array[i], 
                    submit_buttons[i], 
                    testInput[i]);

                var alertDialog = browser.switchTo().alert();
                expect(alertDialog.getText()).toEqual(INPUT_ALERT);
                alertDialog.accept();
            }
        });
    };

    runSimpleTest('Test1', test_input1, test_questions1, test_result1);
    runSimpleTest('Test2', test_input2, test_questions2, test_result2);
    runSimpleTest('Test3', test_input3, test_questions3, test_result3);
    runSimpleTest('Test4', test_input4, test_questions4, test_result4);
    testWrongInputs('Test5', test_input5);
    testWrongInputs('Test6', test_input6);
    testWrongInputs('Test7', test_input7);


  });
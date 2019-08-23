/* To run tests:

Click here: http://www.protractortest.org/#/tutorial for starting up protractor.

Versions:
    Node.js: 6.9.0
    Protractor: 5.4.2
    JDK: 12.0.2

Need to change:
    browser site

NOTE:
    ptsd_diagnosis displays different questions every refresh.
    To "seed" the randomness, we choose 0.js as the testing extraTrees.
*/

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
        browser.get('file:///Users/jinli/Projects/ZED/zcad/website/ptsd_diagnosis.html');
    });
  
    /* Fills in each question one by one, then submit. */
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

    runSimpleTest('Test1', test_input1, test_questions1, test_result1);
    runSimpleTest('Test2', test_input2, test_questions2, test_result2);
    runSimpleTest('Test3', test_input3, test_questions3, test_result3);
    runSimpleTest('Test4', test_input4, test_questions4, test_result4);

  });
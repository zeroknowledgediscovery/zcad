/*          
    TODO: Nunjucks for no repeated code.
        https://github.com/mozilla/nunjucks
    TODO: JSON files should be in pretty print

For running tests:
    http://www.protractortest.org/#/

    Why is javascript a piece of shit?
*/

const NUM_FEATURES = 211;
const INPUT_ALERT = "Input must be integers between 0 and 5 inclusively.";


/* Load the PTSD questions and choices. */
var ptsdQuestions = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "js/questions.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();


/* Load all the extraTrees from a JSON file. */
var extraTrees = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        // test_tree is the short version, for testing
        // 'url': "js/test_tree.json",

        // tree_splits.json contains all the questions
        'url': "js/tree_splits.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    for (var name in json) {
        json[name].name = name;
    }
    return json;
})();



/* We will select one predictor from the extraTrees.
   That predictor has trees under it since an extraTree is an ensemble.
*/
/* select a random extraTree predictor */
var extraTree = getRandomProperty(extraTrees);
/* I use the first one for testing purposes. */
// var extraTree = extraTrees.f0;
/* include the sklearn-porter file for prediction */
include("js/extraTrees/" + extraTree.name.slice(1,) + ".js");


/* 
Attributes:
    value: user's answer to question
    q_num: question number
    q_num_position: 
    name: question order
*/
class Question {
    constructor(value, q_num, q_num_position, name ) {
        this.value = value;
        this.q_num = q_num;
        this.q_num_position = q_num_position;
        this.name = name;
    }
}

var q1 = new Question(document.getElementById('q1').value, null, 0, "q1");
var q2 = new Question(document.getElementById('q2').value, null, null, "q2");
var q3 = new Question(document.getElementById('q3').value, null, null, "q3");
var q4 = new Question(document.getElementById('q4').value, null, 7, "q4");
var q5 = new Question(document.getElementById('q5').value, null, null, "q5");
var q6 = new Question(document.getElementById('q6').value, null, null, "q6");




/* submit answer to question and display the answer */
function submit_answer(question_num, display_num, q_object) {
    var input_value = document.getElementById(question_num).value;
    document.getElementById(display_num).innerHTML = input_value;
    q_object.value = input_value;

}


/* parse a JSON file into an object containing many extraTrees */
function parseJSON(string) {
    var manyTrees;

    manyTrees = JSON.parse(string);

    // give a name for each tree
    for (var name in manyTrees) {
        manyTrees[name].name = name;
    }

    return manyTrees;
}


/* decide on the first question */
function setfirstQ(q_obj) {
    var q_num = extraTree.q_numbers[q_obj.q_num_position];
    q_obj.q_num = q_num;

    tagInnerHTML(
        q_obj.name + "_number", 
        q_num);
    tagInnerHTML(
        q_obj.name + "_sentence", 
        ptsdQuestions["ptsd" + q_num].questions);
    tagInnerHTML(
        q_obj.name + "_choices", 
        ptsdQuestions["ptsd" + q_num].choices);
}


/* decide on the next question */
function setNextQuestion(prev_q, next_q, top_num, bottom_num, next_nums) {

    if (Number(prev_q.q_num_position) == top_num) {
        if (Number(prev_q.value) < Number(extraTree.thresholds[top_num])) {
            var next_num = next_nums[0];
            
        }
        else {
            var next_num = next_nums[1];
        }
    }
    else if (Number(prev_q.q_num_position) == bottom_num) {
        if (Number(prev_q.value) < Number(extraTree.thresholds[bottom_num])) {
            var next_num = next_nums[2];
        }
        else {
            var next_num = next_nums[3];
        }
    }
    else {
        console.log("Something went wrong");
    }

    var q_num = extraTree.q_numbers[next_num];

    tagInnerHTML(
        next_q.name + "_number", 
        q_num);
    tagInnerHTML(
        next_q.name + "_sentence", 
        ptsdQuestions["ptsd" + q_num].questions);
    tagInnerHTML(
        next_q.name + "_choices", 
        ptsdQuestions["ptsd" + q_num].choices);

    next_q.q_num = q_num;
    next_q.q_num_position = next_num;
}



/* print out the attributes of the question objects */
function printQuestionObj(qobj) {
    console.log("");
    console.log("Name: " + qobj.name);
    console.log("Value: " + qobj.value);
    console.log("Question Number: " + qobj.q_num);
    console.log("Question Number Position: " + qobj.q_num_position);
}


/* given results to the questions, run the extraTrees */
function predict() {
    var features = [];
    var prediction;

    for (var i = 0; i < NUM_FEATURES; i++) {
        features[i] = 0;
    }
    features[q1.q_num] = q1.value;
    features[q2.q_num] = q2.value;
    features[q3.q_num] = q3.value;
    features[q4.q_num] = q4.value;
    features[q5.q_num] = q5.value;
    features[q6.q_num] = q6.value;

    prediction = new ExtraTreesClassifier().predict(features);
    return prediction;
}


/* Perform a sanity check for inputs. 
   Question number should not be null or undefined.
   Question inputs should not be blank.
*/
function saneInputs(){
    var is_sane;

    is_sane = (isNull(q1) 
              || isNull(q2) 
              || isNull(q3) 
              || isNull(q4) 
              || isNull(q5) 
              || isNull(q6)); 

    return !is_sane;   
}


/* Write out output to console and to screen. */
function finish() {
    var prediction;
    printQuestionObj(q1);
    printQuestionObj(q2);
    printQuestionObj(q3);
    printQuestionObj(q4);
    printQuestionObj(q5);
    printQuestionObj(q6);

    if (saneInputs()) {
        console.log("Sane inputs");
    }
    else {
        console.log("Not sane inputs.");
        alert("Please answer all questions. If you change your answers, please refresh page.");
    }

    prediction = predict();
    
    prob_yes = prediction[1];
    diagnosis = findMaxIndex(prediction).toString();



    if (diagnosis == 0) {
        result = "You do not have PTSD.";
    }
    else if (diagnosis == 1) {
        result = "You have PTSD.";
    }
    else {
        console.log("Something went wrong. The probability of the prediction can only be 0 or 1.")
    }

    tagInnerHTML(
        "prediction_proba",
        "Your probability of having PTSD is " + prob_yes.toString()
    );
    tagInnerHTML(
        "result",
        result
    );
}




/*
    UTILITY FUNCTIONS
*/

/* import another javascript file */
function include(filename)
{
    var imported = document.createElement('script');
    imported.src = filename;
    document.head.appendChild(imported);
}


/* Write out the output to html. */
function tagInnerHTML(tag, output) {
    document.getElementById(tag).innerHTML = output;
}


/* get a random property from an object */
function getRandomProperty(obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};


/* find the index with maximum value in array */
var findMaxIndex = function(nums) {
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
        index = nums[i] > nums[index] ? i : index;
    }
    return index;
};


/* Check if any of the property values of the objects 
   are null.
   Return true if any are null.
 */
function isNull(object) {
    var any_null;
    var null_array = []
    for (property in object) {
        // any_null = any_null || (object[property] == null || object[property] == '');
        // any_null = any_null && (object[property] == null);
        null_array.push(object[property]);
    }

    var meetsCondition = function(element) {
        return (element == null) || (element === '');
      };

    any_null = null_array.some(meetsCondition);
    // if (any_null) {
    //     console.log(object.name);
    //     console.log()
    // }
    // else {
    //     console.log("wtd");
    // }
    return any_null;
}


/* Check if the input is "correct"

As of now, the input is correct if:
    the input is between 0 and 5
    it is an integer

Returns:
    (bool)
*/
function checkCorrectInput(input_value) {
    input_value = Number(input_value);
    var correct = input_value >= 0 
                  && input_value <= 5
                  && Number.isInteger(input_value);
    return correct;
  }





/*
    OLD CODE
*/

// function setQ2() {
//     // q1.value = input;
    
//     // q1.q_num = document.getElementById("q1_number").value;
//     // q1.q_num_position = 0;

//     if (Number(q1.value) < Number(extraTree.thresholds[q1.q_num_position])) {
//         var q_num = extraTree.q_numbers[1]
//         document.getElementById("q2_number").innerHTML = q_num;
//         q2.q_num = q_num;
//         q2.q_num_position = 1;

//         console.log(q1.value);
//         console.log("works1");
//     }
//     else {
//         var q_num = extraTree.q_numbers[4];
//         document.getElementById("q2_number").innerHTML = q_num;
//         q2.q_num = q_num;
//         q2.q_num_position = 4;

//         console.log(q1.value);
//         console.log("works2");
//     }
// }


// function setQ3() {
//     var input = document.getElementById('q2').value;
//     // q2.value = input;

//     if (Number(q2.q_num_position) == 1) {
//         if (Number(q2_value) < Number(extraTree.thresholds[1])) {
//             document.getElementById("q3_number").innerHTML = extraTree.q_numbers[2];
//         }
//         else {
//             document.getElementById("q3_number").innerHTML = extraTree.q_numbers[3];
//         }
//     }
//     else if (Number(q2.q_num_position) == 4) {

//     }
//     else {
//         console.log("Something went wrong");
//     }

// }



// var xmlRequest = new XMLHttpRequest();
// xmlRequest.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var extraTrees = JSON.parse(this.responseText);
//     // document.getElementById("demo").innerHTML = myObj.na/me;
//   }
// };
// xmlRequest.open("GET", "js/tree_splits.json", true);
// xmlRequest.send();



// $.getJSON("js/tree_splits.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

// var extraTrees = $.getJSON("test.json");

// $.ajax ({ url: "js/tree_splits.json", method: "GET"})
// .success(function (response) {
//    var extraTrees = $.parseJSON (response);
// });


// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
// //   if (this.readyState == 4 && this.status == 200) {
//     var extraTrees = JSON.parse(this.responseText);
//     // document.getElementById("demo").innerHTML = myObj.name;
//     console.log(extraTrees);
//     // var extraTree = extraTrees.f0;
// //   }
// };
// xmlhttp.open("GET", "js/tree_splits.json", true);
// xmlhttp.send();

// function loadJSON(callback) {   

//     var xobj = new XMLHttpRequest();
//         // xobj.overrideMimeType("application/json");
//     xobj.open('GET', "js/tree_splits.json", true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }

//  function init() {
//     loadJSON(function(response) {
//      // Parse JSON string into object
//        var actual_JSON = JSON.parse(response);
//     });
//    }



// function loadJSON(callback) {

//     var xobj = new XMLHttpRequest();
//     // xobj.overrideMimeType("application/json");
//     xobj.open('GET', "js/tree_splits.json", true);
//     xobj.onreadystatechange = function() {
//         if (xobj.readyState == 4 && xobj.status == "200") {

//             // .open will NOT return a value but simply returns undefined in async mode so use a callback
//             callback(xobj.responseText);

//         }
//     }
//     xobj.send(null);

// }

// // Call to function with anonymous callback
// loadJSON(function(response) {
//     // Do Something with the response e.g.
//     //jsonresponse = JSON.parse(response);

//     // Assuming json data is wrapped in square brackets as Drew suggests
//     //console.log(jsonresponse[0].name);

// });



// $.getJSON("js/tree_splits.json", function(extraTrees_){
// // alert(data);
//     var extraTrees = extraTrees_;
//     return extraTree;
// });

// var extraTrees = getJSON();


// var zz = $.getJSON("js/test_tree.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
//     // return json.responseText;
// });

// console.log(zz);
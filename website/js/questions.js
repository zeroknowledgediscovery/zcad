/* TODO: need to make sure the inputs are valid (between 0 and 5, must be integers).
   TODO: make sure I can allow users to change their inputs. This is important 
         because their input affects the next question that is asked.
   TODO: write tests to test if output is correct. 
         http://www.protractortest.org/#/

*/

NUM_FEATURES = 211;

/* SHORT (only contains 5 extraTrees) */
JSON_FILE = '{"f0": {"q_numbers": [131, 143, 140, 3, 191, 82, 98, 152, 194, 69, 208, 170, 49, 129], "thresholds": [2.966, 3.174, 1.909, 3.404, 2.533, 1.421, 3.034, 2.114, 1.047, 2.736, 4.112, 2.029, 3.257, 3.349]}, "f1": {"q_numbers": [134, 127, 135, 132, 195, 172, 16, 192, 70, 196, 110, 94, 90, 55], "thresholds": [2.16, 3.039, 3.52, 3.092, 3.565, 1.624, 4.655, 2.915, 2.152, 1.011, 3.017, 2.196, 3.084, 2.571]}, "f2": {"q_numbers": [119, 68, 110, 185, 194, 196, 1, 143, 26, 73, 196, 95, 98, 122], "thresholds": [3.226, 2.607, 3.318, 2.215, 2.371, 2.368, 2.928, 2.683, 2.476, 4.828, 2.669, 4.512, 1.904, 1.687]}, "f3": {"q_numbers": [143, 180, 186, 201, 184, 137, 60, 68, 192, 138, 186, 96, 160], "thresholds": [2.886, 1.427, 2.942, 4.005, 2.714, 3.89, 2.103, 3.464, 2.977, 1.85, 1.52, 1.816, 2.988]}, "f4": {"q_numbers": [24, 192, 106, 7, 168, 184, 199, 94, 175, 75, 110, 147, 96, 186], "thresholds": [2.747, 3.025, 1.689, 2.147, 4.579, 3.766, 3.0, 2.917, 1.99, 2.184, 3.784, 2.832, 4.98, 1.086]}, "fextraTrees": {"q_numbers": [143, 180, 186, 201, 184, 137, 60, 68, 192, 138, 186, 96, 160], "thresholds": [2.886, 1.427, 2.942, 4.005, 2.714, 3.89, 2.103, 3.464, 2.977, 1.85, 1.52, 1.816, 2.988]}}'

/* Here we have a bunch of extraTrees. 
   We will select one predictor from the extraTrees.
   That predictor has trees under it since an extraTree is an ensemble 
*/
var extraTrees = parseJSON(JSON_FILE);
/* select a random extraTree predictor */
// var extraTree = getRandomProperty(extraTrees);
/* I use the first one for testing purposes. */
var extraTree = extraTrees.f0;
/* include the sklearn-porter file for prediction */
include("js/extraTrees/" + extraTree.name.slice(1,) + ".js");


class Question {
    constructor(value, q_num, q_num_position, name ) {
        this.value = value;
        this.q_num = q_num;
        this.q_num_position = q_num_position;
        this.name = name;
    }
}

var q1 = new Question(document.getElementById('q1').value, -1, 0, "q1");
var q2 = new Question(document.getElementById('q2').value, -1, -1, "q2");
var q3 = new Question(document.getElementById('q3').value, -1, -1, "q3");
var q4 = new Question(document.getElementById('q4').value, -1, 7, "q4");
var q5 = new Question(document.getElementById('q5').value, -1, -1, "q5");
var q6 = new Question(document.getElementById('q6').value, -1, -1, "q6");




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
    document.getElementById(q_obj.name + "_number").innerHTML = q_num;
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
    document.getElementById(next_q.name + "_number").innerHTML = q_num;
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


function finish() {
    var prediction;
    printQuestionObj(q1);
    printQuestionObj(q2);
    printQuestionObj(q3);
    printQuestionObj(q4);
    printQuestionObj(q5);
    printQuestionObj(q6);

    prediction = predict();

    document.getElementById("result").innerHTML = prediction.toString();
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


/* get a random property from an object */
function getRandomProperty(obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};




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
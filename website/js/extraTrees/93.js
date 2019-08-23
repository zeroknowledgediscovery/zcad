var ExtraTreesClassifier = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    var trees = new Array();

    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[179] <= 2.282958037351704) {
            if (features[184] <= 2.88287940196827) {
                if (features[153] <= 4.232706397414536) {
                    classes[0] = 110; 
                    classes[1] = 7; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[131] <= 2.512438564334269) {
                    classes[0] = 9; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 4; 
                }
            }
        } else {
            if (features[100] <= 2.0518771042357558) {
                if (features[70] <= 1.0899093435564589) {
                    classes[0] = 5; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 6; 
                }
            } else {
                if (features[124] <= 2.4280131540391654) {
                    classes[0] = 6; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 13; 
                    classes[1] = 46; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[124] <= 2.94071450035121) {
            if (features[173] <= 1.517367821427699) {
                if (features[146] <= 2.727565507277644) {
                    classes[0] = 60; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 1; 
                }
            } else {
                if (features[196] <= 1.5362034498416834) {
                    classes[0] = 8; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 27; 
                    classes[1] = 7; 
                }
            }
        } else {
            if (features[131] <= 2.5995650913564328) {
                if (features[122] <= 2.015775983229175) {
                    classes[0] = 15; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 25; 
                    classes[1] = 11; 
                }
            } else {
                if (features[181] <= 1.8217895090681453) {
                    classes[0] = 7; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 15; 
                    classes[1] = 45; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    this.predict = function(features) {
        var classes = new Array(2).fill(0);
        for (var i = 0; i < trees.length; i++) {
            classes[trees[i](features)]++;
        }
        return findMax(classes);
    }

};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 == 211) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var prediction = new ExtraTreesClassifier().predict(features);
        console.log(prediction);

    }
}
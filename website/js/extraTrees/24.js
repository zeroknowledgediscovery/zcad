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
        
        if (features[139] <= 3.068854204411085) {
            if (features[47] <= 2.747018394873952) {
                if (features[101] <= 1.9168687075920723) {
                    classes[0] = 59; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 42; 
                    classes[1] = 6; 
                }
            } else {
                if (features[149] <= 2.1541343578855203) {
                    classes[0] = 37; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 15; 
                }
            }
        } else {
            if (features[159] <= 2.9044684273677266) {
                if (features[192] <= 2.3883799507228565) {
                    classes[0] = 7; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 5; 
                }
            } else {
                if (features[184] <= 3.3901793441689474) {
                    classes[0] = 8; 
                    classes[1] = 11; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 14; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[155] <= 1.0040061175841866) {
            if (features[127] <= 3.8770600347207207) {
                if (features[4] <= 3.0946929143251354) {
                    classes[0] = 75; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 1; 
                }
            } else {
                if (features[4] <= 1.9865530128528146) {
                    classes[0] = 4; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            }
        } else {
            if (features[191] <= 2.2394646523704123) {
                if (features[189] <= 1.3561466030572293) {
                    classes[0] = 46; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 3; 
                }
            } else {
                if (features[149] <= 3.857512257461209) {
                    classes[0] = 21; 
                    classes[1] = 17; 
                } else {
                    classes[0] = 10; 
                    classes[1] = 31; 
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
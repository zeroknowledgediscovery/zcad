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
        
        if (features[204] <= 2.6988823514892175) {
            if (features[24] <= 2.7569445840813893) {
                if (features[207] <= 1.3519536519199393) {
                    classes[0] = 51; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 29; 
                    classes[1] = 3; 
                }
            } else {
                if (features[17] <= 2.052327905340273) {
                    classes[0] = 23; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 8; 
                }
            }
        } else {
            if (features[180] <= 2.185893919405478) {
                if (features[7] <= 2.363039389887377) {
                    classes[0] = 9; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 21; 
                    classes[1] = 14; 
                }
            } else {
                if (features[130] <= 4.353521926027501) {
                    classes[0] = 16; 
                    classes[1] = 25; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 13; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[170] <= 2.026476107084414) {
            if (features[59] <= 3.7402246756200794) {
                if (features[15] <= 1.4817644974597566) {
                    classes[0] = 56; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 57; 
                    classes[1] = 9; 
                }
            } else {
                if (features[177] <= 3.1474365918652323) {
                    classes[0] = 11; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[194] <= 2.259062054222013) {
                if (features[3] <= 3.4002083886415737) {
                    classes[0] = 16; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 5; 
                }
            } else {
                if (features[40] <= 1.3168425095811684) {
                    classes[0] = 5; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 16; 
                    classes[1] = 42; 
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
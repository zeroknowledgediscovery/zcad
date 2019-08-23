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
        
        if (features[30] <= 3.6268698436333193) {
            if (features[139] <= 2.5214724845818584) {
                if (features[205] <= 2.0178299238988338) {
                    classes[0] = 101; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 4; 
                }
            } else {
                if (features[74] <= 3.2843843355236504) {
                    classes[0] = 26; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 9; 
                }
            }
        } else {
            if (features[3] <= 3.430030578481979) {
                if (features[96] <= 3.364066380245642) {
                    classes[0] = 12; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 17; 
                }
            } else {
                if (features[100] <= 3.8940583667224544) {
                    classes[0] = 2; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 12; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[149] <= 2.2743390711370575) {
            if (features[26] <= 2.287994706206021) {
                if (features[4] <= 2.804123130535764) {
                    classes[0] = 79; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 13; 
                    classes[1] = 3; 
                }
            } else {
                if (features[18] <= 4.932457251442809) {
                    classes[0] = 43; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 4; 
                }
            }
        } else {
            if (features[163] <= 2.206554015728903) {
                if (features[42] <= 1.3033466489535508) {
                    classes[0] = 2; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 2; 
                }
            } else {
                if (features[6] <= 1.1951612141892134) {
                    classes[0] = 4; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 17; 
                    classes[1] = 38; 
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
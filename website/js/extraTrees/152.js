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
        
        if (features[134] <= 2.5977981377382755) {
            if (features[146] <= 1.7803131122050402) {
                classes[0] = 60; 
                classes[1] = 0; 
            } else {
                if (features[127] <= 3.192239962607734) {
                    classes[0] = 60; 
                    classes[1] = 12; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 4; 
                }
            }
        } else {
            if (features[195] <= 1.3597284128701912) {
                if (features[97] <= 1.5900694344146502) {
                    classes[0] = 9; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 2; 
                }
            } else {
                if (features[67] <= 3.822610280859568) {
                    classes[0] = 20; 
                    classes[1] = 17; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 29; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[163] <= 2.8089362400625535) {
            if (features[97] <= 2.1854424742914) {
                if (features[170] <= 1.26528076048255) {
                    classes[0] = 78; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 32; 
                    classes[1] = 8; 
                }
            } else {
                if (features[66] <= 1.951739280927805) {
                    classes[0] = 9; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[0] <= 3.6164873757476395) {
                if (features[105] <= 2.459328159438133) {
                    classes[0] = 9; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 20; 
                    classes[1] = 6; 
                }
            } else {
                if (features[100] <= 1.531873433167056) {
                    classes[0] = 3; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 43; 
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
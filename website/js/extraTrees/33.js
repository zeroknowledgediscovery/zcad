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
        
        if (features[130] <= 3.0934751453313396) {
            if (features[24] <= 2.954986309611698) {
                if (features[141] <= 1.3929615804892785) {
                    classes[0] = 60; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 26; 
                    classes[1] = 2; 
                }
            } else {
                if (features[74] <= 2.059514692546574) {
                    classes[0] = 38; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 14; 
                }
            }
        } else {
            if (features[15] <= 2.2525872798881434) {
                if (features[204] <= 3.915396222339662) {
                    classes[0] = 8; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                }
            } else {
                if (features[73] <= 1.9367636409293691) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 38; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[149] <= 2.9436922790220437) {
            if (features[98] <= 3.0226857611083826) {
                if (features[15] <= 2.431961266990733) {
                    classes[0] = 108; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 24; 
                    classes[1] = 9; 
                }
            } else {
                if (features[17] <= 2.5588049039052825) {
                    classes[0] = 4; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 5; 
                }
            }
        } else {
            if (features[100] <= 2.9423974761471143) {
                if (features[185] <= 1.26986963733559) {
                    classes[0] = 3; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 5; 
                }
            } else {
                if (features[63] <= 2.6119845866281466) {
                    classes[0] = 14; 
                    classes[1] = 24; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 17; 
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
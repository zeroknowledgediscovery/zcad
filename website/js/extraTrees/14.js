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
        
        if (features[58] <= 3.0381062245173873) {
            if (features[180] <= 2.0855703908417236) {
                if (features[155] <= 3.7739269932610573) {
                    classes[0] = 113; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 3; 
                }
            } else {
                if (features[136] <= 4.419208811325584) {
                    classes[0] = 19; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[154] <= 2.0138732031983664) {
                if (features[131] <= 3.1240603984911277) {
                    classes[0] = 15; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            } else {
                if (features[198] <= 4.490850560130016) {
                    classes[0] = 9; 
                    classes[1] = 38; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 1; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[155] <= 2.0697120712463333) {
            if (features[185] <= 1.8209010790199511) {
                if (features[86] <= 3.3168724599838595) {
                    classes[0] = 83; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 1; 
                }
            } else {
                if (features[183] <= 1.7041096373945985) {
                    classes[0] = 14; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 26; 
                    classes[1] = 14; 
                }
            }
        } else {
            if (features[77] <= 3.569308213223381) {
                if (features[132] <= 1.2395057120544397) {
                    classes[0] = 0; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 26; 
                    classes[1] = 12; 
                }
            } else {
                if (features[117] <= 1.9479051925930686) {
                    classes[0] = 9; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 27; 
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
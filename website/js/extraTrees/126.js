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
        
        if (features[184] <= 2.5403855901865224) {
            if (features[138] <= 3.311621958069327) {
                if (features[91] <= 1.0948160412231536) {
                    classes[0] = 57; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 64; 
                    classes[1] = 10; 
                }
            } else {
                if (features[197] <= 4.899597423104382) {
                    classes[0] = 10; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[71] <= 3.5305549011242365) {
                if (features[20] <= 2.76129804913015) {
                    classes[0] = 21; 
                    classes[1] = 17; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                }
            } else {
                if (features[102] <= 4.60806783456731) {
                    classes[0] = 5; 
                    classes[1] = 21; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 6; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[54] <= 1.080248096995171) {
            if (features[184] <= 2.939325014101027) {
                if (features[196] <= 1.6408136545870518) {
                    classes[0] = 65; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 24; 
                    classes[1] = 4; 
                }
            } else {
                if (features[155] <= 4.189936013515077) {
                    classes[0] = 9; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 0; 
                }
            }
        } else {
            if (features[152] <= 3.33114904087556) {
                if (features[16] <= 2.0251287133549942) {
                    classes[0] = 24; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 31; 
                    classes[1] = 19; 
                }
            } else {
                if (features[140] <= 3.2387017287494158) {
                    classes[0] = 6; 
                    classes[1] = 12; 
                } else {
                    classes[0] = 0; 
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
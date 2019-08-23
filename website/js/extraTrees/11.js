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
        
        if (features[131] <= 3.844525744600466) {
            if (features[78] <= 3.595623887421388) {
                if (features[29] <= 4.082380825226373) {
                    classes[0] = 139; 
                    classes[1] = 16; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 3; 
                }
            } else {
                if (features[38] <= 2.450171648734329) {
                    classes[0] = 6; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 13; 
                }
            }
        } else {
            if (features[41] <= 3.29109570118184) {
                if (features[60] <= 3.498131348983446) {
                    classes[0] = 0; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 9; 
                }
            } else {
                if (features[97] <= 4.133768863572632) {
                    classes[0] = 2; 
                    classes[1] = 18; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 0; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[144] <= 2.404276561180258) {
            if (features[14] <= 2.3025263106927865) {
                if (features[135] <= 1.5423017859190247) {
                    classes[0] = 62; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 27; 
                    classes[1] = 3; 
                }
            } else {
                if (features[178] <= 1.6285899377561126) {
                    classes[0] = 10; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[168] <= 4.194005533677529) {
                if (features[88] <= 2.8562328358442675) {
                    classes[0] = 34; 
                    classes[1] = 12; 
                } else {
                    classes[0] = 24; 
                    classes[1] = 30; 
                }
            } else {
                if (features[7] <= 2.492880129019208) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 13; 
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
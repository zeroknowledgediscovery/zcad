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
        
        if (features[131] <= 2.5478132057691987) {
            if (features[120] <= 2.4703526224337296) {
                if (features[154] <= 1.7097826510247693) {
                    classes[0] = 59; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 54; 
                    classes[1] = 8; 
                }
            } else {
                if (features[98] <= 1.3905901095786086) {
                    classes[0] = 8; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 10; 
                    classes[1] = 9; 
                }
            }
        } else {
            if (features[174] <= 2.6197158869447725) {
                if (features[32] <= 4.633684884586225) {
                    classes[0] = 12; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            } else {
                if (features[208] <= 2.1254871399726194) {
                    classes[0] = 7; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 37; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[163] <= 2.6418328358055243) {
            if (features[158] <= 2.0478566945753327) {
                if (features[194] <= 1.1068160376077592) {
                    classes[0] = 62; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 41; 
                    classes[1] = 7; 
                }
            } else {
                if (features[28] <= 2.23429842350739) {
                    classes[0] = 13; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 6; 
                }
            }
        } else {
            if (features[195] <= 2.7000521112699305) {
                if (features[152] <= 2.7615420491255547) {
                    classes[0] = 16; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 6; 
                }
            } else {
                if (features[147] <= 3.847025336160802) {
                    classes[0] = 10; 
                    classes[1] = 7; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 34; 
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
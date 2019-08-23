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
        
        if (features[184] <= 2.1076291613781963) {
            if (features[146] <= 1.1693755444927958) {
                classes[0] = 66; 
                classes[1] = 0; 
            } else {
                if (features[70] <= 2.916077506689391) {
                    classes[0] = 46; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 21; 
                    classes[1] = 13; 
                }
            }
        } else {
            if (features[79] <= 2.420398954963497) {
                classes[0] = 7; 
                classes[1] = 0; 
            } else {
                if (features[88] <= 1.3721872737501688) {
                    classes[0] = 3; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 18; 
                    classes[1] = 47; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[181] <= 2.573823534685105) {
            if (features[7] <= 4.446170225481582) {
                if (features[185] <= 3.825764973566758) {
                    classes[0] = 140; 
                    classes[1] = 14; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 7; 
                }
            } else {
                if (features[122] <= 2.037504681403518) {
                    classes[0] = 3; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 5; 
                }
            }
        } else {
            if (features[138] <= 2.4688968604751382) {
                if (features[91] <= 3.741647980521269) {
                    classes[0] = 5; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[90] <= 1.5177115716588272) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 7; 
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
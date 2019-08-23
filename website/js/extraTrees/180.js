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
        
        if (features[68] <= 3.436908957751891) {
            if (features[171] <= 1.2255002950436902) {
                if (features[152] <= 1.9804845121598265) {
                    classes[0] = 59; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 39; 
                    classes[1] = 5; 
                }
            } else {
                if (features[105] <= 2.650679793511834) {
                    classes[0] = 29; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 31; 
                    classes[1] = 21; 
                }
            }
        } else {
            if (features[100] <= 4.639673011209664) {
                if (features[141] <= 3.754079369247928) {
                    classes[0] = 4; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 3; 
                }
            } else {
                if (features[180] <= 3.8029050523428736) {
                    classes[0] = 3; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 9; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[184] <= 2.5548628133511464) {
            if (features[196] <= 1.9550653178966908) {
                if (features[64] <= 3.6007091033275747) {
                    classes[0] = 74; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 1; 
                }
            } else {
                if (features[129] <= 3.8029239004491475) {
                    classes[0] = 49; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 13; 
                    classes[1] = 8; 
                }
            }
        } else {
            if (features[41] <= 2.874150842835266) {
                if (features[119] <= 1.0747719142002854) {
                    classes[0] = 0; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 5; 
                }
            } else {
                if (features[49] <= 2.4103992713663724) {
                    classes[0] = 3; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 30; 
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
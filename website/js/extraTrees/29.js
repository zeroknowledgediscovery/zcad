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
        
        if (features[139] <= 2.4196840382272766) {
            if (features[191] <= 2.8554215532985614) {
                if (features[171] <= 1.5498296541859533) {
                    classes[0] = 92; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 32; 
                    classes[1] = 6; 
                }
            } else {
                if (features[94] <= 2.1384748598274195) {
                    classes[0] = 6; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 5; 
                }
            }
        } else {
            if (features[71] <= 4.089275933378039) {
                if (features[128] <= 3.930237129298149) {
                    classes[0] = 37; 
                    classes[1] = 21; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 4; 
                }
            } else {
                if (features[26] <= 2.1668511238726094) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 16; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[184] <= 2.6910857216879194) {
            if (features[144] <= 2.6765011822229723) {
                if (features[201] <= 2.4501096240478146) {
                    classes[0] = 92; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 18; 
                    classes[1] = 2; 
                }
            } else {
                if (features[95] <= 2.174790120299342) {
                    classes[0] = 22; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 7; 
                }
            }
        } else {
            if (features[17] <= 2.240960913356841) {
                if (features[74] <= 3.0218164017525577) {
                    classes[0] = 15; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                }
            } else {
                if (features[15] <= 4.964319737145827) {
                    classes[0] = 16; 
                    classes[1] = 23; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 12; 
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
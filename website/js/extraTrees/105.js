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
        
        if (features[184] <= 2.185670175676081) {
            if (features[152] <= 2.6809695277740104) {
                if (features[165] <= 1.5713016859122093) {
                    classes[0] = 78; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 40; 
                    classes[1] = 8; 
                }
            } else {
                if (features[90] <= 3.3779457618379714) {
                    classes[0] = 15; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 7; 
                }
            }
        } else {
            if (features[202] <= 2.376828432724266) {
                if (features[179] <= 2.9090196997434923) {
                    classes[0] = 9; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 4; 
                }
            } else {
                if (features[126] <= 2.0568414880227492) {
                    classes[0] = 4; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 13; 
                    classes[1] = 37; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[142] <= 2.87739310873551) {
            if (features[182] <= 1.160778952837353) {
                if (features[137] <= 2.1368856775280487) {
                    classes[0] = 82; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 22; 
                    classes[1] = 3; 
                }
            } else {
                if (features[25] <= 3.829391212588824) {
                    classes[0] = 23; 
                    classes[1] = 13; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 0; 
                }
            }
        } else {
            if (features[183] <= 1.2665761617322342) {
                if (features[82] <= 1.243988718019793) {
                    classes[0] = 3; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 0; 
                }
            } else {
                if (features[88] <= 3.199625459592615) {
                    classes[0] = 13; 
                    classes[1] = 11; 
                } else {
                    classes[0] = 7; 
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
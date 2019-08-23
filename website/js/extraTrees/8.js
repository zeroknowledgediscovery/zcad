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
        
        if (features[173] <= 1.39324341732694) {
            if (features[191] <= 1.8811148697888083) {
                classes[0] = 61; 
                classes[1] = 0; 
            } else {
                if (features[2] <= 1.4097183050633029) {
                    classes[0] = 6; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[146] <= 2.0190342632210974) {
                if (features[7] <= 2.0445700665212097) {
                    classes[0] = 34; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 20; 
                    classes[1] = 10; 
                }
            } else {
                if (features[110] <= 2.148378808586103) {
                    classes[0] = 16; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 17; 
                    classes[1] = 43; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[208] <= 2.5838278110995088) {
            if (features[103] <= 2.6440406020935816) {
                if (features[196] <= 2.9473824258648706) {
                    classes[0] = 60; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 1; 
                }
            } else {
                if (features[173] <= 1.5688400923129358) {
                    classes[0] = 23; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 31; 
                    classes[1] = 13; 
                }
            }
        } else {
            if (features[81] <= 2.6148908685962162) {
                if (features[19] <= 2.7362856067420385) {
                    classes[0] = 17; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                }
            } else {
                if (features[135] <= 1.5064148197446088) {
                    classes[0] = 4; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 19; 
                    classes[1] = 49; 
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
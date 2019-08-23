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
        
        if (features[174] <= 2.3589472851524818) {
            if (features[197] <= 4.322933898923422) {
                if (features[130] <= 2.6320409894138765) {
                    classes[0] = 101; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 28; 
                    classes[1] = 7; 
                }
            } else {
                classes[0] = 0; 
                classes[1] = 2; 
            }
        } else {
            if (features[69] <= 2.0268030972344815) {
                if (features[56] <= 2.0575253297842693) {
                    classes[0] = 6; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 10; 
                    classes[1] = 6; 
                }
            } else {
                if (features[180] <= 3.0695878304865154) {
                    classes[0] = 17; 
                    classes[1] = 22; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 18; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[200] <= 2.052674850939156) {
            if (features[16] <= 2.0666023851682445) {
                if (features[153] <= 1.2431453723661348) {
                    classes[0] = 55; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 34; 
                    classes[1] = 3; 
                }
            } else {
                if (features[143] <= 3.39237929293531) {
                    classes[0] = 26; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 6; 
                }
            }
        } else {
            if (features[98] <= 2.914406483487415) {
                if (features[101] <= 4.787767497723814) {
                    classes[0] = 29; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[110] <= 2.6400197342224514) {
                    classes[0] = 7; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 11; 
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
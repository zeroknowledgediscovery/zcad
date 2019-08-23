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
        
        if (features[176] <= 3.482123894375807) {
            if (features[95] <= 4.8465200401127895) {
                if (features[97] <= 2.409474172354431) {
                    classes[0] = 137; 
                    classes[1] = 18; 
                } else {
                    classes[0] = 17; 
                    classes[1] = 11; 
                }
            } else {
                if (features[174] <= 2.135810662589879) {
                    classes[0] = 2; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 10; 
                }
            }
        } else {
            if (features[59] <= 4.557593034374339) {
                if (features[91] <= 2.708478042254447) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 18; 
                }
            } else {
                if (features[30] <= 2.9628688432103343) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 5; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[57] <= 4.727410329378866) {
            if (features[183] <= 1.2525111233128752) {
                if (features[22] <= 1.1149042062996442) {
                    classes[0] = 65; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 33; 
                    classes[1] = 6; 
                }
            } else {
                if (features[71] <= 3.2486293028335225) {
                    classes[0] = 44; 
                    classes[1] = 14; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 10; 
                }
            }
        } else {
            if (features[63] <= 1.3992008484896277) {
                if (features[27] <= 2.6337335578323033) {
                    classes[0] = 6; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 7; 
                }
            } else {
                if (features[81] <= 4.277978250420642) {
                    classes[0] = 1; 
                    classes[1] = 18; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 8; 
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
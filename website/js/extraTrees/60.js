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
        
        if (features[131] <= 2.6056811258223282) {
            if (features[140] <= 2.5946187235389924) {
                if (features[141] <= 2.684614251220885) {
                    classes[0] = 106; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 2; 
                }
            } else {
                if (features[146] <= 2.578288321186923) {
                    classes[0] = 12; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 9; 
                }
            }
        } else {
            if (features[128] <= 2.389999302285723) {
                if (features[130] <= 3.3144743602324622) {
                    classes[0] = 17; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 17; 
                }
            } else {
                if (features[206] <= 3.5955077161060216) {
                    classes[0] = 5; 
                    classes[1] = 20; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 2; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[195] <= 2.476412023173837) {
            if (features[170] <= 2.61973602400149) {
                if (features[153] <= 1.256107753261974) {
                    classes[0] = 74; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 43; 
                    classes[1] = 10; 
                }
            } else {
                if (features[16] <= 1.2914576531813748) {
                    classes[0] = 1; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 19; 
                    classes[1] = 6; 
                }
            }
        } else {
            if (features[174] <= 2.2981215106780275) {
                if (features[177] <= 1.092913175976329) {
                    classes[0] = 7; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 3; 
                }
            } else {
                if (features[105] <= 1.9105027312927425) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 15; 
                    classes[1] = 42; 
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
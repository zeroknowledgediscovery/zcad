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
        
        if (features[193] <= 2.7623558108519557) {
            if (features[137] <= 2.5696015700556343) {
                if (features[165] <= 1.7559845129754321) {
                    classes[0] = 69; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 30; 
                    classes[1] = 7; 
                }
            } else {
                if (features[137] <= 3.1471758457586057) {
                    classes[0] = 38; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 9; 
                }
            }
        } else {
            if (features[96] <= 4.040702076182097) {
                if (features[48] <= 2.87636433722282) {
                    classes[0] = 4; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 17; 
                    classes[1] = 19; 
                }
            } else {
                if (features[24] <= 3.070695642414827) {
                    classes[0] = 2; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 10; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[193] <= 2.380452084066557) {
            if (features[143] <= 2.2967776946242795) {
                if (features[124] <= 3.5636748906987137) {
                    classes[0] = 96; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 2; 
                }
            } else {
                if (features[0] <= 4.295316688388268) {
                    classes[0] = 39; 
                    classes[1] = 12; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 9; 
                }
            }
        } else {
            if (features[30] <= 2.545873678077885) {
                if (features[68] <= 2.7389449895075266) {
                    classes[0] = 5; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 2; 
                }
            } else {
                if (features[5] <= 4.369881570045781) {
                    classes[0] = 12; 
                    classes[1] = 20; 
                } else {
                    classes[0] = 2; 
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
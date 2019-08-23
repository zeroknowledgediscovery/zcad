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
        
        if (features[184] <= 2.3292952279231023) {
            if (features[111] <= 4.735117429744041) {
                if (features[47] <= 2.4431355364821554) {
                    classes[0] = 100; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 34; 
                    classes[1] = 11; 
                }
            } else {
                if (features[8] <= 3.5706903485444794) {
                    classes[0] = 0; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 0; 
                }
            }
        } else {
            if (features[168] <= 2.3714366766491146) {
                if (features[145] <= 1.2142935619756083) {
                    classes[0] = 1; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 4; 
                }
            } else {
                if (features[126] <= 3.614921266965066) {
                    classes[0] = 10; 
                    classes[1] = 16; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 29; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[95] <= 2.7955296364592064) {
            if (features[169] <= 1.81909590252633) {
                if (features[92] <= 3.7666199653253982) {
                    classes[0] = 67; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 1; 
                }
            } else {
                if (features[176] <= 1.468951583127003) {
                    classes[0] = 17; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 31; 
                    classes[1] = 14; 
                }
            }
        } else {
            if (features[16] <= 2.0104510937866062) {
                if (features[120] <= 2.8836903580854134) {
                    classes[0] = 15; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 3; 
                }
            } else {
                if (features[110] <= 3.7388541692583144) {
                    classes[0] = 17; 
                    classes[1] = 12; 
                } else {
                    classes[0] = 10; 
                    classes[1] = 33; 
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
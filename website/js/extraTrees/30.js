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
        
        if (features[170] <= 2.4390677038762103) {
            if (features[14] <= 2.057390992090754) {
                if (features[152] <= 3.2664329583134655) {
                    classes[0] = 99; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 1; 
                }
            } else {
                if (features[169] <= 2.4393863628801826) {
                    classes[0] = 17; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 10; 
                    classes[1] = 7; 
                }
            }
        } else {
            if (features[75] <= 3.6344784845758595) {
                if (features[98] <= 2.299053983436457) {
                    classes[0] = 11; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 16; 
                }
            } else {
                if (features[176] <= 2.2542218837208217) {
                    classes[0] = 5; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 32; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[170] <= 1.7144990068462207) {
            if (features[14] <= 1.190492393537654) {
                classes[0] = 62; 
                classes[1] = 0; 
            } else {
                if (features[22] <= 4.9317277837226765) {
                    classes[0] = 27; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[75] <= 3.8829356855167707) {
                if (features[88] <= 2.3542777622837003) {
                    classes[0] = 39; 
                    classes[1] = 14; 
                } else {
                    classes[0] = 16; 
                    classes[1] = 13; 
                }
            } else {
                if (features[172] <= 3.2667438137655815) {
                    classes[0] = 10; 
                    classes[1] = 13; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 22; 
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
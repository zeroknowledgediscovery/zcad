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
        
        if (features[146] <= 1.344117345448638) {
            if (features[58] <= 4.119752272553626) {
                classes[0] = 67; 
                classes[1] = 0; 
            } else {
                classes[0] = 0; 
                classes[1] = 1; 
            }
        } else {
            if (features[180] <= 2.8113355947711205) {
                if (features[186] <= 2.150312998867739) {
                    classes[0] = 54; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 16; 
                    classes[1] = 14; 
                }
            } else {
                if (features[143] <= 3.403199138307571) {
                    classes[0] = 23; 
                    classes[1] = 21; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 22; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[194] <= 2.317065545039748) {
            if (features[106] <= 3.1578078754981087) {
                if (features[162] <= 3.6132025451460863) {
                    classes[0] = 121; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 3; 
                }
            } else {
                if (features[171] <= 2.4157401348537486) {
                    classes[0] = 8; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[184] <= 2.3502103171079467) {
                if (features[181] <= 2.15151396633662) {
                    classes[0] = 13; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 4; 
                }
            } else {
                if (features[126] <= 2.1140454719374167) {
                    classes[0] = 5; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 38; 
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
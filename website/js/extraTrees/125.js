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
        
        if (features[157] <= 2.2706520134912114) {
            if (features[148] <= 3.425450536620547) {
                if (features[5] <= 1.097387686417153) {
                    classes[0] = 42; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 85; 
                    classes[1] = 16; 
                }
            } else {
                if (features[8] <= 4.070662301532302) {
                    classes[0] = 0; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 0; 
                }
            }
        } else {
            if (features[77] <= 3.2320058747343747) {
                if (features[199] <= 3.5639290486294444) {
                    classes[0] = 18; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 11; 
                }
            } else {
                if (features[18] <= 2.403902637960344) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 32; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[172] <= 2.5378564007290905) {
            if (features[143] <= 2.6033785737135346) {
                if (features[2] <= 1.6166439264158923) {
                    classes[0] = 50; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 48; 
                    classes[1] = 6; 
                }
            } else {
                if (features[48] <= 2.0521212271657405) {
                    classes[0] = 13; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 21; 
                    classes[1] = 13; 
                }
            }
        } else {
            if (features[77] <= 3.5181994817770086) {
                if (features[14] <= 3.407707925144447) {
                    classes[0] = 16; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 10; 
                }
            } else {
                if (features[147] <= 4.633376154412225) {
                    classes[0] = 7; 
                    classes[1] = 14; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 15; 
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
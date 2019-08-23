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
        
        if (features[134] <= 2.1595540052091486) {
            if (features[127] <= 3.0393079007227475) {
                if (features[135] <= 3.5201204058342244) {
                    classes[0] = 121; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 2; 
                }
            } else {
                if (features[132] <= 3.091663700571127) {
                    classes[0] = 0; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 0; 
                }
            }
        } else {
            if (features[195] <= 3.5654852607126744) {
                if (features[172] <= 1.623783346556026) {
                    classes[0] = 9; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 21; 
                    classes[1] = 21; 
                }
            } else {
                if (features[16] <= 4.65545558075209) {
                    classes[0] = 4; 
                    classes[1] = 22; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 6; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[192] <= 2.9150008661276665) {
            if (features[70] <= 2.1517923181652057) {
                if (features[196] <= 1.0108018228834503) {
                    classes[0] = 61; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 46; 
                    classes[1] = 8; 
                }
            } else {
                if (features[110] <= 3.017276243314741) {
                    classes[0] = 25; 
                    classes[1] = 7; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 9; 
                }
            }
        } else {
            if (features[94] <= 2.1961937035416224) {
                if (features[90] <= 3.0844063018841696) {
                    classes[0] = 6; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 1; 
                }
            } else {
                if (features[55] <= 2.571230619480475) {
                    classes[0] = 12; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 29; 
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
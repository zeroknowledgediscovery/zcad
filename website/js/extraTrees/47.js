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
        
        if (features[35] <= 2.4897952710696476) {
            if (features[156] <= 4.4150823556888295) {
                if (features[100] <= 3.932296150798116) {
                    classes[0] = 82; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 4; 
                }
            } else {
                classes[0] = 0; 
                classes[1] = 1; 
            }
        } else {
            if (features[81] <= 2.146058206048821) {
                if (features[63] <= 1.832058541864184) {
                    classes[0] = 36; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 3; 
                }
            } else {
                if (features[100] <= 4.68567498944964) {
                    classes[0] = 34; 
                    classes[1] = 29; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 17; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[195] <= 2.9889221871220144) {
            if (features[137] <= 3.1535137748129265) {
                if (features[23] <= 1.2926212434156896) {
                    classes[0] = 45; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 94; 
                    classes[1] = 12; 
                }
            } else {
                if (features[130] <= 2.1965014334751767) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 4; 
                }
            }
        } else {
            if (features[183] <= 2.7592898317423136) {
                if (features[69] <= 3.0226812781871675) {
                    classes[0] = 11; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 6; 
                }
            } else {
                if (features[177] <= 1.4606537215694104) {
                    classes[0] = 2; 
                    classes[1] = 1; 
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
// var segment = [0,10,.7]
HEIGHT = app.activeDocument.height;
START = 0; // This can change in the future, in case we want to adjust the height.
RATIO = prompt("What ratio do you want? (less than 1, enter like \".7\" for example)");
var segment = [START, HEIGHT, RATIO];

function display(input) {
    var seg = [segment[0],segment[1]];
    ratio = segment[2];

    for (var i = 0; i < input; i++) {
        var segIterations = seg.length - 1;
        for (var j = 0; j < segIterations; ++j) {
            var start = seg[j];
            var end = seg[j + 1];
            seg.splice(j + 1, 0, start+((end-start)*(1-ratio)), start+(end-start)*ratio);
        }
    }
    return seg;
}

function addGuideLines(position) {
    activeDocument.guides.add(Direction.HORIZONTAL, new UnitValue(position,position));
}


// "main" method.
var input = prompt("How many subdivisions do you want? (an integer)");
var subdivisions = display(input);

for (var i = 0; i < subdivisions.length; ++i) {
    activeDocument.suspendHistory("test", "addGuideLines(subdivisions[i]);");
}

activeDocument.suspendHistory("test", "displayLines();");

// So, the docs are terribly written, but essentially this suspends the current history. The "test"
// value is temporary, essentialy that is just a name for what the history state is. The javaScriptString
// (2nd arg) executes upon calling of the script. All the actions of the scripts are now considered a
// history state.
// It's a bit weird however in the sense that we can't "redo" the previous action. This also is a bit janky,
// because if we have a large/important script that we call, we essentially undo ALL of that. However, that
// might be okay since the script isn't too big.

// For some reason, arrow functions are not supported??
function displayLines() {
    // Prompt works in photoshop as well, makes a little dialogue box.
    var value = prompt("What are the dimensions of the document?");
    activeDocument.guides.add(Direction.HORIZONTAL, new UnitValue(20,20));
    activeDocument.guides.add(Direction.VERTICAL, new UnitValue(20,20));
    function temp() {
        activeDocument.guides.add(Direction.VERTICAL, new UnitValue(50,50));
        activeDocument.guides.add(Direction.VERTICAL, new UnitValue(100,100));
    }
    temp();
};

// Variant sizes, access height + width of document using Photoshop library
// Coordinate system in upper left @ 0,0
// visualizing differential equations given
// ode int - look into this python library and see if visualization

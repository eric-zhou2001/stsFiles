// Testing purposes
var secondSd = [
	0.145924,
	0.236076,
	0.382,
	0.472152,
	0.527848,
	0.618,
	0.763924,
	0.8540760000000001,
	1
  ];

// window setup

var currentStatus = app.activeDocument.activeHistoryState;

var window = new Window("dialog","Subdivider",undefined);
window.orientation = "column";
var mainButtonsGroup = window.add("group",undefined,"");


// group definitions and ordering
mainButtonsGroup.orientation = "row"
var sliderLabelGroup = mainButtonsGroup.add("group",undefined,"");
sliderLabelGroup.orientation = "column"
var sliderButtonGroup = mainButtonsGroup.add("group",undefined,"");
sliderButtonGroup.orientation = "column"
var sliderCounterGroup = mainButtonsGroup.add("group",undefined,"");
sliderCounterGroup.orientation = "column"
var exitButtonGroup = window.add("group",undefined,"");
exitButtonGroup.orientation = "column"


// slider buttons grouping
var slider1 = sliderButtonGroup.add("slider",undefined,"");
slider1.preferredSize.width = 125;
slider1.minvalue = 0;
slider1.maxvalue = 10;
slider1.value = 1;
var slider2 = sliderButtonGroup.add("slider",undefined,"");
slider2.preferredSize.width = 125;
slider2.minvalue = 0;
slider2.maxvalue = 10;
slider2.value = 1;


// slider labels grouping
var slider1Label = sliderLabelGroup.add("statictext",undefined,"Horizontal");
slider1Label.characters = 4
var slider2Label = sliderLabelGroup.add("statictext",undefined,"Vertical");
slider2Label.characters = 4


// slider counters grouping
var slider1Counter = sliderCounterGroup.add("statictext",undefined,"1")
var slider1Array = [];
slider1.onChange = function() {
	slider1Counter.text = slider1.value.toFixed()
	for (var n1 = 1; n1 < 10; ++n1) {
		// Height for horizontal
		app.activeDocument.guides.add(Direction.HORIZONTAL,secondSd[n1]*app.activeDocument.height);
	}
}

var slider2Counter = sliderCounterGroup.add("statictext",undefined,"1")
var slider2Array = [];
slider2.onChange = function() {
	slider2Counter.text = slider2.value.toFixed();
	for (var n2 = 0; n2 < secondSd.length; ++n2){
		// width for vertical
		app.activeDocument.guides.add(Direction.VERTICAL,secondSd[n2]*app.activeDocument.width);
	}
}


//exit button

var exitButton = exitButtonGroup.add("button",undefined,"Exit Script");

exitButton.onClick = function close(){
  window.close();
}

if (window !== null && window instanceof Window){
window.center();
window.show();
}


timeline = [];

/**
 * Consider changing not to timeline variables but to somethign else. Timeline
 * variables forces the experiment to go through everything. This might be good for
 * cues, but not for targets where we only want one target displayed.
 */
var target = {
  type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('target'),
  choices: [37, 39],
  randomize_order: true,
  on_finish: function(data) {
    // find a way to make this different, depending on left/right.
    console.log("image displayed: " + jsPsych.timelineVariable('target',true));
    var photo = jsPsych.timelineVariable('target',true);
    var correctDirection = 0;

    // Checks the photo to determine what arrow key is necessary.
    if (photo == "./img/left_button.jpg") {
        correctDecision = 37;
    } else {
        correctDecision = 39;
    }

    // Sets data to correct/incorrect depending on user choice.
    console.log(data);
    if (data.key_press == correctDecision) {
      console.log("Correct decision. Setting data to be true.");
      data.correct = true;
    } else {
      console.log("Incorrect decision. Setting data to be false.");
      data.correct = false;
    }
  }
}

// Will be set to true after trial runs.
var trial_finished_target = false;
var target_node = {
    timeline: [target],
    timeline_variables: [
        {target: "./img/left_button.jpg"},
        {target: "./img/right_button.jpg"}
    ],
    conditional_function: () => {
      if (trial_finished_target) {
        console.log("Trial has finished.");
        trial_finished_target = false;
        return false;
      } else {
        console.log("Trial has not occured yet.");
        trial_finished_target = true;
        return true;
      }
    }
}   

var fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: function(){
    return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
  },
  data: {test_part: 'fixation'}
};

// If given animal (dolphin), press cue
//  if wrong button --> lose feedback
//  if correct button --> win feedback

var feedback_node = {
  timeline: [fixation],
  conditional_function: function() {
    // .last gets the last 2 results (target, fixation). [0] returns the 
    // target, which we need to access the result of.
    var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
    var random = Math.random() * 10; // Check the exact chance. 
    console.log(random);
    if (random < 8) {
      // Randomization to see if to display feedback.
      if (last_trial_correct) {
        console.log("Adding to timeline.");
        var feedback = {
          type: "image-keyboard-response",
          stimulus: "./thumb_up.png",
          choices: jsPsych.NO_KEYS,
          trial_duration: 1000
        };
        timeline.push(feedback);
      } else {
        var feedback = {
          type: "image-keyboard-response",
          stimulus: "./thumbs_down.png",
          choices: jsPsych.NO_KEYS,
          trial_duration: 1000
        };
        timeline.push(feedback);
      }
    } else {
      console.log("not adding to timeline. 20%");
    }
    return true;
  }
}

timeline.push(target_node,feedback_node);

jsPsych.init({
    timeline: timeline,
    on_finish: function() {
        jsPsych.data.displayData();
    }
});
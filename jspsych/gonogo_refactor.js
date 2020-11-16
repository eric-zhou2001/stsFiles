timeline = [];

/**
 * Fixation node. For users to focus on before the next part of
 * the trial.
 */
var fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: function(){
    return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
  },
  data: {test_part: 'fixation'}
};

/**
 * Cue trial. 
 * 
 * Will reach into cue_node and get the timeline variables
 * titled cues. These will vary and can vary depending on what the
 * tester wants to implement.
 * 
 * Cue_node ensures that it will be a random cue, but also that only
 * one cue is displayed. This can be varied as well if necessary.
 */
var cue = {
  type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('cue'),
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000
}

var trial_finished_cue = false;
var cue_node = {
  timeline: [cue, fixation],
  randomize_order: true,
  timeline_variables: [
    {cue: "img/dolphin.jpg"},
    {cue: "img/camel.jpg"},
    {cue: "img/chicken.jpg"},
    {cue: "img/bear.jpg"}
  ],
  conditional_function: () => {
    if (trial_finished_cue) {
      console.log("Trial has finished.");
      trial_finished_cue = false;
      return false;
    } else {
      console.log("Trial has not occured yet.");
      trial_finished_cue = true;
      return true;
    }
  }
}

/**
 * Target information. 
 * 
 * Very similar to the cue information. This time, the target is
 * randomized and the user needs to press the left or right arrow
 * depending on the target value. If the user answers it correctly,
 * the data is set to correct. Otherwise, the data is set to false.
 */
var target = {
  type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('target'),
  choices: [37, 39],
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

var trial_finished_target = false;
var target_node = {
    timeline: [target],
    randomize_order: true,
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

/**
 * Feedback information. 
 * 
 * Checks the user response, and will return true/false depending
 * on that. Another interesting parameter: only 80% of the time will the
 * feedback be displayed. Not a perfect 80% catch rate, but very close.
 */
var correct_feedback = {
  type: "image-keyboard-response",
  stimulus: "./img/thumb_up.png",
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000
};


var feedback_correct_node = {
  timeline: [fixation, correct_feedback],
  conditional_function: function() {
    // .last gets the last 2 results (target, fixation). [0] returns the 
    // target, which we need to access the result of.
    var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
    var random = Math.random(); 
    while (random < 1) {
      random = Math.random() * 10; // Check the exact chance.
    }
    console.log(random);
    if (random < 8 && last_trial_correct) {
        console.log("Adding to timeline. Correct node");
        return true;
    } else {
      console.log("not adding to timeline. 20%, or incorrect.");
      return false;
    }
  }
}

var incorrect_feedback = {
  type: "image-keyboard-response",
  stimulus: "./img/thumbs_down.png",
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000
};

var feedback_incorrect_node = {
  timeline: [fixation, incorrect_feedback],
  conditional_function: function() {
    // .last gets the last 2 results (target, fixation). [0] returns the 
    // target, which we need to access the result of.
    var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
    var random = Math.random(); 
    while (random < 1) {
      random = Math.random() * 10; // Check the exact chance.
    }
    console.log(random);
    if (last_trial_correct === undefined || last_trial_correct) {
      console.log("Previous trial was correct. Don't display the incorrect node.");
      return false;
    } else if (random < 8) {
      console.log("display the feedback for incorrect choice.");
      return true;
    } else {
      console.log("20%, do not display.");
      return false;
    }
  }
}

/**
 * Procedure variable. Change the repetitions depending on the choice
 * of the adminstrator of the test.
 */
var procedure = {
  timeline: [cue_node, target_node, feedback_correct_node, feedback_incorrect_node],
  repetitions: 2,
}

timeline.push(procedure);

jsPsych.init({
    timeline: timeline,
    on_finish: function() {
        jsPsych.data.displayData();
    }
});
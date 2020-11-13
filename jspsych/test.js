var timeline = [];

var welcome = {
    type: 'html-keyboard-response',
    stimulus: 'Welcome to the experiment. Press any key to begin.'
};

timeline.push(welcome);

var yn_trial = {
    type: 'html-keyboard-response',
    stimulus: "<p>Press N, don't press Y</p>",
    choices: [89, 78], // y/n
    on_finish: function (data) {
        if (data.key_press == 78) {
            data.correct = true;
            console.log("Pressed n.");
            
        } else {
            data.correct = false;
            console.log("pressed Y");
        }
    },
};

var feedback = {
    type: 'image-keyboard-response',
    stimulus: jsPsych.timelineVariable('img'),
};

var color_timeline = [
    { img: "./blue.png" },
    { img: "./orange.png" },
];

// This is exactly what we are god damn looking for!!
var feedback_node = {
    timeline: [feedback],
    conditional_function: function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        var random = Math.random() * 10; // Check the exact chance. 
        console.log(random);
        if (last_trial_correct && random < 8) {
            return true;
        } else {
            return false;
        }
    },
    timeline_variables: color_timeline,
    randomize_order: true
}

var after_if_trial = {
    type: 'html-keyboard-response',
    stimulus: 'This is the trial after the conditional.'
}

timeline.push(yn_trial, feedback_node, after_if_trial);

// var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
// var random = Math.random() * 10; // Check the exact chance. 
// console.log(random);
// if (last_trial_correct && random < 8) {
//     var feedback = {
//         type: 'image-keyboard-response',
//         stimulus: "",
//     };
//     timeline.push(feedback);
// }



// var feedback = {
//     type: "html-keyboard-response",
//     stimulus: function () {
//         var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
//         var random = Math.random() * 10; // Check the exact chance. 
//         console.log(random);
//         if (last_trial_correct && random < 8) {
//             return "<p>Correct!</p>"
//         } else {
//             return "<p>Wrong.</p>"
//         }
//     }
// }

// Arrow example below (37 for left, 39 for right. JavaScipit)
// var yn_trial = {
//     type: 'html-keyboard-response',
//     stimulus: "<p>Press left arrow key, don't press right arrow key</p>",
//     choices: [37, 39], // <-- 37, --> 39
//     on_finish: function(data) {
//         if (data.key_press == 37) {
//             data.correct = true;
//             console.log("Pressed left arrow.");
//         } else {
//             data.correct = false;
//             console.log("pressed right arrow");
//         }
//     },
// };

// var feedback = {
//     type: "html-keyboard-response",
//     stimulus: function () {
//         var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
//         var random = Math.random() * 10; // Check the exact chance.
//         console.log(random);
//         if (last_trial_correct && random < 8) {
//             return "<p>Correct!</p>"
//         } else {
//             return "<p>Wrong.</p>"
//         }
//     }
// }


jsPsych.init({
    timeline: timeline,
    on_finish: function() {
        jsPsych.data.displayData();
    }
});
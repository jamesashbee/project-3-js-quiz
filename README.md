# project-3-js-quiz
quiz game, created with js, html and css

@ This Project has been done using

  -html

  -SCSS to make CSS (files styles.scss and _variables.scss)

  -vanilla javascript with the following functions
    document.querySelector
    Arrays of Arrays
    document.getElementById to add / remove / update CSS
    Arrow Functions =>
    if / else tests
    Click Event Listeners
    for each loops

  -This Project has media queries so it will style to work on mobile, tablet and desktop monitors


  @ The PSEUDOCODE logic includes:

  On Load
    Populate Blank Scoreboard
    Show Start Button
    Hide Reset Button

  On Start Button Hit
    Increment Question Number Counter
    Popualte Question Text from Array
    Popualte 4 Possible Answers from Array  
    Update html of image location
    Store in Variable Right Answer
    Hide the Start Button and Show the Reset Button

  On Answering First (and Subsequent Questions)
      Check if button click ID is the same as the variable stored right Answer
          
          If the Right Answer
              Update the Scoreboard
              Highlight the correctly pressed answer button in Green
              Move to the Next Question

          Else The wrong Answer
              Highlight the Wrongly pressed answer button in red
              Update the Scoreboard to Game Over
          
  On Answering the Last Question Correctly
      Update the Scoreboard to You have Completed the Quiz
      Show the Trophy image

  On Reset Button Pressed
    Reset Question Count number to 0
    Reset Answer Button text
    Display on Scoreboard that Reset has been pressed
    Show Quiz Start Image
    Hide the Reset Button and Show the Start Button


@ V1 Fixes Needed
More Questions + Graphics

Start and Reset Button in Same Location (bottom Right)


@ V2
Have Next Question Button - Lock in Answer and Highlight Red or Green if Correct

Better way to show images on Mobile

@V3
Question Categories
Multi Player
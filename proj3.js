function gradeCalc() {
    // start total grade at 0, and add onto it later
    let totalGrade = 0;
    // assume 0 classes were entered, and add to counter as classes are calculated
    let gradesCalculated = 0;
    // initialize the 5 grades
    let grade1, grade2, grade3, grade4, grade5;
    // assume the gpa will be outputted
    let outputGPA = true;
    // get the grade inputs from the html
    grade1 = document.getElementById("class1").value;
    grade2 = document.getElementById("class2").value;
    grade3 = document.getElementById("class3").value;
    grade4 = document.getElementById("class4").value;
    grade5 = document.getElementById("class5").value;
    // put grades into an array for easier parsing
    let grades = [grade1, grade2, grade3, grade4, grade5];
    // iterate through each grade
    for (let i = 0; i < 5; i++) {
        // log the grade value for debugging
        console.log("Grade " + i + " = " + grades[i]);
        // check the user has inputted a grade letter
        if (grades[i] == "A" || grades[i] ==  "a" || grades[i] ==  "B" || grades[i] ==  "b" || grades[i] ==  "C" || grades[i] ==  "c" || grades[i] ==  "D" || grades[i] ==  "d" || grades[i] ==  "F" || grades[i] ==  "f") {
            console.log("Matches");
            // add class to total grades calculated
            gradesCalculated++;
            // check which grade user inputted and add GPA value to total grade
            switch (grades[i]) {
                case "A":
                case "a":
                    totalGrade += 4;
                    break;
                case "B":
                case "b":
                    totalGrade += 3;
                    break;
                case "C":
                case "c":
                    totalGrade += 2;
                    break;
                case "D":
                case "d":
                    totalGrade += 1;
                    break;
                case "F":
                case "f":
                    totalGrade += 0;
                    break;
            }
        }
        // if user inputted numerical grades, remind them to use letter grades instead. Test input using regex
        else if (/^[0-9]+$/.test(grades[i])) {
            console.log("Grade " + i + " is numerical");
            document.getElementById("gradeCalcOutput").innerHTML = "Input letter grades, not numerical grades";
            // don't output gpa since error message will be displayed
            outputGPA = false;
        }
        // in case other text is inputted, display an error message
        else {
            // check if grade is blank and should be skipped over
            if (grades[i] !== ''){
                // log that it is not blank, but still has bad input
                console.log("Grade " + i + " is not blank");
                // display an error message
                document.getElementById("gradeCalcOutput").innerHTML = "Only letter grades can be used. Eg. A, B, C, D, or F.";
                outputGPA = false;
            }
        }
    }
    // calculate GPA
    let GPA = totalGrade / gradesCalculated;
    if (gradesCalculated == 0) {
        document.getElementById("gradeCalcOutput").innerHTML = "Input grades before computing GPA";
        outputGPA = false;
    }
    if (outputGPA){
        // show a message with the users GPA
        document.getElementById("gradeCalcOutput").innerHTML = "Your GPA is " + GPA;
    }
}
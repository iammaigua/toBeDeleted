// interactions

function askInitialQuestions(){
    // asks basic questions and displays input
    let name = prompt('How should I call you ? ','isaac');
    let age = Number(prompt('How old are you ?',18));

    function confirmation(){
        let qnForName = confirm(`Are you sure your name is ${name}`);
        let qnForAge = confirm(`Are you sure your ${age}yrs old`);

        if(qnForAge == true && qnForName == true ){
            alert('cool we\'ve saved the changes')
        } else{
            askInitialQuestions();
        }
    }
    confirmation();

}
askInitialQuestions();
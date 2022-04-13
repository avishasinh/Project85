var studentArray = []
function submit() {
    document.getElementById("submitButton").style.display="none"
    document.getElementById("sortButton").style.display= "inline-block"
    for (var i = 1; i <= 4; i++) {
        var name = document.getElementById("student" + i).value
        studentArray.push(name)
    }
    var displayArray = []
    for (var d = 0; d < studentArray.length; d++) {
        console.log(studentArray[d])
        displayArray.push("<h4>name-" + studentArray[d] + "</h4>")
    }
    document.getElementById("displayNamesWithComma").innerHTML = displayArray
    var remove_commas= displayArray.join(" ")
    document.getElementById("displayNameWithoutComma").innerHTML = remove_commas
}
function sort(){
    studentArray.sort()
    var displayArraySorted=[]
    for(var s =0; s < studentArray.length; s++){
        displayArraySorted.push("<h4>name-"+studentArray[s]+"</h4>")
    }
    document.getElementById("displayNamesWithComma").innerHTML= displayArraySorted
    var remove_commas= displayArraySorted.join(" ")
    document.getElementById("displayNameWithoutComma").innerHTML = remove_commas
}
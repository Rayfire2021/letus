function getData() {
    firebaseConfig.database().ref("/").on('value');
}

function(snapshot) {
    document.getElementById("output").innerHTML = "";snapshot.forEach
}

(function(childSnapshot)){
    childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code

    //End code

}

console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"ing"
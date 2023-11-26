

function getData(){    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
        success: function(data) {
            console.log(data);

        },
        error: function(error) {
            console.log("Error fetching data:", error);
        }
    });

}


function postingData(){    
    var newPost = {
        title: "New Post",
        body:"This is the body of Post"
    };


    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(newPost),
        success: function(data) {
            console.log("Post successfully created :", data);
        },
        error: function(error) {
            console.log("Some error in creating new Post:", error);
        }
    });
}


function updateData(){
    var updatedPost = {
        title: "Updated Post",
        body:"Updated Post body is here."
    };

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/3",    //updating post at id 3
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(updatedPost),
        success: function(data) {
            console.log("Post successfully updated:", data);
        },
        error: function(error) {
            console.log("Some error in updating Post:", error);
        }
    });
}

//Delete Data

function deleteData(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",   //deleting post at id 1
        method: "DELETE",
        success: function(data) {
            console.log("Post successfully deleted:", data);
        },
        error: function(error) {
            console.log("Some error in deleting Post:", error);
        }
    });

}

getData();
postingData();
updateData()
deleteData();


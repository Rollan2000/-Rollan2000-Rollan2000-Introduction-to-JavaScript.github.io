




window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });


    var Studentname = prompt("What is your name?"); //Your Full Name (Optional)
    console.log("Greetings, " + Studentname); 
    alert('Greetings! Joshua Rollan Aala');

    

   


    var currentYear = new Date().getFullYear();   // Your year of birth
    var birthYear = prompt("What is your birth year?");
    var age = currentYear - birthYear;
    console.log("I am " + age + " years old.");
    alert("You are 22 years old");
    alert("Hello and Welcome to Joshua's Portfolio");






    document.getElementById("learnMoreButton").addEventListener("click", function(){   // A “learn more” button, when clicked, shows a paragraph of texts.
        document.getElementById("Text").style.display = "block";
              
    });

    document.getElementById("button1").addEventListener("click", function() { // A “view more” button, when clicked, shows a my Profile picture .
        document.getElementById("textButton1").style.display = "block";
    });
      
    document.getElementById("button2").addEventListener("click", function() { // A “view more” button, when clicked, shows a my high school Picture .
        document.getElementById("textButton1").style.display = "block";
        document.getElementById("textButton2").style.display = "block";
    });

    document.getElementById("button3").addEventListener("click", function() { // A “view more” button, when clicked, shows a UX/UI designer Picture .
        document.getElementById("textButton1").style.display = "block";
        document.getElementById("textButton3").style.display = "block";
        
    });

    document.getElementById("button4").addEventListener("click", function() { // A “view more” button, when clicked, shows a video editor Picture .
        document.getElementById("textButton1").style.display = "block";
        document.getElementById("textButton4").style.display = "block";
        
    });

    document.getElementById("button5").addEventListener("click", function() { // A “view more” button, when clicked, shows a Logo/icon designer picture.
        document.getElementById("textButton5").style.display = "block";
        
    });

    document.getElementById("button6").addEventListener("click", function() { // A “view more” button, when clicked, shows a Photography Editor picture.
        document.getElementById("textButton5").style.display = "block";
        document.getElementById("textButton6").style.display = "block";
        
    });






//A profile picture, when hovered, changes to an alternate one.


    var profilePicture = document.getElementById("profilePicture"); // Get the profile picture element

    var alternateImage = "images/Profile Picture.Jpeg";    // Set the alternate image source


    profilePicture.onmouseover = function() {     // Change the image source on hover
    profilePicture.src = alternateImage;
    };

  
    profilePicture.onmouseout = function() {       // Change the image back on mouse out
    profilePicture.src = "images/Profile Picture 2.jpeg";
    };


    window.addEventListener("load", (event) => { //Log a message when the page is fully loaded:
        console.log("page is fully loaded");
      });
    
    
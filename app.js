// Init Github
const github = new Github();

// Search Input
const searchUser = document.getElementById("searchUser");

// Search Input Event Listner
searchUser.addEventListener("keyup", (e) => {
  // Get Input Text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      console.log(data);
    });
  }
});

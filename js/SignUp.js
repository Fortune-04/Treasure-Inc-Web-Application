// toggle company info input
function selectUser(User){
    if(User=="Organiser"){
      $("#OrganiserAdditionalInfo").slideDown("slow");
    } else {
      $("#OrganiserAdditionalInfo").slideUp("slow");
    }
}
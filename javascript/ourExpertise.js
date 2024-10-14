// our expertise

let expertisePopupContainer = document.getElementsByClassName("expertisePopupContainer")[0];
let expertisePopupContentElement = document.getElementById("expertisePopupContent");
let navBar = document.getElementById("header");

function viewProject(e) {
  
  expertisePopupContainer.style.setProperty("display", "block", "important");
  expertisePopupContentElement.innerHTML = e.parentElement.parentElement.getElementsByClassName("expertisePopup")[0].innerHTML;
  navBar.style.display='none';
  // disable the vertical scroll of background body when popup open
  document.body.classList.add("stop-body-scrolling");
}

function expertisePopupClose() {
  expertisePopupContainer.style.display = "none";

  // enable the vertical scroll of background body when popup close
  document.body.classList.remove("stop-body-scrolling");
  navBar.style.display='block';
}




// 2) to download the detail pdf from our expertise
function expertiseDownload(file){

  if(file==='leadershipDevelopment'){
const link = document.createElement('a');
link.href = 'privateFiles/LEADERSHIP-DEVELOPMENT.pdf'; 
link.download = 'privateFiles/LEADERSHIP-DEVELOPMENT.pdf'; 
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

  }else if(file==='team-Development'){
    const link = document.createElement('a');
    link.href = 'privateFiles/top-team.pdf'; 
    link.download = 'privateFiles/top-team.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

      } else if(file==='cultureBuilding'){
        const link = document.createElement('a');
        link.href = 'privateFiles/Driving-Change.pdf'; 
        link.download = 'privateFiles/Driving-Change.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

          } else if(file==='oneOnOne'){
            const link = document.createElement('a');
            link.href = 'privateFiles/oneOnOne.pdf'; 
            link.download = 'privateFiles/oneOnOne.pdf'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

              }
  
}





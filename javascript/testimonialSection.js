

// Testimonial///////////////////////////////

const messageData = [

  
  { count:0,
    messageHeading:"Effective at helping the business leaders achieve desired outcomes",
    message:"Successful organizational design and development outcomes require intricate internal navigation and a fine balance of using multiple of approaches ranging from the large scale structured interventions to intense personal conversations. The uniqueness of ODA is that they have managed to achieve this through their engagement with IDFC in last one year! They straddle this full range and that, makes them not only more efficient (one doesn't need to go to multiple organizations) but incredibly more effective at helping the business leaders achieve desired outcomes. I have worked with Santhosh at length and his ability to synthesise the different strands, spot patterns and “suggest, way forward is truly syncretic and often magical!",
    imageSource:"../Resources/t1.png",
    personName:"ANIMESH KUMAR",
    aboutPerson:"Head- HR, Brand Foundation, IDFC Bank",
  },
  { count:1,
    messageHeading:"Simplicity of delivery, insightful anecdotes and expertise in human behaviour",
    message:"Refreshing Mission Vision and Values for an organization can be a fairly energizing and unifying experience, if handled deftly. This is exactly how it turned out for us when Santhosh Babu facilitated this initiative with our top leadership team. Santhosh has this unique style of connecting with the audience by understanding the organization environment, and key business drivers. His simplicity of delivery, insightful anecdotes and expertise in human behaviour make him a good choice to facilitate large scale critical people intervention. He has demonstrated this skill several times. Besides helping Max Life team refresh its Vision Mission Values, he has also effectively facilitated multiple Max Group level Leadership meets. Santhosh has been a great partner and we wish him and OD Alternatives all the best!",
    imageSource:"../Resources/t2.png",
    personName:"RAJESH SUD",
    aboutPerson:"Managing Director, Max Life Insurance Co. Ltd, Max Bupa Health Insurance Co. Ltd"
  },
  { count:2,
    messageHeading:"ODA understand complex organizational contexts",
    message:"I have worked with ODA in multiple occasions in the last five years. Facilitating our strategy meet, help our teams manage change, support our leaders through change and building team effectiveness are some of the ares we worked with ODA team. What strikes me is their ability to understand complex organisational contexts along with individual contexts of leaders and design interventions that are innovative, impactful and transformational. There is a personal touch, customized approach and con-ceptual rigor in what ever they do. Driving change and Transformational leadership is something in the core DNA of ODA.",
    imageSource:"../Resources/t3.png",
    personName:"RAMESH K DAHIYA",
    aboutPerson:"Executive Director (Corporate Centre), Axis Bank Ltd"
  },
  { count:3,
    messageHeading:"ODA's deep understanding of people",
    message:"OD Alternatives' deep understanding of people, their behavior, the culture they create in organizations and the essence of leadership traits become visible in anyone's first interaction with any of the ODA consultants. They bring out their insights in Organizational Development and transformation of organizational culture through an extremely creative style of presentation and interaction with their audience. They do not get people lost in the functional jargon of the subjects, instead stick to the 'real' world. Engaging with the ODA Team is a sure guarantee to generate fresh internal high energy and a renewed sense of purpose for any human being!",
    imageSource:"../Resources/t4.png",
    personName:"RAJU RAJENDRAN",
    aboutPerson:"Jt. Managing Director, NIIT Ltd"
  },
  { count:4,
    messageHeading:"How ODA strengthened team Ranbaxy at a very critical time",
    message:"Around the time when adversity had hit Ranbaxy from multiple external directions, engagement with ODA was very powerful catalyst for the employees of Ranbaxy at all cascading levels of leadership, to not only emerge successful in dealing with severe crisis but also stay coherently as one team to grow the business - By helping each leader align their inner purpose with the larger goals of the company, ODA strengthened Team Ranbaxy at a very critical time in its history.",
    imageSource:"../Resources/t5.png",
    personName:"ARUN SAWHNEY",
    aboutPerson:"Managing Director, Ranbaxy"
  },
  { count:5,
    messageHeading:"ODA is a true customer delight",
    message:"ODA is a true customer delight to work with, they go the extra mile in diagnosing the problem, providing in-depth solutions and are continuously involved till they deliver the desired change. I have personally worked with Santhosh and Subin - they bring a very different perspective to every discussion, substantiated with their rich experience in Organisation and Leadership Development. It was a great experience working with them on our Leadership Development Journey for Middle Management, it was so powerfully designed with a unique learning map for every participant. We received great feedback on the program from participants and Leadership sponsors- I highly recommend them for any complex Organization Diagnosis, Leadership Coaching and Development assignments.",
    imageSource:"../Resources/t6.png",
    personName:"SHAVETA AYRA",
    aboutPerson:"HRBP, Microsoft"
  },
  { count:6,
    messageHeading:"ODA connect at a heart level",
    message:"ODA has helped us through the change management journey. For an year we had multiple interventions with ODA to navigate through the ambiguities when we moved from Lafarge to Nuvoco. ODA also partnered with us in evolving our new vision, mission and values. They understand the organization context quickly, connect at a heart level and design interventions that are impact-ful.",
    imageSource:"../Resources/t7.png",
    personName:"Mannisha Kelkar",
    aboutPerson:"Head, Corporate HR, Nuvoco Vistas Corp. Ltd. (Formerly Lafarge India Ltd)"
  }


];

let testimonialPopupImage=0;

const testimonialContainer = document.getElementById('testimonialContainer');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const messageContainer = document.getElementById('messageContainer');

messageData.forEach((data) => {
  const messageBox = document.createElement('div');
  messageBox.classList.add('messageBox');

  const messageHeading = document.createElement('p');
  messageHeading.classList.add('messageHeading');
  messageHeading.textContent = data.messageHeading;

  const message = document.createElement('p');
  message.classList.add('message');
  message.textContent = data.message;

  const messageBy = document.createElement('div');
  messageBy.classList.add('messageBy');

  const img = document.createElement('img');
  img.src = data.imageSource;
  img.alt = 'profile';

  const personDetails = document.createElement('div');
  personDetails.classList.add('personDetails');

  const personName = document.createElement('p');
  personName.classList.add('name');
  personName.textContent = data.personName;

  const aboutPerson = document.createElement('p');
  aboutPerson.classList.add('aboutPerson');
  aboutPerson.textContent = data.aboutPerson;

  personDetails.appendChild(personName);
  personDetails.appendChild(aboutPerson);
  messageBy.appendChild(img);
  messageBy.appendChild(personDetails);

  messageBox.appendChild(messageHeading);
  messageBox.appendChild(message);
  messageBox.appendChild(messageBy);

  testimonialContainer.appendChild(messageBox);
});



let numberOfTestimonial = testimonialContainer.childElementCount;

let slidePage = 2;

let currentIndex = 0;

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Move by 600px for 2 sections
        slidePage-=2;
        if(slidePage===2){
          leftArrow.style.display='none';
         }else{
           leftArrow.style.display='block';
         }
         if(slidePage >= numberOfTestimonial){
          rightArrow.style.display='none';
         }else{
           rightArrow.style.display='block';
         }
      }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < 2) { // Maximum index for 6 sections showing 2 at a time
        currentIndex++;
        slidePage +=2;
        testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Move by 600px for 2 sections
        if(slidePage===2){
           leftArrow.style.display='none';
          }else{
            leftArrow.style.display='block';
          }

          if(slidePage >= numberOfTestimonial){
            rightArrow.style.display='none';
           }else{
             rightArrow.style.display='block';
           }

      }
});

// add read more and ... if the text taking more lines than the required


// 1) for messageHeading

let messageHeading = document.getElementsByClassName('messageHeading');

const maxLengthForMessageHeading = 80;
for(i=0; i<messageHeading.length; i++){
  const fullText = messageHeading[i].textContent;

      // Check if text is longer than the maxLength
      if (fullText.length > maxLengthForMessageHeading) {
        const shortenedText = fullText.substring(0, maxLengthForMessageHeading);
        messageHeading[i].innerHTML = `${shortenedText} ...` ; // Display shortened version   
    }
}

// 2) for message
let message = document.getElementsByClassName('message');

const maxLengthForMessage = 140;
for(i=0; i<message.length; i++){
  const fullText = message[i].textContent;

      // Check if text is longer than the maxLength
      if (fullText.length > maxLengthForMessage) {
        const shortenedText = fullText.substring(0,maxLengthForMessage);
        message[i].innerHTML = `${shortenedText} ... <span class="readmore" onclick="abc()">read more</span>` ; // Display shortened version
      
    }
}

// 3) for aboutPerson
let aboutPerson = document.getElementsByClassName('aboutPerson');

const maxLengthForAboutPerson = 40;
for(i=0; i<aboutPerson.length; i++){
  const fullText = aboutPerson[i].textContent;

      // Check if text is longer than the maxLength
      if (fullText.length > maxLengthForAboutPerson) {
        const shortenedText = fullText.substring(0,maxLengthForAboutPerson);
        aboutPerson[i].innerHTML = `${shortenedText} ...` ; // Display shortened version   
    }
}




// popup of testimonial
const navItems = document.querySelectorAll('.messageBox');

  navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      document.getElementsByClassName('testimonialPopup')[0].style.display="block";

       // disable the vertical scroll of background body when popup open
       document.body.classList.add("stop-body-scrolling");

        navItems.forEach(navItem => {
            navItem.classList.remove('activeTestimonial');
           
        });
        navItem.classList.add('activeTestimonial');
        testimonialPopupImage=navItem.getElementsByClassName('messageBy')[0].getElementsByClassName('personDetails')[0].getElementsByClassName('name')[0].innerText;

        messageData.forEach((data) => { 
          if(data.personName==testimonialPopupImage){
           
// assign all the content in the popup
let testimonialPopupContent= document.getElementsByClassName('testimonialPopup')[0].getElementsByClassName('testimonialPopupContent')[0]
testimonialPopupContent.getElementsByTagName('img')[0].src = data.imageSource;
let testimonialPopupMessageBox = testimonialPopupContent.getElementsByClassName('testimonialPopupMessageBox')[0];
testimonialPopupMessageBox.getElementsByClassName('messageHeading')[0].innerText = data.messageHeading;
testimonialPopupMessageBox.getElementsByClassName('message')[0].innerText = data.message;

testimonialPopupMessageBox.getElementsByClassName('testimonialPopupMessageBy')[0].getElementsByClassName('name')[0].innerText = data.personName;
testimonialPopupMessageBox.getElementsByClassName('testimonialPopupMessageBy')[0].getElementsByClassName('aboutPerson')[0].innerText = data.aboutPerson;
          }
      });
});
  })

function closeTestimonialPopup(){
  document.getElementsByClassName('testimonialPopup')[0].style.display="none";

  // enable the vertical scroll of background body when popup close
  document.body.classList.remove("stop-body-scrolling");
}

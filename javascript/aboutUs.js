
 
  let teamMembers = [
    {
        name: "Santhosh Babu",
        imageSource: "team/1.jpg",
        about: "Founder & Chairman",
        linkedin: "https://www.linkedin.com/in/odalternatives/"
    },
    {
        name: "Ashok Kumar",
        imageSource: "team/2.png",
        about: "CEO",
        linkedin: "https://www.linkedin.com/in/ashok-kumar-907a6213/"
    },
    {
        name: "Raja Perumal",
        imageSource: "team/3.jpg",
        about: "Partner",
        linkedin: "https://www.linkedin.com/in/raja-perumal-29660026/"
    },
    {
        name: "Mishti Verma",
        imageSource: "team/4.png",
        about: "Partner",
        linkedin: "https://www.linkedin.com/in/mishti-verma-12298b5/"
    },
    {
        name: "Aman Zaidi",
        imageSource: "team/5.png",
        about: "Partner",
        linkedin: "https://www.odalternatives.com/about-us/#"
    },
    {
        name: "Nabeela Moinuddin",
        imageSource: "team/6.png",
        about: "Partner",
        linkedin: "https://www.linkedin.com/in/nabeelamoinuddin/"
    },
    {
        name: "Amitesh Gir",
        imageSource: "team/7.jpg",
        about: "Partner",
        linkedin: "https://www.linkedin.com/in/amitesh-gir-3a497844/"
    },
    {
        name: "NS Parameswaran",
        imageSource: "team/8.png",
        about: "Partner",
        linkedin: "https://in.linkedin.com/in/n-s-parameswaran-7ab96940"
    },
    {
        name: "Linda Baptista",
        imageSource: "team/9.png",
        about: "Partner",
        linkedin: "https://in.linkedin.com/in/linda-baptista-she-her-a24a0110"
    },
    {
        name: "Shijin Sreeraman",
        imageSource: "team/10.png",
        about: "Associate Partner",
        linkedin: "https://www.linkedin.com/in/shijinsreeraman-karuwath-ssk-1468bb24"
    },
    {
        name: "Balasree Viswanathan",
        imageSource: "team/11.png",
        about: "Senior Consultant",
        linkedin: "https://www.linkedin.com/in/balasree-v-27ba7577"
    },
    {
        name: "Aditya Jain",
        imageSource: "team/12.jpg",
        about: "Senior Consultant",
        linkedin: "https://www.linkedin.com/in/jainaditya72/"
    },
    {
        name: "Amrita Das Dutta",
        imageSource: "team/13.jpg",
        about: "Consultant",
        linkedin: "https://www.linkedin.com/in/amrita-das-dutta-894951b8/"
    },
    {
        name: "Sunil Arya",
        imageSource: "team/14.png",
        about: "Head Finance",
        linkedin: "https://www.linkedin.com/in/sunil-arya-7494983b/"
    },
    {
        name: "PR Murali",
        imageSource: "team/15.jpg",
        about: "Head Admin",
        linkedin: "https://www.linkedin.com/in/pr-murali-0141701b/"
    }
];

const container = document.querySelector('.imageCardsContainer');

teamMembers.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${member.imageSource}" alt="${member.name}">
        <p class="name">${member.name}</p>
        <p class="about">${member.about}</p>
        <a class="linkedin" href="${member.linkedin}" target="_blank">
            <img src="Resources/ln.png" alt="LinkedIn">
        </a>
    `;

    container.appendChild(card);
});



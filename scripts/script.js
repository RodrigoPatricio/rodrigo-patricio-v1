const companyBtns = document.querySelectorAll(".exp-btn");
const companyTitle = document.querySelector(".experience-title");
const companyName = document.querySelector(".company-title");
const companyTime = document.querySelector(".time-stamp");
const companyDesc = document.querySelectorAll(".description");
const menu = document.querySelector("ul.mobile");
const mobileNavLinks = document.querySelectorAll("ul.mobile a");

companyBtns[0].addEventListener("click", () => {
  companyBtns[0].classList.add("active");
  companyBtns[1].classList.remove("active");
  companyBtns[2].classList.remove("active");
  companyBtns[3].classList.remove("active");

  companyTitle.innerHTML = "Full-Stack Developer & SEO Specialist";
  companyName.innerHTML = "<span>@ Way Digital Consulting</span>";
  companyTime.innerHTML = "Sep 2021 - Present";

  companyDesc[0].innerHTML = "Write modern, high-performance, and maintainable code for a diverse range of internal and customer projects.";
  companyDesc[1].innerHTML = "Lead the technology & development department in several marketing cases assessing the needs of unique clientes by identifying, diagnosing, and resolving technical issues.";
  companyDesc[2].innerHTML = "Perform page optimization across a website to ensure search results are relevant and create a positive user experience, growing website traffic, lead volume and brand awareness.";
});

companyBtns[1].addEventListener("click", () => {
  companyBtns[0].classList.remove("active");
  companyBtns[1].classList.add("active");
  companyBtns[2].classList.remove("active");
  companyBtns[3].classList.remove("active");

  companyTitle.innerHTML = "Full-Stack Developer & UI/UX Designer";
  companyName.innerHTML = "<span>@ WHITEYORKIE</span>";
  companyTime.innerHTML = "Sep 2021 - Present";

  companyDesc[0].innerHTML = "Design and develop modern user interfaces with focus on user experience using creative software design concepts front end technology.";
  companyDesc[1].innerHTML = "Leading the development team, I drive the product through all the stages of the development process, handle logistics, oversees deadlines and ensure quality through the coding process.";
  companyDesc[2].innerHTML = "Develop control & management systems for internal data and for clients on Windows using C# and mobile devices PWAs using Vue 3.";
});

companyBtns[2].addEventListener("click", () => {
  companyBtns[0].classList.remove("active");
  companyBtns[1].classList.remove("active");
  companyBtns[2].classList.add("active");
  companyBtns[3].classList.remove("active");

  companyTitle.innerHTML = "Front-End Developer & UI/UX Designer";
  companyName.innerHTML = "<span>@ DUOSTUDIO</span>";
  companyTime.innerHTML = "Aug 2020 - Aug 2021";

  companyDesc[0].innerHTML = "Work with a diverse team of designers to create accessible and user experience-centric products for different clientes.";
  companyDesc[1].innerHTML = "Master different wireframe and prototyping tools to create aesthetic designs that enhances the user experience.";
  companyDesc[2].innerHTML = "Collect application data and split testing the results to increase user engagement, increase conversion rates and effectively create content.";
});
companyBtns[3].addEventListener("click", () => {
  companyBtns[0].classList.remove("active");
  companyBtns[1].classList.remove("active");
  companyBtns[2].classList.remove("active");
  companyBtns[3].classList.add("active");

  companyTitle.innerHTML = "Programming & Robotics Professor ";
  companyName.innerHTML = "<span>@ Universidade Metropolitana de Santos</span>";
  companyTime.innerHTML = "Feb 2020 - Aug 2021";

  companyDesc[0].innerHTML = "Teach beginner and intermediate level classes robotics using C++ and C# with arduino.";
  companyDesc[1].innerHTML = "Create didactic content for college, such as teaching materials and lesson plans on programming and robotics.";
  companyDesc[2].innerHTML = "Teach programming classes in english for intermediate and advanced level students.";
});

//#region mobile nav menu
document.getElementsByClassName("mobile-nav")[0].addEventListener("click", () => {
    menu.style.display == "flex" ? (menu.style.display = "none") : (menu.style.display = "flex");
  });

  mobileNavLinks.forEach(Element => {
    Element.addEventListener('click', () => {
      menu.style.display = 'none'
    })
  });
//#endregion

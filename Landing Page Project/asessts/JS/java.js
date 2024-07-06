// For Load HTML Excexute The JAVA secrept
document.addEventListener("DOMContentLoaded", () => {
  const UnorderdList = document.getElementById("navbar__list");
  const AllSection = document.querySelectorAll("section");

  //To Create Neave Par Menue  From Itself Work
  function createNeavPar() {
    for (let i = 0; i < AllSection.length; i++) {
      // console.log(AllSection[i].getAttribute('id'));

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.classList.add("menu-link");
      a.href = `#${AllSection[i].getAttribute("id")}`;
      a.innerHTML = AllSection[i].getAttribute("id");

      li.appendChild(a);
      UnorderdList.appendChild(li);
    }
  }
  createNeavPar();

  window.onscroll = function () {
    WhenScrrol();
  };
  const navPar = document.querySelectorAll("#navbar__list li");
  
  const a =      document.querySelectorAll("#navbar__list li a");



  // Khalid Ahmad Younes Dababat
  function WhenScrrol() {
    
    AllSection.forEach((e) => {
      if (
        e.getBoundingClientRect().top >= -800 &&
        e.getBoundingClientRect().top <= 150
      ) {
        e.classList.add("Active-This-Class");
        // console.log(e.getBoundingClientRect().top);
      } else {
        e.classList.remove("Active-This-Class");
      }
    });
  }

  
 
  navPar.forEach((e) => {
    navPar.forEach((nav) => nav.classList.remove("active"));
    e.addEventListener("click", function () {
      navPar.forEach((nav) => nav.classList.remove("active"));
      e.classList.add("active");
    });
  });
 

    a.forEach( (e) => {
      
        e.addEventListener('click', function(event){
            // event.preventDefault(); 
            
            
             const SectionId = e.getAttribute('href');
             document.getElementById(SectionId).scrollIntoView({behavior:'smooth'});
        });
    });


 

  

 



   











});

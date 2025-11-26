document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // 1. NAVIGATION MOBILE (AVEC BOUTON X)
    // =========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navIcon = navToggle.querySelector('i'); // L'icône à l'intérieur du bouton

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Logique pour changer l'icône (Bars <-> Times/X)
        if (navMenu.classList.contains('active')) {
            navIcon.classList.remove('fa-bars');
            navIcon.classList.add('fa-times'); // Devient un X
            navIcon.style.color = "#64ffda";   // On peut forcer la couleur cyan
        } else {
            navIcon.classList.remove('fa-times');
            navIcon.classList.add('fa-bars');  // Redevient un hamburger
            navIcon.style.color = "";          // Remet la couleur par défaut
        }
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            // Remettre l'icône barres
            navIcon.classList.remove('fa-times');
            navIcon.classList.add('fa-bars');
        });
    });

    // =========================================
    // 2. SCROLL SPY (INDICATEUR DE SECTION)
    // =========================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // On ajoute -150px pour que le changement se fasse un peu avant d'arriver pile sur la section
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            // On vérifie si l'ID du lien correspond à la section actuelle
            // On utilise .includes car les href sont "#about", "#skills", etc.
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active-link');
            }
        });
    });

    // =========================================
    // 3. FILTRES PORTFOLIO
    // =========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // =========================================
    // 4. MODALES (CLIC DEHORS POUR FERMER)
    // =========================================
    const projectTriggers = document.querySelectorAll('.project-trigger');
    const closeBtns = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    // Ouvrir
    projectTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal'); 
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    // Fermer avec le bouton X
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        });
    });

    // --- CORRECTION ICI : Fermer en cliquant dehors ---
    window.onclick = function(event) {
        // Si l'élément cliqué a la classe 'modal', c'est qu'on a cliqué sur le fond gris
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
            document.body.style.overflow = 'auto'; // Réactive le scroll
        }
    }

    // =========================================
    // 5. EMAIL JS & NOTIFICATION
    // =========================================
    (function(){
        emailjs.init("-coiPU744oaZd1ttL"); 
    })();

    const contactForm = document.getElementById("contactForm");
    if(contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const btn = document.getElementById('contactSend');
            const originalText = btn.textContent;
            btn.textContent = "Envoi en cours...";

            emailjs.sendForm("service_er8lbek", "template_ta2iexp", this)
            .then(function() {
                // Succès
                document.getElementById("contactForm").reset();
                btn.textContent = originalText;

                // Afficher notif
                const notification = document.getElementById("notification");
                notification.className = "notification show";
                setTimeout(function(){ 
                    notification.className = notification.className.replace("show", ""); 
                }, 4000);

            }, function(error) {
                // Erreur
                alert("Erreur : " + JSON.stringify(error));
                btn.textContent = "Réessayer";
            });
        });
    }

}); // Fin DOMContentLoaded


// =========================================
// 6. TRADUCTION
// =========================================
function changeLanguage(language) {
  const texts = {
    fr: {
      navAbout: "À Propos",
      navExperience: "Expériences",
      navPortfolio: "Portfolio",
      navSkills: "Compétences",
      navAwards: "Succès",
      navContact: "Contact",
      role: "Développeur full stack avec une expertise en gestion de projets et développement d'applications web. Passionné par la création de solutions numériques innovantes.",
      experienceText: "Je possède une solide expérience dans le développement d'applications web et la gestion de projets techniques. Polyvalent et autonome, j'ai travaillé sur plusieurs projets, notamment pour Gloservices et Special Olympics Morocco, en assurant la qualité et l'efficacité des solutions mises en place.",
      downloadCV: "Télécharger mon CV",
      experienceTitle: "Expériences",
      portfolioTitle: "Portfolio",
      portfolioAll: "tout",
      portfolioWebApp: "Web App",
      portfolioDesktopApp: "Desktop App",
      skillsTitle: "Compétences",
      awardsTitle: "Succès",
      contactTitle: "CONTACT",
      contactSend: "Envoyer",
      
      experience1Title: "Développeur Web - GLOBUILD SARL",
      experience1Description: "Développement d'applications web et desktop, analyse des besoins techniques. Responsable de la saisie de données et optimisation des processus.",
      experience2Title: "Stage Développeur Web - AXA",
      experience2Description: "Participation à la création et à l'optimisation de sites web pour améliorer l'expérience utilisateur.",
      experience3Title: "Agent de Saisie des Données (Freelance) - SNCF",
      experience3Description: "Travail en tant qu'agent de saisie des données, fournissant un support administratif.",
      experience4Title: "Développeur Application Web - Special Olympics Morocco",
      experience4Description: "Chargé des associations et gestion IT. Développement d'une application pour les événements sportifs.",
      experience5Title:"Développement et Gestion d'application - Fondation Mohammed 6",
      experience5Description:"Développement en cours d'une application web de planification et de gestion des étudiants (React/Spring Boot).",
      
      award1Title: "Responsable IT - Special Olympics Morocco",
      award1Description: "Chargé de la gestion IT et des associations.",
      award2Title: "Développeur Web - GLOBUILD SARL",
      award2Description: "Optimisation des processus de saisie de données.",
      award3Title: "Stage Développeur Web - AXA",
      award3Description: "Conception de sites web optimisés.",
      award4Title: "Développement - Fondation Mohammed 6",
      award4Description: "Application de gestion des étudiants (React/Spring Boot).",

      skillHtml5: "HTML5", skillHtml5Level: "Excellent",
      skillJavaScript: "JavaScript", skillJavaScriptLevel: "Bon",
      skillPython: "Python", skillPythonLevel: "Moyen",
      skillCss3: "CSS3", skillCss3Level: "Excellent",
      skillPhp: "PHP", skillPhpLevel: "Excellent",
      skillJava: "Java", skillJavaLevel: "Bon",
      
      skillReact: "React", skillReactLevel: "Bon",
      skillLaravel: "Laravel", skillLaravelLevel: "Excellent",
      skillSpring: "Spring Boot", skillSpringLevel: "Bon",
      skillDocker: "Docker", skillDockerLevel: "Moyen",
      skillGithub: "GitHub", skillGithubLevel: "Excellent",
      skillPostman: "Postman", skillPostmanLevel: "Bon"
    },
    en: {
      navAbout: "About",
      navExperience: "Experiences",
      navPortfolio: "Portfolio",
      navSkills: "Skills",
      navAwards: "Successes",
      navContact: "Contact",
      role: "Full stack developer with expertise in project management and web application development. Passionate about creating innovative digital solutions.",
      experienceText: "I have solid experience in web application development and technical project management. Versatile and autonomous, I have worked on several projects, notably for Gloservices and Special Olympics Morocco, ensuring the quality and effectiveness of the solutions implemented.",
      downloadCV: "Download my CV",
      experienceTitle: "Experiences",
      portfolioTitle: "Portfolio",
      portfolioAll: "all",
      portfolioWebApp: "Web App",
      portfolioDesktopApp: "Desktop App",
      skillsTitle: "Coding Skills",
      awardsTitle: "Successes",
      contactTitle: "CONTACT",
      contactSend: "Send",
      
      experience1Title: "Web Developer - GLOBUILD SARL",
      experience1Description: "Development of web applications and desktop, analysis of technical needs.",
      experience2Title: "Web Developer Intern - AXA",
      experience2Description: "Participation in the creation and optimization of websites.",
      experience3Title: "Data Entry Agent (Freelance) - SNCF",
      experience3Description: "Work as a data entry agent, providing administrative support.",
      experience4Title: "Web Application Developer - Special Olympics Morocco",
      experience4Description: "IT management and app development for sporting events.",
      experience5Title:"App Development - Mohammed VI Foundation",
      experience5Description:"Ongoing development of a web application for student management (React/Spring Boot).",
      
      award1Title: "IT Manager - Special Olympics Morocco",
      award1Description: "IT and association management.",
      award2Title: "Web Developer - GLOBUILD SARL",
      award2Description: "Web app optimization.",
      award3Title: "Web Developer Intern - AXA",
      award3Description: "Website design and optimization.",
      award4Title: "App Development - Mohammed VI Foundation",
      award4Description: "Student management app development.",

      skillHtml5: "HTML5", skillHtml5Level: "Excellent",
      skillJavaScript: "JavaScript", skillJavaScriptLevel: "Good",
      skillPython: "Python", skillPythonLevel: "Average",
      skillCss3: "CSS3", skillCss3Level: "Excellent",
      skillPhp: "PHP", skillPhpLevel: "Excellent",
      skillJava: "Java", skillJavaLevel: "Good",

      skillReact: "React", skillReactLevel: "Good",
      skillLaravel: "Laravel", skillLaravelLevel: "Excellent",
      skillSpring: "Spring Boot", skillSpringLevel: "Good",
      skillDocker: "Docker", skillDockerLevel: "Average",
      skillGithub: "GitHub", skillGithubLevel: "Excellent",
      skillPostman: "Postman", skillPostmanLevel: "Good"
    }
  };

  document.getElementById("navAbout").innerText = texts[language].navAbout;
  document.getElementById("navExperience").innerText = texts[language].navExperience;
  document.getElementById("navPortfolio").innerText = texts[language].navPortfolio;
  document.getElementById("navSkills").innerText = texts[language].navSkills;
  document.getElementById("navAwards").innerText = texts[language].navAwards;
  document.getElementById("navContact").innerText = texts[language].navContact;
  
  document.getElementById("role").innerText = texts[language].role;
  document.getElementById("experienceText").innerText = texts[language].experienceText;
  document.getElementById("downloadCV").innerText = texts[language].downloadCV;
  
  document.getElementById("experienceTitle").innerText = texts[language].experienceTitle;
  document.getElementById("portfolioTitle").innerText = texts[language].portfolioTitle;
  document.getElementById("skillsTitle").innerText = texts[language].skillsTitle;
  document.getElementById("awardsTitle").innerText = texts[language].awardsTitle;
  document.getElementById("contactTitle").innerText = texts[language].contactTitle;
  document.getElementById("contactSend").innerText = texts[language].contactSend;
  
  document.getElementById("portfolioAll").innerText = texts[language].portfolioAll;
  document.getElementById("portfolioWebApp").innerText = texts[language].portfolioWebApp;
  document.getElementById("portfolioDesktopApp").innerText = texts[language].portfolioDesktopApp;

  document.getElementById("experience1Title").innerText = texts[language].experience1Title;
  document.getElementById("experience1Description").innerText = texts[language].experience1Description;
  document.getElementById("experience2Title").innerText = texts[language].experience2Title;
  document.getElementById("experience2Description").innerText = texts[language].experience2Description;
  document.getElementById("experience3Title").innerText = texts[language].experience3Title;
  document.getElementById("experience3Description").innerText = texts[language].experience3Description;
  document.getElementById("experience4Title").innerText = texts[language].experience4Title;
  document.getElementById("experience4Description").innerText = texts[language].experience4Description;
  document.getElementById("experience5Title").innerText = texts[language].experience5Title;
  document.getElementById("experience5Description").innerText = texts[language].experience5Description;

  document.getElementById("award1Title").innerText = texts[language].award1Title;
  document.getElementById("award1Description").innerText = texts[language].award1Description;
  document.getElementById("award2Title").innerText = texts[language].award2Title;
  document.getElementById("award2Description").innerText = texts[language].award2Description;
  document.getElementById("award3Title").innerText = texts[language].award3Title;
  document.getElementById("award3Description").innerText = texts[language].award3Description;
  document.getElementById("award4Title").innerText = texts[language].award4Title;
  document.getElementById("award4Description").innerText = texts[language].award4Description;

  document.getElementById("skillHtml5").innerText = texts[language].skillHtml5;
  document.getElementById("skillHtml5Level").innerText = texts[language].skillHtml5Level;
  document.getElementById("skillJavaScript").innerText = texts[language].skillJavaScript;
  document.getElementById("skillJavaScriptLevel").innerText = texts[language].skillJavaScriptLevel;
  document.getElementById("skillPython").innerText = texts[language].skillPython;
  document.getElementById("skillPythonLevel").innerText = texts[language].skillPythonLevel;
  document.getElementById("skillCss3").innerText = texts[language].skillCss3;
  document.getElementById("skillCss3Level").innerText = texts[language].skillCss3Level;
  document.getElementById("skillPhp").innerText = texts[language].skillPhp;
  document.getElementById("skillPhpLevel").innerText = texts[language].skillPhpLevel;
  document.getElementById("skillJava").innerText = texts[language].skillJava;
  document.getElementById("skillJavaLevel").innerText = texts[language].skillJavaLevel;

  document.getElementById("skillReact").innerText = texts[language].skillReact;
  document.getElementById("skillReactLevel").innerText = texts[language].skillReactLevel;
  document.getElementById("skillLaravel").innerText = texts[language].skillLaravel;
  document.getElementById("skillLaravelLevel").innerText = texts[language].skillLaravelLevel;
  document.getElementById("skillSpring").innerText = texts[language].skillSpring;
  document.getElementById("skillSpringLevel").innerText = texts[language].skillSpringLevel;
  document.getElementById("skillDocker").innerText = texts[language].skillDocker;
  document.getElementById("skillDockerLevel").innerText = texts[language].skillDockerLevel;
  document.getElementById("skillGithub").innerText = texts[language].skillGithub;
  document.getElementById("skillGithubLevel").innerText = texts[language].skillGithubLevel;
  document.getElementById("skillPostman").innerText = texts[language].skillPostman;
  document.getElementById("skillPostmanLevel").innerText = texts[language].skillPostmanLevel;
}
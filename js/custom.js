(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
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
      portfolioDesktopApp: "desctop App",
      skillsTitle: "Coding Skills",
      awardsTitle: "Succès",
      contactTitle: "CONTACT",
      contactSend: "Envoyer",
      experience1Title: "Développeur Web - GLOBUILD SARL",
                experience1Description: "Développement d'applications web et desktop,analyse des besoins techniques. Responsable de la saisie de données et optimisation des processus pour améliorer l'efficacité des activités de l'entreprise.",
                experience2Title: "Stage Développeur Web - AXA",
                experience2Description: "Participation à la création et à l'optimisation de sites web pour améliorer l'expérience utilisateur et les performances des sites. Collaboration avec l'équipe pour mettre en place des solutions adaptées aux besoins des clients.",
                experience3Title: "Agent de Saisie des Données (Freelance) - SNCF",
                experience3Description: "Travail en tant qu'agent de saisie des données, fournissant un support administratif et une gestion précise des données pour améliorer l'efficacité des processus métiers.",
                experience4Title: "Développeur Application Web - Special Olympics Morocco",
                experience4Description: "Chargé des associations et gestion IT. Responsable du développement d'une application pour faciliter la gestion des événements sportifs et des associations partenaires.",
                experience5Title:"Développement et Gestion d’application - Fondation Mohammed 6",
                experience5Description:"Développement en cours d’une application web de planification et de gestion des étudiants, avec REACT et JAVA SPRINGBOOT. Création et mise à jour des emplois du temps via Konosys ET Excel.",
                award1Title: "Responsable IT et Gestion des Associations - Special Olympics Morocco",
                award1Description: "Chargé de la gestion IT et des associations pour Special Olympics Morocco, notamment le développement d'une application pour gérer les événements sportifs et les documents des athlètes.",
                award2Title: "Développeur Web - GLOBUILD SARL",
                award2Description: "Développement et optimisation d'une application web pour améliorer les processus de saisie de données et la gestion des opérations chez GLOBUILD SARL.",
                award3Title: "Stage Développeur Web - AXA",
                award3Description: "Participation à la conception de sites web optimisés et performants pour améliorer l'expérience utilisateur.",
                skillsTitle: "Compétences en Codage",
                skillHtml5: "HTML5",
                skillHtml5Level: "Excellent",
                skillJavaScript: "JavaScript",
                skillJavaScriptLevel: "Bon",
                skillPython: "Python",
                skillPythonLevel: "Moyen",
                skillCss3: "CSS3",
                skillCss3Level: "Excellent",
                skillJQuery: "JQuery",
                skillJQueryLevel: "Moyen",
                skillPhp: "PHP",
                skillPhpLevel: "Excellent",
                skillJava: "Java",
                skillJavaLevel: "Bon",
                skillRuby: "Ruby",
                skillRubyLevel: "Débutant"
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
                experience1Description: "Development of web applications and desktop,analysis of technical needs. Responsible for data entry and process optimization to improve the efficiency of the company's activities.",
                experience2Title: "Web Developer Intern - AXA",
                experience2Description: "Participation in the creation and optimization of websites to improve user experience and site performance. Collaboration with the team to implement solutions tailored to client needs.",
                experience3Title: "Data Entry Agent (Freelance) - SNCF",
                experience3Description: "Work as a data entry agent, providing administrative support and precise data management to improve the efficiency of business processes.",
                experience4Title: "Web Application Developer - Special Olympics Morocco",
                experience4Description: "Responsible for associations and IT management. Developed an application to facilitate the management of sporting events and partner associations.",
                experience5Title:"Application Development and Management – Mohammed VI Foundation",
                experience5Description:"Ongoing development of a web application for student planning and management, using REACT and JAVA SPRINGBOOT. Timetable creation and updates handled via Konosys and Excel.",
                award1Title: "IT Manager and Associations Management - Special Olympics Morocco",
                award1Description: "Responsible for IT management and associations for Special Olympics Morocco, including the development of an application to manage sporting events and athlete documents.",
                award2Title: "Web Developer - GLOBUILD SARL",
                award2Description: "Development and optimization of a web application to improve data entry processes and operations management at GLOBUILD SARL.",
                award3Title: "Web Developer Intern - AXA",
                award3Description: "Participation in the design of optimized and high-performance websites to improve the user experience.",
                skillsTitle: "Coding Skills",
        skillHtml5: "HTML5",
        skillHtml5Level: "Excellent",
        skillJavaScript: "JavaScript",
        skillJavaScriptLevel: "Good",
        skillPython: "Python",
        skillPythonLevel: "Average",
        skillCss3: "CSS3",
        skillCss3Level: "Excellent",
        skillJQuery: "JQuery",
        skillJQueryLevel: "Average",
        skillPhp: "PHP",
        skillPhpLevel: "Excellent",
        skillJava: "Java",
        skillJavaLevel: "Good",
        skillRuby: "Ruby",
        skillRubyLevel: "Beginner"

                

      
    }
  };

  // Met à jour le texte en fonction de la langue choisie
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
  document.getElementById("portfolioAll").innerText = texts[language].portfolioAll;
  document.getElementById("portfolioWebApp").innerText = texts[language].portfolioWebApp;
  document.getElementById("portfolioDesktopApp").innerText = texts[language].portfolioDesktopApp;
  document.getElementById("skillsTitle").innerText = texts[language].skillsTitle;
  document.getElementById("awardsTitle").innerText = texts[language].awardsTitle;
  document.getElementById("contactTitle").innerText = texts[language].contactTitle;
  document.getElementById("contactSend").innerText = texts[language].contactSend;
  document.getElementById("experience1Title").innerText = texts[language].experience1Title;
        document.getElementById("experience1Description").innerText = texts[language].experience1Description;
        document.getElementById("experience2Title").innerText = texts[language].experience2Title;
        document.getElementById("experience2Description").innerText = texts[language].experience2Description;
        document.getElementById("experience3Title").innerText = texts[language].experience3Title;
        document.getElementById("experience3Description").innerText = texts[language].experience3Description;
        document.getElementById("experience4Title").innerText = texts[language].experience4Title;
        document.getElementById("experience4Description").innerText = texts[language].experience4Description;
        document.getElementById("experience5Title").innerText = texts[language].experience4Title;
        document.getElementById("experience5Description").innerText = texts[language].experience4Description;
        document.getElementById("awardsTitle").innerText = texts[language].awardsTitle;
document.getElementById("award1Title").innerText = texts[language].award1Title;
document.getElementById("award1Description").innerText = texts[language].award1Description;
document.getElementById("award2Title").innerText = texts[language].award2Title;
document.getElementById("award2Description").innerText = texts[language].award2Description;
document.getElementById("award3Title").innerText = texts[language].award3Title;
document.getElementById("award3Description").innerText = texts[language].award3Description;
document.getElementById("skillsTitle").innerText = texts[language].skillsTitle;
document.getElementById("skillHtml5").innerText = texts[language].skillHtml5;
document.getElementById("skillHtml5Level").innerText = texts[language].skillHtml5Level;
document.getElementById("skillJavaScript").innerText = texts[language].skillJavaScript;
document.getElementById("skillJavaScriptLevel").innerText = texts[language].skillJavaScriptLevel;
document.getElementById("skillPython").innerText = texts[language].skillPython;
document.getElementById("skillPythonLevel").innerText = texts[language].skillPythonLevel;
document.getElementById("skillCss3").innerText = texts[language].skillCss3;
document.getElementById("skillCss3Level").innerText = texts[language].skillCss3Level;
document.getElementById("skillJQuery").innerText = texts[language].skillJQuery;
document.getElementById("skillJQueryLevel").innerText = texts[language].skillJQueryLevel;
document.getElementById("skillPhp").innerText = texts[language].skillPhp;
document.getElementById("skillPhpLevel").innerText = texts[language].skillPhpLevel;
document.getElementById("skillJava").innerText = texts[language].skillJava;
document.getElementById("skillJavaLevel").innerText = texts[language].skillJavaLevel;
document.getElementById("skillRuby").innerText = texts[language].skillRuby;
document.getElementById("skillRubyLevel").innerText = texts[language].skillRubyLevel;
    }


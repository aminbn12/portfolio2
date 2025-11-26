document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // 1. NAVIGATION MOBILE
    // =========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Change l'icône burger en croix (optionnel)
        const icon = navToggle.querySelector('i');
        if(navMenu.classList.contains('active')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // =========================================
    // 2. FILTRES PORTFOLIO
    // =========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Gestion de la classe active
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    // Petite animation CSS via opacité si on voulait aller plus loin
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // =========================================
    // 3. MODALES (CLIC SUR L'IMAGE ENTIÈRE)
    // =========================================
    const projectTriggers = document.querySelectorAll('.project-trigger'); // Les Overlays
    const closeBtns = document.querySelectorAll('.close-modal');

    // Ouvrir la modale
    projectTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            // Récupère l'ID (ex: modal4) depuis l'attribut data-modal de l'overlay
            const modalId = trigger.getAttribute('data-modal'); 
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Empêche le scroll de la page
            } else {
                console.error("Erreur : Modale introuvable pour ID " + modalId);
            }
        });
    });

    // Fermer avec le bouton X
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Réactive le scroll
        });
    });

    // Fermer en cliquant à l'extérieur (sur le fond noir)
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    }

    // =========================================
    // 4. EMAIL JS
    // =========================================
    (function(){
        // Initialisation EmailJS
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
                alert("Message envoyé avec succès !");
                document.getElementById("contactForm").reset();
                btn.textContent = originalText;
            }, function(error) {
                alert("Erreur lors de l'envoi : " + JSON.stringify(error));
                btn.textContent = "Réessayer";
            });
        });
    }

}); // Fin DOMContentLoaded

// =========================================
// 5. TRADUCTION (Votre fonction exacte)
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
      experience5Title:"Développement et Gestion d'application - Fondation Mohammed 6",
      experience5Description:"Développement en cours d'une application web de planification et de gestion des étudiants, avec REACT et JAVA SPRINGBOOT. Création et mise à jour des emplois du temps via Konosys ET Excel.",
      award1Title: "Responsable IT et Gestion des Associations - Special Olympics Morocco",
      award1Description: "Chargé de la gestion IT et des associations pour Special Olympics Morocco, notamment le développement d'une application pour gérer les événements sportifs et les documents des athlètes.",
      award2Title: "Développeur Web - GLOBUILD SARL",
      award2Description: "Développement et optimisation d'une application web pour améliorer les processus de saisie de données et la gestion des opérations chez GLOBUILD SARL.",
      award3Title: "Stage Développeur Web - AXA",
      award3Description: "Participation à la conception de sites web optimisés et performants pour améliorer l'expérience utilisateur.",
      award4Title: "Développement et Gestion d'application - Fondation Mohammed 6",
      award4Description: "Développement en cours d'une application web pour la gestion des étudiants, avec REACT et JAVA SPRINGBOOT. Emplois du temps créés et mis à jour via Konosys et Excel.",
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
      experience5Title:"Application Development and Management - Mohammed VI Foundation",
      experience5Description:"Ongoing development of a web application for student planning and management, using REACT and JAVA SPRINGBOOT. Timetable creation and updates handled via Konosys and Excel.",
      award1Title: "IT Manager and Associations Management - Special Olympics Morocco",
      award1Description: "Responsible for IT management and associations for Special Olympics Morocco, including the development of an application to manage sporting events and athlete documents.",
      award2Title: "Web Developer - GLOBUILD SARL",
      award2Description: "Development and optimization of a web application to improve data entry processes and operations management at GLOBUILD SARL.",
      award3Title: "Web Developer Intern - AXA",
      award3Description: "Participation in the design of optimized and high-performance websites to improve the user experience.",
      award4Title: "Application Development and Management - Mohammed VI Foundation",
      award4Description: "Participation in the design of optimized and high-performance websites to improve the user experience.",
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
  document.getElementById("experience5Title").innerText = texts[language].experience5Title;
  document.getElementById("experience5Description").innerText = texts[language].experience5Description;
  document.getElementById("awardsTitle").innerText = texts[language].awardsTitle;
  document.getElementById("award1Title").innerText = texts[language].award1Title;
  document.getElementById("award1Description").innerText = texts[language].award1Description;
  document.getElementById("award2Title").innerText = texts[language].award2Title;
  document.getElementById("award2Description").innerText = texts[language].award2Description;
  document.getElementById("award3Title").innerText = texts[language].award3Title;
  document.getElementById("award3Description").innerText = texts[language].award3Description;
  document.getElementById("award4Title").innerText = texts[language].award4Title;
  document.getElementById("award4Description").innerText = texts[language].award4Description;
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
// =========================================
    // 4. EMAIL JS (AVEC NOTIFICATION)
    // =========================================
    (function(){
        emailjs.init("-coiPU744oaZd1ttL"); // Votre ID
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
                // --- SUCCÈS ---
                
                // 1. Réinitialiser le formulaire
                document.getElementById("contactForm").reset();
                btn.textContent = originalText;

                // 2. Afficher la notification
                const notification = document.getElementById("notification");
                notification.className = "notification show"; // Ajoute la classe

                // 3. Cacher la notification après 4 secondes
                setTimeout(function(){ 
                    notification.className = notification.className.replace("show", ""); 
                }, 4000);

            }, function(error) {
                // --- ERREUR ---
                alert("Erreur lors de l'envoi : " + JSON.stringify(error));
                btn.textContent = "Réessayer";
            });
        });
    }
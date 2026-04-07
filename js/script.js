document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('experience-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');
    const stageItems = document.querySelectorAll('.stage-clickable');

    // Experience Data
    const experienceData = {
        'dzpn': {
            title: 'Stage Développeur Web (2ème année)',
            company: 'DZPN Police Nationale',
            date: '5 Janvier 2026 - 13 Février 2026',
            location: '62 Boulevard Belfort, Lille',
            description: "La DZPN (Direction Zonale de la Police Nationale) est une direction créer par des réformes de la police nationale. Elle compte plusieurs services dont celui ou j'ai été en stage, le service zonale d'appui numérique avec un ingénieur à la tête du service.Le but est de développer et maintenir un portail d'applications.",
            missions: [
                "Mise à jour d'une application web",
                "Tests unitaires",
                "Organiser les fichiers dans différents dossiers"
            ],
            stack: ['PHP', 'SQL', 'phpMyAdmin', 'Visual Studio Code'],
            screenshots: [
                { url: 'documentation/capture_ecran_police1.jpg', alt: 'Interface Intranet' },
                { url: 'documentation/capture_ecran_police2.jpg', alt: 'Gestion des accès' }
            ],
            files: [
                { name: 'Présentation de stage.odp', url: 'documentation/presentation_stage_romain.odp' },
                { name: 'Attestation de stage.pdf', url: 'documentation/attestation_dzpn.pdf', isPrivate: true }
            ]
        },
        'delssi': {
            title: 'Stage Développeur Web (1ère année)',
            company: 'DELSSI',
            date: '2 Juin 2025 - 11 Juillet 2025',
            location: '3 Avenue Antoine Pinay, Hem',
            description: "DELSSI est une société de service informatique spécialisée dans la conception et le développement d'applications métiers. Durant ce stage, j'ai pu refaire l'interface du site web Avianor qui est une entreprise également détenu par le gérant de la société DELSSI.",
            missions: [
                "Mise en place d'un environnement WordPress en local",
                "Gestion de plugins sur WordPress",
                "Gestion de plugins commercial sécurisée sur WordPress",
                "Rédaction d'une politique de confidentialité pour le site"
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP', 'Visual Studio Code', 'Docker'],
            screenshots: [
                { url: 'images/accueil_avianor.png', alt: 'Dashboard client' },
                { url: 'images/paiements_avianor.png', alt: 'Mise en page responsive' },
                { url: 'images/screen_portainer.jpg', alt: 'Interface Portainer' }
            ],
            files: [
                { name: 'Compte-rendu stage', url: 'documentation/compterendustagedelssi.pdf' },
                { name: 'Documentation stage', url: 'doc_delssi.html' },
                { name: 'Attestation de stage.pdf', url: 'documentation/attestation_delssi.pdf', isPrivate: true }
            ]
        },
        'projet1': {
            title: 'Site web Trans Ortho (AP Première année)',
            company: 'Projet Scolaire',
            date: '2024 - 2025',
            location: 'Lycée Gaston Berger',
            description: "L'association Trans-Ortho est une association qui vise à promouvoir l'accompagnement orthophonique des personnes transidentitaires, faciliter l'accès des personnes trans à l'orthophonie, développer et soutenir des projets scientifiques, intellectuels ou matériels portant sur la voix et les transidentités, encourager la pratique d'accompagnement vocal des personnes transidentitaires et soutenir la recherche auprès des orthophonistes et des étudiants en orthophonie, informer sur les problématiques liées à la voix et aux transidentités et organiser des formations, congrès et colloques. La présidente est Laura Bakanov et notre contact dans cette association est Juliette Deffever. Ils cherchent à avoir un site web afin de pouvoir accomplir leurs objectifs de manière plus simple, et de manière plus accessible que sur les réseaux sociaux.",
            missions: [
                "Modélisation de la base de données (MCD/MLD)",
                "Création de la base de données MySQL",
                "Création de pages HTML/CSS, JS",
                "Réalisation d'une politique de confidentialité pour le site"
            ],
            stack: ['HTML', 'CSS', 'Javascript', 'MySQL', 'Visual Studio Code', 'phpMyAdmin', 'Github'],
            screenshots: [
                { url: 'images/accueil_transortho.png', alt: 'Page d\'accueil' },
                { url: 'images/capture_code_transortho.png', alt: 'Page de présentation' },
                { url: 'images/plan_site_transortho.png', alt: 'Base de données' },
                { url: 'images/diagramme_transortho.png', alt: 'Formulaire de contact' }
            ],
            files: [
                { name: 'Compte-rendu', url: 'documentation/compte_rendu_transortho.pdf' },
                { name: 'Compte-rendu réunion staff', url: 'documentation/compte_rendu_reunion.txt' }
            ]
        },
        'projet2': {
            title: 'Applications web CashCash (AP Deuxième année)',
            company: 'Projet Scolaire',
            date: '2025 - 2026',
            location: 'Lycée Gaston Berger',
            description: "La société CashCash vend des terminaux 'point de vente' (TPV) à des hypermarchés, supermarchés et petits commerçants. CashCash compte de nombreux sites en France (centres régionaux et agences). Elle dispose d'un SI (système d'information) construit sur un réseau IP et composé de plateformes hétérogènes (MacOS, Linux, Windows, IOS, Android, etc).",
            missions: [
                "Conception de base de données",
                "Application web de gestion des interventions",
                "Création d'un client lourd"
            ],
            stack: ['PHP Symfony', 'Twig', 'CSS', 'Javascript', 'MySQL', 'Github', 'Visual Studio Code', 'phpMyAdmin', 'Git'],
            screenshots: [
                { url: 'images/capture_connexion_cashcash.png', alt: 'Page de connexion CashCash' },
                { url: 'images/capture_interface_admin_cashcash.png', alt: 'Interface administrateur CashCash' },
                { url: 'images/capture_interface_gest_cashcash.png', alt: 'Interface gestionnaire CashCash' },
                { url: 'images/capture_interface_tech_cashcash.png', alt: 'Interface technicien CashCash' },
                { url: 'images/capture_personnel_cashcash.png', alt: 'Gestion du personnel CashCash' },
                { url: 'images/capture_code_interface_admin.png', alt: 'Code de l\'interface administrateur' },
                { url: 'images/capture_php_code_login_page.png', alt: 'Code PHP de la page de connexion' },
                { url: 'images/capture_twig_cashcash.png', alt: 'Template Twig CashCash' },
                { url: 'images/diagramme_cashcash.png', alt: 'Diagramme de cas utilisation' },
                { url: 'images/maquette_site_cashcash.png', alt: 'Maquette du site CashCash' }
            ],
            files: []
        },
        'glpi': {
            title: 'GLPI',
            company: 'Projet Scolaire',
            date: '2025 - 2026',
            location: 'Lycée Gaston Berger',
            description: "GLPI est un outil de ticketing qui premet de répondre aux besoins des utilisateurs en matière de support informatique.",
            missions: [
                "Installation et configuration de GLPI",
                "Création et gestion des tickets d'incidents",
                "Gestion des utilisateurs et des droits"
            ],
            stack: ['GLPI', 'Helpdesk', 'Administration'],
            screenshots: [
                { url: 'images/console_glpi.png', alt: 'Console GLPI' },
                { url: 'images/accueil_glpi.png', alt: 'Accueil GLPI' },
                { url: 'images/ticker_traiter.jpg', alt: 'Ticket traité' },
                { url: 'images/capture_connexion_glpi.png', alt: 'Connexion GLPI' }
            ],
            files: [
                { name: 'Installation glpi', url: 'documentation/compte_rendu_glpi.pdf' },
                { name: 'Mise en place de la récupération des ticket', url: 'documentation/gestion_ticket_glpi.pdf' },
                { name: 'Gestion des utilisateurs', url: 'documentation/gestion_utilisateurs_glpi.pdf' },
                { name: 'Gestions des droits des utilisateurs', url: 'documentation/utilisateurs_glpi.xlsx  ' }
            ]
        }
    };

    function openModal(stageId) {
        const data = experienceData[stageId];
        if (!data) return;

        modalBody.innerHTML = `
            <div class="modal-header">
                <span class="modal-company">${data.company}</span>
                <h2>${data.title}</h2>
                <div class="modal-meta">
                    <span>📍 ${data.location}</span>
                    <span>📅 ${data.date}</span>
                </div>
            </div>

            <div class="modal-section">
                <h3>Présentation</h3>
                <p>${data.description}</p>
            </div>

            <div class="modal-section">
                <h3>Missions réalisées</h3>
                <ul style="list-style: disc; padding-left: 20px; color: var(--text-muted);">
                    ${data.missions.map(mission => `<li>${mission}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h3>Langages et Outils</h3>
                <div class="tech-tags">
                    ${data.stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3>Captures d'écran</h3>
                <div class="screenshot-grid">
                    ${data.screenshots.map(img => `
                        <div class="screenshot-item">
                            <img src="${img.url}" alt="${img.alt}" onerror="this.src='images/project-placeholder.png'">
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3>Documents et Preuves</h3>
                <div class="file-list">
                    ${data.files.map(file => {
            if (file.isPrivate) {
                return `
                                <div class="file-item">
                                    <span><i class="icon-file"></i> ${file.name} <span title="Document protégé">🔒</span></span>
                                    <a href="#" class="btn-download btn-private" data-url="${file.url}">Consulter</a>
                                </div>
                            `;
            } else {
                return `
                                <div class="file-item">
                                    <span><i class="icon-file"></i> ${file.name}</span>
                                    <a href="${file.url}" class="btn-download" target="_blank">Consulter</a>
                                </div>
                            `;
            }
        }).join('')}
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    stageItems.forEach(item => {
        item.addEventListener('click', () => {
            const stageId = item.getAttribute('data-stage');
            openModal(stageId);
        });
    });

    // Password Modal Injection
    const pwdModal = document.createElement('div');
    pwdModal.className = 'modal';
    pwdModal.id = 'pwd-modal';
    pwdModal.style.zIndex = '9999'; // ensure it's on top of the main modal
    pwdModal.innerHTML = `
        <div class="modal-overlay pwd-overlay"></div>
        <div class="modal-container" style="max-width: 400px; z-index: 10000;">
            <button class="modal-close pwd-close" aria-label="Fermer">&times;</button>
            <div class="modal-content" style="padding: 2.5rem 2rem; text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔒</div>
                <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem;">Document Protégé</h3>
                <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Veuillez entrer le mot de passe pour y accéder.</p>
                <input type="password" id="pwd-input" placeholder="Mot de passe" style="width: 100%; padding: 0.8rem 1rem; margin-bottom: 1rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; background: rgba(0,0,0,0.3); color: var(--text-main); font-family: 'Inter', sans-serif; font-size: 1rem; outline: none;">
                <p id="pwd-error" style="color: #ff4757; margin-bottom: 1rem; display: none; font-size: 0.9em;">Mot de passe incorrect.</p>
                <button id="pwd-submit" class="btn btn-primary" style="width: 100%; border: none; cursor: pointer;">Valider</button>
            </div>
        </div>
    `;
    document.body.appendChild(pwdModal);

    const pwdInput = document.getElementById('pwd-input');
    const pwdSubmit = document.getElementById('pwd-submit');
    const pwdClose = pwdModal.querySelector('.pwd-close');
    const pwdOverlay = pwdModal.querySelector('.pwd-overlay');
    const pwdError = document.getElementById('pwd-error');
    let currentTargetUrl = '';

    function openPwdModal(url) {
        currentTargetUrl = url;
        pwdModal.classList.add('active');
        pwdInput.value = '';
        pwdError.style.display = 'none';
        setTimeout(() => pwdInput.focus(), 100);
    }

    function closePwdModal() {
        pwdModal.classList.remove('active');
        pwdInput.value = '';
    }

    function checkPassword() {
        if (pwdInput.value === 'romain2026') { // <-- C'est ici que tu peux changer le mot de passe !
            window.open(currentTargetUrl, '_blank');
            closePwdModal();
        } else {
            pwdError.style.display = 'block';
            pwdInput.value = '';
            pwdInput.focus();
        }
    }

    pwdSubmit.addEventListener('click', checkPassword);
    pwdInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });
    pwdClose.addEventListener('click', closePwdModal);
    pwdOverlay.addEventListener('click', closePwdModal);

    // Handle private documents globally (modal + standalone pages)
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-private')) {
            e.preventDefault();
            openPwdModal(e.target.dataset.url);
        }
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Lightbox for screenshots
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-img" src="" alt="Capture plein écran">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Event delegation for screenshots
    modalBody.addEventListener('click', (e) => {
        const screenshotItem = e.target.closest('.screenshot-item');
        if (screenshotItem) {
            const img = screenshotItem.querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            }
        }
    });

    // Close lightbox
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (pwdModal && pwdModal.classList.contains('active')) {
                closePwdModal();
            } else if (lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            } else if (modal.classList.contains('active')) {
                closeModal();
            }
        }
    });
});

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
                "Sécurisation des bases de données et des accès utilisateurs",
                "Modification et optimisation de fonctions PHP existantes",
                "Refonte partielle de l'interface utilisateur pour une meilleure ergonomie",
                "Maintenance corrective sur l'intranet de la zone nord"
            ],
            stack: ['PHP', 'SQL', 'phpMyAdmin', 'Visual Studio Code', ''],
            screenshots: [
                { url: 'images/stages/dzpn-1.png', alt: 'Interface Intranet' },
                { url: 'images/stages/dzpn-2.png', alt: 'Gestion des accès' }
            ],
            files: [
                { name: 'Rapport de stage DZPN.pdf', url: 'assets/rapport_dzpn.pdf' },
                { name: 'Attestation de stage.pdf', url: 'assets/attestation_dzpn.pdf' }
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
            stack: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
            screenshots: [
                { url: 'images/stages/delssi-1.png', alt: 'Dashboard client' },
                { url: 'images/stages/delssi-2.png', alt: 'Mise en page responsive' }
            ],
            files: [
                { name: 'Rapport de stage DELSSI.pdf', url: 'assets/rapport_delssi.pdf' },
                { name: 'Carnet de bord.pdf', url: 'assets/carnet_delssi.pdf' }
            ]
        },
        'projet1': {
            title: 'Site E-commerce',
            company: 'Projet Personnel',
            date: '2024',
            location: 'Lille',
            description: "Une plateforme complète de vente en ligne avec panier, gestion des utilisateurs et panneau d'administration.",
            missions: [
                "Développement back-end en PHP",
                "Conception et requêtage de base de données MySQL",
                "Intégration HTML/CSS d'une interface responsive"
            ],
            stack: ['PHP', 'MySQL', 'CSS', 'HTML'],
            screenshots: [
                { url: 'images/project-placeholder.png', alt: 'Aperçu du site' }
            ],
            files: []
        },
        'projet2': {
            title: 'Gestionnaire de Tâches',
            company: 'Projet Scolaire',
            date: '2023 - 2024',
            location: 'Lycée Gaston Berger',
            description: "Application web pour organiser ses projets scolaires avec système de dates limites et priorités.",
            missions: [
                "Mise en place de la logique métier en JavaScript",
                "Sauvegarde des données via LocalStorage",
                "Création d'une interface utilisateur intuitive"
            ],
            stack: ['JavaScript', 'LocalStorage', 'HTML', 'CSS'],
            screenshots: [
                { url: 'images/project-placeholder.png', alt: 'Tableau de bord' }
            ],
            files: []
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
                    ${data.files.map(file => `
                        <div class="file-item">
                            <span><i class="icon-file"></i> ${file.name}</span>
                            <a href="${file.url}" class="btn-download" target="_blank">Consulter</a>
                        </div>
                    `).join('')}
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

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

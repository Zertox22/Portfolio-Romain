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
            description: "Durant ce stage de deuxième année au sein de la Direction Zonale de la Police Nationale, j'ai été chargé de missions critiques liées à la maintenance et à l'évolution de leurs outils internes.",
            missions: [
                "Sécurisation des bases de données et des accès utilisateurs",
                "Modification et optimisation de fonctions PHP existantes",
                "Refonte partielle de l'interface utilisateur pour une meilleure ergonomie",
                "Maintenance corrective sur l'intranet de la zone nord"
            ],
            stack: ['PHP', 'SQL', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
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
            description: "Mon premier stage en entreprise chez DELSSI m'a permis de découvrir le monde du développement professionnel et de mettre en pratique mes compétences en intégration web.",
            missions: [
                "Intégration de maquettes Figma en HTML/CSS",
                "Création de composants réutilisables en JavaScript",
                "Tests de compatibilité cross-browser",
                "Assistance à la mise en production de sites vitrines"
            ],
            stack: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Git'],
            screenshots: [
                { url: 'images/stages/delssi-1.png', alt: 'Dashboard client' },
                { url: 'images/stages/delssi-2.png', alt: 'Mise en page responsive' }
            ],
            files: [
                { name: 'Rapport de stage DELSSI.pdf', url: 'assets/rapport_delssi.pdf' },
                { name: 'Carnet de bord.pdf', url: 'assets/carnet_delssi.pdf' }
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

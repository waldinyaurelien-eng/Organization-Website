# Organisation Horizon — Site web

Site web officiel (version frontend) pour l'organisation. Construit en **HTML5 / CSS3 / JavaScript**, sans backend pour cette première version.

## Structure du projet

```
organisation-website/
│
├── index.html      → Accueil
├── about.html      → À propos
├── projects.html   → Projets
├── team.html       → Équipe
├── news.html       → Actualités
├── contact.html    → Contact
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── logo/
│   ├── hero/
│   ├── projects/
│   ├── team/
│   └── news/
│
└── README.md
```

## Données fictives (Dummy Data)

Toutes les informations affichées (nom, slogan, mission, statistiques, membres de l'équipe, projets, articles, numéros WhatsApp) sont **provisoires**. Elles sont clairement identifiables dans le code par des commentaires ou des libellés du type « à remplacer ».

### À remplacer avant la mise en ligne officielle
- Nom de l'organisation et logo (`images/logo/`)
- Slogan et description (section Hero de `index.html`)
- Mission, vision, valeurs (`about.html`)
- Photos (équipe, projets, actualités, hero) — actuellement des blocs de couleur en attendant les vraies images
- Statistiques d'impact (`index.html`, `projects.html`)
- Membres de l'équipe (`team.html`)
- Articles d'actualités (`news.html`)
- Adresse, téléphone, email (`contact.html`, footer de toutes les pages)
- Liens WhatsApp : contact (`https://wa.me/509XXXXXXXX`), groupe et chaîne (actuellement `#`)
- Liens des réseaux sociaux (actuellement `#`)

## Formulaire de contact

Le formulaire (`contact.html`) fonctionne uniquement côté client pour l'instant (validation + message de confirmation simulé dans `js/script.js`). Aucune donnée n'est envoyée ni stockée. Il pourra être connecté à un service externe (ex. Formspree) ou à un backend Django dans une future version.

## Déploiement

Le site est un site statique : il peut être déployé directement sur **Netlify** (glisser-déposer le dossier ou connecter le dépôt GitHub).

## Prochaines évolutions (hors périmètre v1)

Une version future pourra intégrer un backend **Django** pour :
- gérer les projets, articles et membres depuis un tableau de bord,
- recevoir réellement les messages du formulaire,
- gérer les comptes utilisateurs et, éventuellement, les dons,
- utiliser PostgreSQL comme base de données.

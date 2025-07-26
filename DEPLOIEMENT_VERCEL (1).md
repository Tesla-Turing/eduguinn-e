# 🚀 Guide de Déploiement Vercel - EduGuinée

## 📋 Prérequis
- Compte GitHub
- Compte Vercel (gratuit)
- Base de données PostgreSQL (Neon Database recommandé)

## 🔧 Étapes de Déploiement

### 1. Préparer le Repository GitHub
```bash
# Créer un nouveau repository sur GitHub
# Puis pousser votre code :
git init
git add .
git commit -m "Initial commit - EduGuinée Platform"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/eduguinee.git
git push -u origin main
```

### 2. Configurer la Base de Données
**Option A : Neon Database (Recommandé)**
1. Allez sur https://neon.tech
2. Créez un compte gratuit
3. Créez une nouvelle base de données
4. Copiez l'URL de connexion

**Option B : Autres providers**
- Supabase
- Railway
- PlanetScale
- ElephantSQL

### 3. Déployer sur Vercel

#### Option A : Via GitHub (Recommandée)
1. **Pousser sur GitHub**
   ```bash
   git add .
   git commit -m "Prêt pour déploiement Vercel"
   git push
   ```

2. **Importer dans Vercel**
   - Allez sur https://vercel.com
   - Cliquez "New Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement la configuration

3. **Variables d'Environnement**
   Dans les settings Vercel, ajoutez :
   ```
   DATABASE_URL=postgresql://username:password@hostname:port/database
   NODE_ENV=production
   ```

#### Option B : Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### 4. Configuration Automatique
Le fichier `vercel.json` configure automatiquement :
- Routing des API vers le serveur Node.js
- Service des fichiers statiques React
- Variables d'environnement de production

### 5. Structure après Build
```
dist/
├── public/          # Frontend buildé
├── server.js        # Backend buildé
└── package.json     # Dépendances
```

## 🔧 Configuration Spécifique

### A. Fichier vercel.json
Le fichier `vercel.json` est déjà configuré pour :
- Router les API calls vers `/server/index.ts`
- Servir les fichiers statiques depuis `/client/dist`
- Gérer les variables d'environnement

### B. Variables d'Environnement Requises
- `DATABASE_URL` : URL complète PostgreSQL
- `NODE_ENV` : `production`

### C. Base de Données
Le projet initialise automatiquement les données mockées guinéennes au premier lancement.

## 🎯 Post-Déploiement

### 1. Test des Fonctionnalités
- ✅ Page d'accueil avec professeurs guinéens
- ✅ Recherche et filtrage des cours
- ✅ Formulaire d'inscription professeurs
- ✅ Pages agences (Conakry, Kankan, Labé)
- ✅ Tarification en francs guinéens

### 2. Domaine Personnalisé (Optionnel)
- Acheter un domaine (ex: eduguinee.gn)
- Le configurer dans Vercel
- SSL automatique inclus

### 3. Monitoring
Vercel fournit :
- Analytics de performance
- Logs des erreurs
- Métriques d'utilisation

## 🔍 Dépannage

### Erreurs Communes
1. **Build Failed** : Vérifier les dépendances dans package.json
2. **Database Connection** : Vérifier DATABASE_URL
3. **API Routes 404** : Vérifier vercel.json routing

### Commandes Debug
```bash
# Tester le build localement
npm run build
npm run start

# Vérifier la base de données
npm run db:push
```

## 📊 Performance
Configuration optimisée pour :
- Temps de chargement < 2s
- Responsive design mobile
- SEO optimisé pour le marché guinéen
- Cache des ressources statiques

## 🎉 URL de Déploiement
Après déploiement, votre site sera disponible à :
`https://eduguinee.vercel.app` (ou votre domaine personnalisé)

---
**EduGuinée** - Plateforme de soutien scolaire pour la Guinée 🇬🇳
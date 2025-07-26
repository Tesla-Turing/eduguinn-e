# 🚀 Déploiement EduGuinée sur Vercel - Guide Rapide

## ⚡ Déploiement en 5 Minutes

### 1. Préparer votre Base de Données
- Créez un compte sur **Neon.tech** (gratuit)
- Créez une nouvelle base de données
- Copiez l'URL de connexion (ex: `postgresql://user:pass@host/db`)

### 2. Pousser sur GitHub
```bash
# Si pas encore fait
git init
git add .
git commit -m "EduGuinée - Plateforme de soutien scolaire"

# Créer repo sur GitHub puis :
git remote add origin https://github.com/VOTRE-USERNAME/eduguinee.git
git push -u origin main
```

### 3. Déployer sur Vercel
1. Allez sur **vercel.com**
2. Connectez-vous avec GitHub
3. Cliquez **"New Project"**
4. Sélectionnez votre repo **eduguinee**
5. Vercel détecte automatiquement la config ✅

### 4. Ajouter la Base de Données
Dans les **Environment Variables** Vercel :
```
DATABASE_URL = postgresql://user:pass@host/db
NODE_ENV = production
```

### 5. Déployer !
- Cliquez **"Deploy"**
- Attendez 2-3 minutes
- Votre site sera sur : `https://eduguinee.vercel.app`

## 🎯 C'est Tout !
Votre plateforme guinéenne est maintenant en ligne avec :
- ⚡ Professeurs guinéens (Aminata, Mamadou, Fatoumata)
- 🏢 Agences Conakry/Kankan/Labé  
- 💰 Tarifs en francs guinéens
- 📱 Interface responsive
- 🔒 Base de données sécurisée

## 🔧 Dépannage Rapide
**Erreur de build ?** → Vérifiez que `DATABASE_URL` est bien configuré
**404 sur /api ?** → Le fichier `vercel.json` gère le routing automatiquement
**Données manquantes ?** → La base se remplit automatiquement au 1er lancement

---
**Votre plateforme EduGuinée est prête ! 🇬🇳**
# Installations et dépendances

**Installations ci-dessous à faire uniquement si vous n'avez pas ces outils en local sur votre poste.**

## Visual Studio Code

- [Téléchargement Visual Studio Code](https://code.visualstudio.com/download)

## Node JS et NPM

- [Page téléchargement NodeJs prendre la dernière version LTS](https://nodejs.org/en/)
A la fin de l'installation, ouvrir Visual Studio Code, lancez le terminal puis tapez `npm --version`.
Si Node a été installée correctement, cette commande affichera dans le terminal la version de Node installé.

---

### Plugins Visual Studio Code

- Javascript (ES6) Code Snippets de *charalampos karypidis*
- Node Extension Pack de *Swellaby*
- node-snippets de *Chris Noring*
- Live Server de *Ritwick Dey*
- jQuery Code Snippets de *Don Jayamanne*
- Debugger for firefox de *Firefox DevTools*
- Thunder Client de *Thunder Client*
- SQLIte d'*alexcvzz*

#### Plugins back-End à installer le dernier jour de la formation lorsque Node sera abordé

- `npm i sqlite3`
- `npm i bcryptjs`
- `npm i jsonwebtoken`

--- 

# Testing

Depuis le terminal

1. `npm install`
2. `npm run e2e`
3. Se laisser guider par cypress depuis l'UI (User interface)
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=210&color=0:05080D,45:0066FF,100:00D4FF&text=SzCore+Recipe&fontSize=48&fontColor=FFFFFF&animation=fadeIn&fontAlignY=38&desc=Official+txAdmin+Deployment+Recipe&descAlignY=60&descSize=17" width="100%" alt="SzCore Recipe" />

<img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=22&duration=2500&pause=850&color=00D4FF&center=true&vCenter=true&width=760&height=55&lines=One+Recipe+%E2%80%A2+Modular+Repositories;Pinned+Release+%E2%80%A2+Clean+Startup+Order;SzCore+v1.4.0-rc1" alt="SzCore Recipe animated headline" />

<p><b>The official txAdmin deployment recipe for the modular SzCore Framework.</b></p>

<p>
<img src="https://img.shields.io/badge/SzCore-v1.4.0--rc1-8B5CF6?style=for-the-badge" alt="Version">
<img src="https://img.shields.io/badge/txAdmin-Recipe-00D4FF?style=for-the-badge" alt="txAdmin Recipe">
<img src="https://img.shields.io/badge/OneSync-Enabled-22C55E?style=for-the-badge" alt="OneSync">
<img src="https://img.shields.io/badge/Database-oxmysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="oxmysql">
</p>

<p>
<a href="https://github.com/Szilko121/SzCore-Recipe/stargazers"><img src="https://img.shields.io/github/stars/Szilko121/SzCore-Recipe?style=flat-square&logo=github&color=00D4FF" alt="Stars"></a>
<a href="https://github.com/Szilko121/SzCore-Recipe/issues"><img src="https://img.shields.io/github/issues/Szilko121/SzCore-Recipe?style=flat-square&logo=github&color=EF4444" alt="Issues"></a>
<img src="https://img.shields.io/github/last-commit/Szilko121/SzCore-Recipe?style=flat-square&logo=github&color=22C55E" alt="Last commit">
</p>

<p><a href="https://github.com/Szilko121/SzCore-Framework"><b>Framework</b></a> • <a href="https://github.com/Szilko121/SzCore-Framework/tree/main/docs"><b>Documentation</b></a> • <a href="recipe.yaml"><b>recipe.yaml</b></a> • <a href="https://github.com/Szilko121/SzCore-Recipe/issues"><b>Issues</b></a></p>

</div>

---

## 🎨 Native SzCore Branding

The recipe now deploys a dedicated **96×96 SzCore server icon** and a fully custom **SzCore loading screen**. The loading screen is self-contained, uses native FiveM loading progress events, and hands off directly to `szcore_multichar`.

## 🚀 What This Recipe Does

The recipe installs a complete SzCore server while keeping the ecosystem modular.

- 📦 Downloads every native SzCore resource from its **own GitHub repository**
- 🗄️ Installs and configures **oxmysql**
- 💾 Imports the SzCore database schema
- ⚙️ Places the ordered `server.cfg`
- 🔗 Installs optional ESX / QB-Core / Qbox compatibility adapters
- 🔒 Pins the framework to **v1.4.0-rc1** instead of silently tracking moving branches

## 🧩 Repository Model

```text
SzCore-Recipe
        │
        ├── szcore
        ├── szcore_ui
        ├── szcore_inventory
        ├── szcore_society
        ├── szcore_banking
        ├── szcore_vehicles
        ├── szcore_garage
        ├── ...
        └── optional compatibility adapters
```

Each resource stays independently cloneable and maintainable.

## 🛠️ txAdmin Installation

Use this repository as your deployment recipe source and select:

```text
recipe.yaml
```

The recipe handles the framework layout and startup order automatically.

## 📋 Requirements

- FXServer with OneSync
- Valid Cfx.re server license
- MariaDB / MySQL
- Network access to GitHub release repositories

## 🔒 Release Pinning

The RC recipe downloads resource tag/ref:

```text
v1.4.0-rc1
```

For production servers, keep deployments pinned to a known release and review migrations before upgrading.

## ⚠️ Before Production

This is a **Release Candidate**. Test character loading, persistence, inventory, economy, vehicles and server restart recovery on a staging server before opening it to players.

<div align="center">

[![Framework](https://img.shields.io/badge/SzCore-Framework-00D4FF?style=for-the-badge&logo=github)](https://github.com/Szilko121/SzCore-Framework)
[![Documentation](https://img.shields.io/badge/Read-Documentation-2563EB?style=for-the-badge&logo=github)](https://github.com/Szilko121/SzCore-Framework/tree/main/docs)

<br><br><sub>Official SzCore deployment recipe by <b>SzCode</b>.</sub>
<img src="https://capsule-render.vercel.app/api?type=waving&height=100&section=footer&color=0:00D4FF,55:0066FF,100:05080D" width="100%" alt="SzCore footer" />

</div>

# SzCore Recipe

Official txAdmin deployment recipe for **SzCore Framework v1.4.0-rc1** by SzCode.

The recipe installs every native SzCore resource from its own GitHub repository, preserving the modular layout used by the framework.

## txAdmin

Use this repository as a remote recipe source and select `recipe.yaml`.

## What it installs

- FXServer base resources
- `oxmysql` database dependency
- `szcore` core
- all selected `szcore_*` native resources
- optional compatibility adapters when enabled by the recipe/configuration
- SQL schema/migrations and ordered `server.cfg`/resource configuration

## Repository model

The recipe intentionally does **not** vendor all resources into this repository. Each module is downloaded from `https://github.com/Szilko121/<resource>` so users can also install/update individual resources independently.

## Release pinning

The release candidate recipe targets **v1.4.0-rc1**. Production deployments should stay pinned to known tags instead of blindly following moving branches.

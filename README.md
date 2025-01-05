<!-- ![Talos UI screenshot](docs/img/hero.png) -->

<p align="center">
  <p align="center">A general purpose local management UI for Talos Linux.</p>
  <p align="center">
    <a href="https://github.com/toblu96/talos-ui/releases/latest">
    <img alt="GitHub Release" src="https://img.shields.io/github/v/release/toblu96/talos-ui?style=for-the-badge&logo=GitHub&link=www.google.com">
    </a>
  </p>
</p>

---

# Deployment

## Environment Variables

|Env name| Default value| Description|
|--|--|--|
|NUXT_TALOS_CONFIG_PATH|`/var/run/secrets/talos.dev`|Sets the path to the talosconfig file|
|NUXT_TALOS_CONFIG_NAME|`config`|Sets the name of the talosconfig file or the key in the Kubernetes secret|

## Talos Service Account

This application needs access to the Talos API. Talos by default restricts access to its API because of security reason. To grant access to our application, we need to modify the Talos machine config first.

> [!NOTE]
> Check out the Talos guide on how to [enable Talos API access from Kubernetes](https://www.talos.dev/v1.9/advanced/talos-api-access-from-k8s/).

Talos API can be enabled in the machine config.

```bash
talosctl -n 172.20.0.2 edit machineconfig
```

Add the following lines, adjust the namespace if you deploy to another one:

```yaml
spec:
  machine:
    features:
      kubernetesTalosAPIAccess:
        enabled: true
        allowedRoles:
          - os:admin
        allowedKubernetesNamespaces:
          - default
```

A ServiceAccount can be injected in the deployment file containing a valid Talos config file.

```yaml
# ...
---
apiVersion: talos.dev/v1alpha1
kind: ServiceAccount
metadata:
  name: talos-api-access-talos-secrets
spec:
  roles:
    - os:admin
---
```

# Development Setup

Run your Nuxt application in development mode or check out [Nuxt docs](https://nuxt.com/docs/getting-started/installation) for more information.

```bash
bun run dev
```

## Generate local Talos cluster with config file

To test this application, set up a local Talos cluster in Docker. Follow the instructions from the [Talos quickstart guide]() and generate a new Talos config file.

Spin up local Talos cluster on Docker:

```bash
talosctl cluster create
```


Create `talosconfig` file:

```bash
talosctl config new --nodes 127.0.0.1
```

Check created config file for validity (when does it expire?):

```bash
talosctl config info --talosconfig './talosconfig'
```

## Generate new Talos API files from `.proto` files

Copy the latest files from the [Talos repo](https://github.com/siderolabs/talos/tree/main/api) and add it to the `./proto/talos` folder.

Run the code generation command:

```bash
npx buf generate
```

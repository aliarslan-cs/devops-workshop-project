# Template

    helm template the-db bitnami/postgresql -f db-helm.yaml > db.yaml

# Install

    helm install the-db bitnami/postgresql -f db-helm.yaml

# Uninstall

    helm uninstall the-db

### Remove the persistence volume claims

    kubectl delete -n default persistentvolumeclaim data-the-db-postgresql-primary-0
    kubectl delete -n default persistentvolumeclaim data-the-db-postgresql-read-0

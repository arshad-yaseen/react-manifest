const reactManifest = {
    update:(manifest_obj, manifest_placeholder) => {
        const stringManifest = JSON.stringify(manifest_obj);
        const blob = new Blob([stringManifest], { type: "application/json" });
        const manifestURL = URL.createObjectURL(blob);
        document
          .querySelector(`${manifest_placeholder}`)
          .setAttribute("href", manifestURL);
    }
}

export default reactManifest
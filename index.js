const manifest = {
  change: (manifest_obj, manifest_placeholder) => {
    const blob = new Blob([manifest_obj], { type: "application/json" });
    const manifestURL = URL.createObjectURL(blob);
    document
      .querySelector(manifest_placeholder)
      .setAttribute("href", manifestURL);
  },
};

export default manifest;

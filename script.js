// Project links: paste your live URLs and GitHub repos here.
// Leave a value empty ("") and that link won't show.
const PROJECT_LINKS = {
  nexcent:     { live: "", code: "" },
  worknest:    { live: "", code: "" },
  lagos:       { live: "", code: "" },
  lusterquest: { live: "", code: "" },
};

document.querySelectorAll(".links[data-project]").forEach((box) => {
  const links = PROJECT_LINKS[box.dataset.project] || {};
  const items = [
    [links.live, "View live site"],
    [links.code, "View code on GitHub"],
  ];
  items.forEach(([href, label]) => {
    if (!href) return;
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    a.target = "_blank";
    a.rel = "noopener";
    box.appendChild(a);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

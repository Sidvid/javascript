const sidebar = [
  {
    label: "Home",
    children: [],
  },
  {
    label: "Settings",
    children: [
      {
        label: "Notification",
        children: [],
      },
      {
        label: "Display",
        children: [],
      },
    ],
  },
  {
    label: "About",
    children: [],
  },
  {
    label: "Footer",
    children: [],
  },
];

function showSidebar(data) {
    let depth = 0;
  data.forEach((items) => {
    console.log(" ".repeat(depth),items.label)
    if (Array.isArray(items.children)) {
        depth++
      console.log("depth", depth);
      showSidebar(items.children);
      return;
    }
  });
}
console.log(showSidebar(sidebar));

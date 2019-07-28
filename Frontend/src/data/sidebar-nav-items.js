export default function() {
  return [
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Tasks Today",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts"
    },
    {
      title: "Tasks Archive",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview"
    },
    {
      title: "Edit Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite"
    },
    {
      title: "Blockers",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors"
    }
  ];
}

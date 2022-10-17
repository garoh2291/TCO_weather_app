export function closable(link) {
  if (link !== "" && link !== "new") {
    return <i className="close_icon bx bx-x"></i>;
  } else {
    return;
  }
}

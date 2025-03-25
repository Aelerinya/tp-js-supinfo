export function create(id, parent, width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const div = document.createElement("div");
  div.id = id;

  div.appendChild(canvas);
  parent.appendChild(div);

  const ctx = canvas.getContext("2d");

  return {
    ctx,
    id,
  };
}

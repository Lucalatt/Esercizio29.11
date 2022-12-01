export async function getPost() {
  return await (await fetch('assets/db.json')).json();
}







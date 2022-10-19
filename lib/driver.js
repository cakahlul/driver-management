export async function fetchAll() {
  const res = await fetch('https://randomuser.me/api/?results=5');
  const data = await res.json();

  return data?.results;
}

export default async function getData() {
  
    const res = await fetch(`http://localhost:3001/api/weeklist`)
    const projects = await res.json()
    const data = projects.data;
    return data
  }
  
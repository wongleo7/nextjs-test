export default async function getWorldTime(){
    const data = "https://worldtimeapi.org/api/ip"
    const res = await fetch(data)
    const currentTimePackage = await res.json()

    return currentTimePackage;
}
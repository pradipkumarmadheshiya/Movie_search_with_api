const moviesBox=document.getElementById("movieBox")
const input=document.getElementById("input")
const searchBtn=document.getElementById("btn")

const fetchMovie=async ()=>{
    moviesBox.innerHTML=""

    const apiKey="ad611b1e"
    const title=input.value
    
    try{
        const res=await fetch(`http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
        const data=await res.json()
        displayMovie(data)
    }
    catch(error){
        console.log("Something went wrong:", error)
    }
}
searchBtn.addEventListener("click", fetchMovie)

const displayMovie=(data)=>{
    input.value=""
    data.Search.forEach(el=>{
        const box=document.createElement("div")
        box.className="box"
        const poster=document.createElement("img")
        const title=document.createElement("p")
        title.className="title"
        const releaseYr=document.createElement("p")
        releaseYr.className="releaseYr"

        poster.src=el.Poster
        title.textContent=el.Title
        releaseYr.textContent="Release Date : "+el.Year

        box.append(poster, title, releaseYr)
        moviesBox.append(box)
    })
}
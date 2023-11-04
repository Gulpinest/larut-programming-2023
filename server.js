// // alert('test')
document.addEventListener('DOMContentLoaded', () => {
    const api_key = "u3gS1441FWqIVh1zJvbs24MXPVm0kD0x7J0G59hc"

    fetch("https://api.nasa.gov/planetary/apod?api_key="+api_key).then(res => res.json()).then(data => {
        const header = document.getElementById("header")

        header.innerHTML = `

            <div class="grid grid-cols-6 md:grid-cols-12">
                <div class="col-span-6 bg-white p-8">
                    <h2 class="font-bold text-7xl mb-8">APOD</h2>
                    <h4 class="float-right text-red-600">${data.date}</h4>
                    <h1 class="font-bold text-3xl text-yellow-600">${data.title}</h1>
                    <p>${data.explanation}</p>
                </div>

                <div class="col-span-6 bg-white">
                    <img class="h-96 m-auto object-cover md:float-right" src="${data.url}" alt="">
                </div>
            </div>
        `
    })

    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="+api_key).then(res => res.json()).then(data => {
        const c = document.getElementById("c")

        data.photos.slice(-8).forEach(row => {
            // console.log(row)
            
            c.innerHTML += `
            <div class="inline-block max-w-sm min-w-sm rounded shadow-lg m-auto mb-8">
                <img class="max-w-[300px] min-w-[300px] min-h-[300px] object-cover" src="${row.img_src}">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">ID : ${row.id}</div>
                </div>
            </div>
            `;
        })
    })

    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key="+api_key).then(res => res.json()).then(data => {
        const o = document.getElementById("o")

        data.photos.slice(-8).forEach(row => {
            // console.log(row)
            
            o.innerHTML += `
            <div class="inline-block max-w-sm min-w-sm rounded shadow-lg m-auto mb-8">
                <img class="max-w-[300px] min-w-[300px] min-h-[300px] object-cover" src="${row.img_src}">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">ID : ${row.id}</div>
                </div>
            </div>
            `;
        })
    })

    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key="+api_key).then(res => res.json()).then(data => {
        const s = document.getElementById("s")

        data.photos.slice(-8).forEach(row => {
            // console.log(row)
            
            s.innerHTML += `
            <div class="inline-block max-w-sm min-w-sm rounded shadow-lg m-auto mb-8">
                <img class="max-w-[300px] min-w-[300px] min-h-[300px] object-cover" src="${row.img_src}">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">ID : ${row.id}</div>
                </div>
            </div>
            `;
        })
    })
});
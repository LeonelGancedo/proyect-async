// API
const APIKEY = '?api_key=sDzcmPCllOQJdhFg1x68MUeiIqbI1XI6hJ28AXXP';
const API = 'https://api.nasa.gov/planetary/apod';

//ELEMENTOS
const contentId = document.getElementById('content');

//FECHAS Y FORMATO
const dateFormat = (newDate) => {
    const newDateToFormat = new Date(newDate)
    const year = newDateToFormat.getFullYear().toString()
    const monthError = (newDateToFormat.getMonth()+1).toString()
    const month = monthError.length === 1 ? `0${monthError}` : monthError
    const dayError = newDateToFormat.getDate().toString()
    const day = dayError.length === 1 ? `0${dayError}` : dayError
    const date = `${year}-${month}-${day}`
    return date
}

let dateHoyPre = new Date().getTime()
const diasResta = 5 * 24 * 60 * 60 * 1000
let dateInitialPre = (dateHoyPre - diasResta)

const initialDay = dateFormat(dateInitialPre)
const toDay = dateFormat(dateHoyPre)

console.log(initialDay);
console.log(toDay);

//FETCH DATA
const fetchData = async (urlAPI) => {
    const response = await fetch(urlAPI)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const severalDays = await fetchData(`${API}${APIKEY}&start_date=${initialDay}&end_date=${toDay}&thumbs=true`)
        // const oneDay = await fetchData(`${API}${APIKEY}&date=${date}`)
        // let view = `
        // ${severalDays.map(el => `
        //     <div class="group relative">
        //         <div
        //             class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        //             <img src="${el.thumbnail_url ? el.thumbnail_url : el.url}" alt="" class="w-full">
        //         </div>
        //         <div class="mt-4 flex justify-between">
        //             <h3 class="text-sm text-gray-700">
        //                 <span aria-hidden="true" class="absolute inset-0"></span>
        //                 ${el.title}
        //             </h3>
        //         </div>
        //      </div>
        // `)}
        // `;

        contentId.innerHTML = view
    } catch (error) {
        console.error(error);
    }
})();
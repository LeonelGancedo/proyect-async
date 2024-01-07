const APIKEY = '?api_key=sDzcmPCllOQJdhFg1x68MUeiIqbI1XI6hJ28AXXP'
// const API = 'https://api.nasa.gov/planetary/apod'
const API = 'https://api.nasa.gov/planetary/apod'
const contentId = null || document.getElementById('content')

const year = "2024"
const month = "01"
const day = "01"
const date = `${year}-${month}-${day}`


const fetchData = async (urlAPI) => {
    const response = await fetch(urlAPI)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const severalDays = await fetchData(`${API}${APIKEY}&start_date=2024-01-03&end_date=2024-01-07&thumbs=true`)
        // const oneDay = await fetchData(`${API}${APIKEY}&date=${date}`)
        let view = `
        ${severalDays.map(el => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${el.thumbnail_url ? el.thumbnail_url : el.url}" alt="" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${el.title}
                    </h3>
                </div>
             </div>
        `)}
        `;

        contentId.innerHTML = view
    } catch (error) {
        console.error(error);
    }
})();


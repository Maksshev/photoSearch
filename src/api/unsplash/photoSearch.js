import {unsplash} from "./unsplashConfig"

async function searchByKeyword(keyword) {
    return (await unsplash.get(`/search/photos?page=2`, {
        params: {
            query: keyword
        }
    })).data
}

export {searchByKeyword}
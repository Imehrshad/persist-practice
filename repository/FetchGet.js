import constant from "../configuration/constant.json"

export const GET = (url) => {
        return fetch(constant.API_ADDRESS + url)
}

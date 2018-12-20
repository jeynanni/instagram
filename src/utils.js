export const getUrlHash = () => {
    return document.URL.substr(document.URL.indexOf('#')+1)
 }
 
 export const parseHashParams = (hashParams) => {
    const splittedVars = hashParams.split("&")
    const returnObject = {}
    for (const element of splittedVars) {
        const splittedElement = element.split("=")
        returnObject[splittedElement[0]] = splittedElement.length === 2 ? splittedElement[1] : null
    }
 
    return returnObject
 }
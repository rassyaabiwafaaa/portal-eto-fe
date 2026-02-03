export const handlerWSBrivaMapping = (data:any, searchString:string) => {
    return data.filter((item: any) => {
        let firstFiveDigits = item.ip_addr.slice(0,6);
        return firstFiveDigits.includes(searchString);
    });
}
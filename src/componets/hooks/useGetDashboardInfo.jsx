import { useQuery } from "@tanstack/react-query"

const getDashboardInfo = async( productId, shift, date ) => {
    const baseAPIUrl = import.meta.env.VITE_REACT_APP_API_URL
    const searchParams = new URLSearchParams({
        productId: productId,
        shift: shift,
        date: date,
      });
    const response = await (await fetch(`${baseAPIUrl}/api/cells/dashboard?${searchParams}`)).json()

    return response;
}

const useGetDashboardInfo = ( productId, shift, date ) => {
    
    const query = useQuery({
        queryKey: ["dashboard", productId, shift, date],
        queryFn: () => {
         return getDashboardInfo(productId, shift, date);
        },
      });
    return query;
}

export default useGetDashboardInfo;
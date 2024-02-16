import { useQuery } from "@tanstack/react-query"

const getDashboardInfo = async( productId, shift, date ) => {
  if (productId === null || shift === null || date === null) {
    throw new Error("Alguno de los parámetros es null");
  }
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
        onError: (error) => {
          console.error("Error en la consulta de la informacion del dashboard:", error);
        },
        refetchInterval: 3 * 60 * 1000,
        staleTime: 2 * 60 * 1000
      });
    return query;
}

export default useGetDashboardInfo;
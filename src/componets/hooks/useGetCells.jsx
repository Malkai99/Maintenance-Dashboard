import { useQuery } from "@tanstack/react-query"

const getCells = async() => {
    const baseAPIUrl = import.meta.env.VITE_REACT_APP_API_URL
    const response = await (await fetch(`${baseAPIUrl}/api/product/select/plc`)).json();
    return response;
}

const useGetCells = () => {
    const query = useQuery({
        queryKey: ["cells"],
        queryFn: () => {
         return getCells();
        },
        refetchOnWindowFocus: false,
        onError: (error) => {
            console.error("Error en la consulta de celdas:", error);
        },
        staleTime: 8 * 60 * 60 * 1000,
      });
    return query;
}

export default useGetCells;
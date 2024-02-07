import { useQuery } from "@tanstack/react-query"

const getShifts = async() => {
    const baseAPIUrl = import.meta.env.VITE_REACT_APP_API_URL
    const response = await (await fetch(`${baseAPIUrl}/api/shift/select`)).json();
    return response;
}

const useGetShifts = () => {
    const query = useQuery({
        queryKey: ["shifts"],
        queryFn: () => {
         return getShifts();
        },
        refetchOnWindowFocus: false,
        onError: (error) => {
            console.error("Error en la consulta de celdas:", error);
        },
      });
    return query;
}

export default useGetShifts;
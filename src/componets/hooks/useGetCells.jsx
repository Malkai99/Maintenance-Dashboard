import { useQuery } from "@tanstack/react-query"

const getShifts = async() => {
    const baseAPIUrl = import.meta.env.VITE_REACT_APP_API_URL
    const response = await (await fetch(`${baseAPIUrl}/api/product/select/plc`))
                            .then(response => response.json())

    return response;
}

const useGetCells = () => {
    const query = useQuery({
        queryKey: ["cells"],
        queryFn: () => {
         return getShifts();
        },
      });
    return query;
}

export default useGetCells;
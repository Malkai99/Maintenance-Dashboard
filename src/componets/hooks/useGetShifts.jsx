import { useQuery } from "@tanstack/react-query"

const getShifts = async() => {
    const baseAPIUrl = import.meta.env.VITE_REACT_APP_API_URL
    const response = await (await fetch(`${baseAPIUrl}/api/shift/select`))
                            .then(response => response.json())

    return response;
}

const useGetShifts = () => {
    const query = useQuery({
        queryKey: ["shifts"],
        queryFn: () => {
         return getShifts();
        },
      });
    return query;
}

export default useGetShifts;
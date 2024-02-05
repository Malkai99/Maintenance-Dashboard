import { useQuery } from "@tanstack/react-query"

const getDashboardInfo = async() => {
    const baseAPIUrl = import.meta.env.VITE_REACT_APP_API_URL
    const response = await (await fetch(`${baseAPIUrl}/cells/dashboard`))
                            .then(response => response.json())

    return response;
}

const useGetDashboardInfo = () => {
    const query = useQuery({
        queryKey: ["dashboard"],
        queryFn: () => {
         return getDashboardInfo();
        },
      });
    return query;
}

export default useGetDashboardInfo;
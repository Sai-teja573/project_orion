import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState, useCallback } from "react";

export interface UseFetchOptions<R> {
	api: () => Promise<AxiosResponse<R>>;
	backup?: R;
	revalidate?: number; // revalidate in seconds
	dependencies?: any[];
	condition?: boolean;
}

export function useFetch<R, E>({
	api,
	backup,
	revalidate = 0,
	dependencies = [],
	condition = true,
}: UseFetchOptions<R>) {
	const [data, setData] = useState<R | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<E | null>(null);

	const fetchData = useCallback(async () => {
		if (!condition) return;

		setLoading(true);
		try {
			const res : AxiosResponse<R> = await api();
			setData(res.data);
		} catch (err) {
			if (axios.isAxiosError(err)) {
				const axiosError = err as AxiosError<E>;
				setError(axiosError.response?.data ?? null);
				setData(backup || null);
				console.log('backup data assigned successfully')
				// console.log(axiosError.response?.data);
			}
		} finally {
			setLoading(false);
		}
	}, [api]);

	useEffect(() => {
		fetchData();

		if (revalidate) {
			const intervalId = setInterval(fetchData, revalidate * 1000);
			return () => clearInterval(intervalId);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies); // dependencies provided by the user

	return { data, loading, error };
}

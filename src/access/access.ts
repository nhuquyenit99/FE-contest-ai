import {useCallback, useState, useEffect} from 'react';
import { DataAccess } from './base';
export type UseEntityData<T> = {
   error: boolean
    loading: boolean,
    data?: T,
    reload: () => void
};

export function useEntityData<T>(url: string | undefined, keyUpdate?: any, defaultData?: T): UseEntityData<T> {
    let [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const reload = () => {
        fetchUser();
    };

    const fetchUser = useCallback(async () => {
        try {
            if (!url) return;
            setLoading(true);
            const res: any = await DataAccess.Get(url);
            setData(res?.data);
        } catch (e) {
            console.error('Fetch entity error', e);
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        if (url) {
            fetchUser();
        } else {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, defaultData, keyUpdate]);

    return { loading, data, error, reload };
}

export type UseEntityDataList<T> = {
    error: boolean
    loading: boolean,
    data?: T[],
};


export function useEntityDataList<T>(url: string | undefined, page?: number, textSearch?: string): UseEntityDataList<T> {
    let [data, setData] = useState<T[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const fetchUser = useCallback(async () => {
        try {
            if (!url) return;
            setLoading(true);
            const res: any = await DataAccess.Get(`${url}${page ? `?page=${page}` : ''}${textSearch ? `&query=${textSearch}` : ''}`);
            setData(res);
        } catch (e) {
            console.error('Fetch entity error', e);
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [url, page, textSearch]);

    useEffect(() => {
        if (url) {
            fetchUser();
        } else {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, page]);

    return { loading, data, error };
}
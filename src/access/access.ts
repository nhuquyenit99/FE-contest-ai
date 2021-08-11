import {useCallback, useState, useEffect} from 'react';
import { DataAccess } from './base';

export type UseEntityData<T> = {
    error: boolean
    loading: boolean,
    data?: T,
    reload: () => void
};

export function useEntityData<T>(url: string | undefined): UseEntityData<T> {
    let [data, setData] = useState<T>();
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchUser = async () => {
        console.log('fetchUser');
        try {
            if (!url) return;
            setLoading(true);
            const res: T = await DataAccess.Get(url);
            setData(res);
        } catch (e) {
            console.error('Fetch entity error', e);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const reload = () => {
        console.log('reload');
        
        fetchUser();
    };

    useEffect(() => {
        if (url) {
            fetchUser();
        } else {
            setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return { loading, data, error, reload };
}

export type UseEntityDataList<T> = {
    error: boolean
    loading: boolean,
    data?: T[],
    refresh: () => void
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

    return { loading, data, error, refresh: fetchUser };
}

type ListDataObjResult<T> = {
    count: number,
    next: string,
    previous: string,
    results: T[]
}

export function useEntityDataListObj<T>(url: string | undefined, page?: number, textSearch?: string): UseEntityDataList<T> {
    let [data, setData] = useState<T[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const fetchUser = useCallback(async () => {
        try {
            if (!url) return;
            setLoading(true);
            const res: ListDataObjResult<T> = await DataAccess.Get(`${url}${page ? `?page=${page}` : ''}${textSearch ? `&query=${textSearch}` : ''}`);
            setData(res?.results);
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

    return { loading, data, error, refresh: fetchUser };
}

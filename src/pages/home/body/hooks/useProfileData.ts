import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface Profile {
    content: {
        profileId: number;
        description: string;
        userId: string;
        imageUrl: string;
        userName: string;
    }[];
    totalPages: number;
}

interface ProfileContent {
    profileId: number;
    description: string;
    imageUrl: string;
    userName: string;
}

export function useProfileData(targetRef: React.RefObject<HTMLDivElement>) {
    const [data, setData] = useState<ProfileContent[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [error, setError] = useState<Error | null>(null);
    const totalPage = useRef(1);

    const fetchData = useCallback(async () => {
        if (page >= totalPage.current) {
            return;
        }

        setLoading(true);

        try {
            const response = await axios.get<Profile>('http://49.50.163.154:8080/v1/profiles', {
                params: {
                    page,
                    size: 50,
                    sort: 'profileId,DESC',
                },
            });

            totalPage.current = response.data.totalPages;

            const newData = response.data.content.map(({ profileId, description, imageUrl, userName }) => ({
                profileId,
                description,
                imageUrl,
                userName
            }));

            setData(prevData => [...prevData, ...newData]);

        } catch (err) {
            //setError(err);
        } finally {
            setLoading(false);
        }
    }, [page, totalPage]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    useEffect(() => {
        const options = {
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPage((prevPage) => prevPage + 1);
            }
        }, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };

    }, []);

    return { data, loading, error };
}
export interface SearchParams {
    q?: string;
    year_end?: string | number;
    year_start?: string | number;
    media_type: string;
}

export interface SearchBarProps {
    setLoading: (value: boolean) => void;
}

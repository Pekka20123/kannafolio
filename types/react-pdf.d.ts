declare module 'react-pdf' {
    import { ComponentType, FunctionComponent } from 'react';

    export interface DocumentProps {
        file: string | File | any;
        onLoadSuccess?: (pdf: any) => void;
        onLoadError?: (error: any) => void;
        [key: string]: any;
    }

    export interface PageProps {
        pageNumber: number;
        scale?: number;
        [key: string]: any;
    }

    export const Document: ComponentType<DocumentProps>;
    export const Page: FunctionComponent<PageProps>;
}

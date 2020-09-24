/// <reference types="react" />
import { SEOType } from './types';
export declare type PriusSEOProps = {
    data: Array<SEOType>;
    errors?: any;
    isSlugActive: boolean;
    placeholder?: string;
    slug: string;
    onChange: (data: string | Array<string>, section: string) => void;
    inputId?: string;
    showTitle?: boolean;
};
declare const PriusSEO: ({ data, errors, isSlugActive, placeholder, slug, onChange, inputId, showTitle, }: PriusSEOProps) => JSX.Element;
export default PriusSEO;

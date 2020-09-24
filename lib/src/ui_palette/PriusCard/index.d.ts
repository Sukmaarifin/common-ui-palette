/// <reference types="react" />
export declare type PriusCardProps = {
    className?: string;
    desc: string;
    icon: JSX.Element;
    label?: string;
    paperId?: string;
    title: string;
    onClick?: () => void;
};
export declare function PriusCard({ className, desc, icon, paperId, label, title, onClick, }: PriusCardProps): JSX.Element;
export default PriusCard;

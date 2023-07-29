import classNames from "classnames";

interface SkeletonProps {
    rows: number;
    className?: string;
}

export default function Skeleton({ rows, className }: SkeletonProps) {
    const outerClasses = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        'w-full',
        className,
    );
    const innerClasses = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    )

    const boxes = Array(rows).fill(0).map((_, i) => {
        return <div key={i} className={outerClasses}>
            <div className={innerClasses}></div>
        </div>
    })

    return <>{boxes}</>;
}


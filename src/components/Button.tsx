import className from 'classnames';

interface ButtonProps {
    children: Element,
    style: 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
    type?: 'button' | 'submit',
    rounded?: boolean,
    outline?: boolean,
    loading?: boolean,
    disabled?: boolean,
}

export default function Button(props: ButtonProps & {[key: string]: any}) {
    const classes = className(
        props.className,
        'flex items-center px-3 py-1.5 border h-8 transition-all',
        {
            'opacity-80': props.loading,
            'border-blue-500 bg-blue-500 hover:bg-blue-400 text-white': props.style === 'primary',
            'border-gray-900 bg-gray-900 hover:bg-gray-800 text-white': props.style === 'secondary',
            'border-green-500 bg-green-500 hover:bg-green-400 text-white': props.style === 'success',
            'border-yellow-400 bg-yellow-400 hover:bg-yellow-300 text-white': props.style === 'warning',
            'border-red-500 bg-red-500 hover:bg-red-400 text-white': props.style === 'danger',
            'rounded-full': props.rounded,
            'bg-white hover:bg-white': props.outline,
            'text-blue-600': props.outline && props.style === 'primary',
            'text-gray-900': props.outline && props.style === 'secondary',
            'text-green-500': props.outline && props.style === 'success',
            'text-yellow-400': props.outline && props.style === 'warning',
            'text-red-500': props.outline && props.style === 'danger',
            '!bg-gray-200 !text-gray-500 !border-gray-400': props.disabled,
        }
    );

    return (
        <button type={props.type || 'button'} {...props.rest}
                className={classes}
                disabled={props.loading || props.disabled}>
            {props.loading ? '...' : props.children}
        </button>
    );
}

export function mergeClass(...args: (string | undefined | null)[]) {
    return args.filter(Boolean).join(' ');
}
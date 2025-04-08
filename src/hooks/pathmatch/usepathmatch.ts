
export const usepathmatch = (path: string, route: string) => {
    return path.startsWith(route)
}
